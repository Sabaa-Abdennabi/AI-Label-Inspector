import React, { useState } from "react";

interface Prediction {
  bounding_box: {
    xmax: number;
    xmin: number;
    ymax: number;
    ymin: number;
  };
  class_id: number;
  class_name: string;
  confidence: number;
}

interface Detection {
  annotated_image_url: string;
  message: string;
  predictions: Prediction[];
}

export const ImageInput = () => {
  const [detection, setDetection] = useState<Detection | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setDetection(result);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 space-y-6">
      {/* File Upload UI */}
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full max-w-md h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            JPG, PNG (Max: 5MB)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileUpload}
        />
      </label>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-blue-500 font-semibold">Processing image...</div>
      )}

      {/* Results Section */}
      {detection && (
        <div className="bg-white dark:bg-gray-800 w-full flex flex-row max-w-lg p-5 rounded-xl shadow-lg">
          <div className="space-y-4">
          <h4 className="font-bold text-lg text-gray-700 dark:text-gray-300">
            🛠 Detection Results
          </h4>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {detection.message}
          </p>

          {/* Annotated Image Display */}
          <div className="mt-4">
            <img
              src={`http://127.0.0.1:5000${detection.annotated_image_url}`}
              alt="Annotated"
              className="w-full h-auto border rounded-lg shadow-sm"
            />
          </div>
          </div>

          {/* Prediction Details */}
          <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {detection.predictions.map((prediction, index) => (
              <li
                key={index}
                className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700"
              >
                <p className="font-bold text-gray-700 dark:text-gray-300">
                  🏷 Class:{" "}
                  <span className="text-blue-500">{prediction.class_name}</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Confidence: {Math.round(prediction.confidence * 100)}%
                </p>

                {/* Confidence Bar */}
                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5 mt-1">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{
                      width: `${Math.round(prediction.confidence * 100)}%`,
                    }}
                  ></div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  📍 Bounding Box: ({prediction.bounding_box.xmin},{" "}
                  {prediction.bounding_box.ymin}) → (
                  {prediction.bounding_box.xmax}, {prediction.bounding_box.ymax}
                  )
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
