// import React from 'react'
import { useState } from "react";

function BMI() {
  // state define
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //    logic of app

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter correct data");
    } else {
      let bmi = weight / (height * 0.3048) ** 2;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("you are a healthy person");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          BMI Calculator
        </h2>
        <form onSubmit={calcBmi} className="space-y-4">
          <div className="space-x-2">
            <label> Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-x-2">
            <label> Height (ft.)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Calculate
            </button>

            <button
              onClick={reload}
              type="submit"
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
            >
              Reload
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Your BMI: {bmi}</h3>
            <p className="text-gray-700">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BMI;
