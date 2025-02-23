import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useAuth } from "../../context/AuthContext";
import { useDashboard, defaultDateRange } from "../../context/DashboardContext";
import { DateRange } from "../../interfaces/interface";
import { ImageInput } from "../../components/image-input/ImageInput";

export const Dashboard: React.FC = () => {
  const [value, setValue] = useState<DateRange>(defaultDateRange);
  const { appLogout } = useAuth();
  const { dateRange, updateDateRange } = useDashboard();

  useEffect(() => {
    console.log('hola')
    setValue({ startDate: dateRange.startDate, endDate: dateRange.endDate });
  }, [dateRange]);

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
    updateDateRange({
      startDate: newValue.startDate || defaultDateRange.startDate,
      endDate: newValue.endDate || defaultDateRange.endDate,
    });
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center p-6">
    {/* <div className="w-full h-screen flex flex-col items-center justify-center align-center px-4 bg-gradient-to-b from-white to-gray-300"> */}
      {/* Header Section */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-row items-center ">
        <img src="assets/img/clothes.png" className="w-10 mr-2"></img>
        <h2 className="text-3xl font-bold text-black">DefectUs</h2></div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {/* <Datepicker value={value} onChange={handleValueChange}  /> */}
          <button
            onClick={appLogout}
            className="flex items-center bg-gray-200 hover:bg-black text-black hover:text-white px-4 py-2 rounded-lg shadow transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6 mt-6 flex flex-col lg:flex-row">
        {/* Image Upload Section */}
        <div className="w-full  p-4">
          <ImageInput />
        </div>  
      </div>
    </div>
  );
};
