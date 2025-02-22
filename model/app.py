from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS  # Import CORS
from ultralytics import YOLO
import os
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load model
model = YOLO("best.pt")

UPLOAD_FOLDER = "uploads"
RESULTS_FOLDER = "results"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RESULTS_FOLDER, exist_ok=True)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files['image']
    image_path = os.path.join(UPLOAD_FOLDER, image_file.filename)
    image_file.save(image_path)

    # Run YOLO prediction
    results = model(image_path, save=True, conf=0.25)

    # Get results
    predictions = []
    for r in results:
        for box in r.boxes:
            predictions.append({
                "class_name": model.names[int(box.cls[0])],
                "class_id": int(box.cls[0]),
                "confidence": float(box.conf[0]),
                "bounding_box": {
                    "xmin": float(box.xyxy[0][0]),
                    "ymin": float(box.xyxy[0][1]),
                    "xmax": float(box.xyxy[0][2]),
                    "ymax": float(box.xyxy[0][3])
                }
            })

    # Save the image with bounding boxes
    im_bgr = r.plot()
    im_rgb = Image.fromarray(im_bgr[..., ::-1])
    annotated_image_path = os.path.join(RESULTS_FOLDER, image_file.filename)
    im_rgb.save(annotated_image_path)

    return jsonify({
        "message": "Objects detected" if predictions else "No objects detected",
        "predictions": predictions,
        "annotated_image_url": f"/get_image/{image_file.filename}"
    })

@app.route('/get_image/<filename>', methods=['GET'])
def get_image(filename):
    return send_from_directory(RESULTS_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
