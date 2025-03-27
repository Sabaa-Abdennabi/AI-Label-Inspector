import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center align-center px-4 bg-gradient-to-b from-white to-gray-300">
      <div className="relative bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <img
          className="w-[36px] h-[36px] absolute xl:right-[50px] top-[20px]"
          src="assets/img/tag.png"
          alt="Stripe"
        />
        <h1 className="xl:text-7xl text-5xl font-extrabold text-black drop-shadow-lg shadow-slate-500 text-center">
          DefectUs
        </h1>
        <h3 className="mt-7 text-l text-center">
          Precision in Every Label, Efficiency in Every Scan
        </h3>
        <h6 className="text-xs text-center mt-3 text-gray-600" >To detect defects in your textile label,
          simply upload an image of the label. 
          <br></br> Our AI model will analyze it for any imperfections and provide you with 
          <br></br> detailed results including confidence levels and detected issues.</h6>
        <div className="py-10 flex flex-row space-x-2 align-middle justify-center">
          <Link to="/dashboard">
            <button className="bg-white hover:bg-black px-5 py-2 text-sm leading-5 rounded-md font-semibold text-black hover:text-white border border-black hover:border-black w-40">
              Get started now
            </button>
          </Link>
          {/* <Link to="/login">
            <button className="bg-black hover:bg-gray-700 px-5 py-2 text-sm leading-5 rounded-md font-semibold text-white border border-black hover:border-black w-32">
              Log in
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};