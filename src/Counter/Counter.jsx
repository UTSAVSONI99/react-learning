import React from "react";
// import "./Counter.css";
// import "./index.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  // increase the counter
  const handleIncrement = (e) => {
    setCounter(counter + 1);
  };
  // dcrease the counter
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleClick3 = () => {
    setCounter(counter === 0);
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br  from-yellow-300 to-lime-300 text-white p-6">
      <div className="bg-white text-gray-900 shadow-2xl rounded-3xl p-8 w-96 flex flex-col items-center border border-gray-300">
        <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-5 text-center text-5xl font-extrabold shadow-md text-white relative">
          <div className="absolute top-2 right-2 cursor-pointer">
            <svg
              onClick={() => setCounter(0)}
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-white hover:text-gray-200 transition"
            >
              <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
            </svg>
          </div>
          {counter}
        </div>
        <div className="mt-8">
          <Stack spacing={3} direction="row">
            <Button
              onClick={handleIncrement}
              variant="contained"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg text-lg"
            >
              +
            </Button>
            <Button
              onClick={handleDecrement}
              variant="contained"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg text-lg"
            >
              -
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
export default Counter;
