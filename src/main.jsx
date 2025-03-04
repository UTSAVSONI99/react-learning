import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import Location from "./Location.jsx";
// import App from './App.jsx'
// import Practise from './Practise.jsx'
// import Props from './Props.jsx'
// import Colour from './components/Colour.jsx'
// import PasswordGenerator from "./PasswordGenerator.jsx";
// import CurrencyConverter from './CurrencyConverter.jsx'
import "./index.css";
import BMI from "./BMI-prj/BMI.jsx";
import Calc from "./Calculator/Calculator.jsx";
import WordCounter from "./Word-Counter/WordCounter.jsx";
import Counter from "./Counter/Counter.jsx";

import Weather from "./Weather/Weather.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <Practise />
    <Props /> */}
    {/* <Colour /> */}
    {/* <PasswordGenerator /> */}
    {/* <CurrencyConverter /> */}
    {/* <Location /> */}
    {/* <BMI /> */}
    {/* <div className="flex items-center justify-center min-h-screen text-white bg-[#141414]">
      <Calc />
    </div> */}

    {/* <WordCounter /> */}
    {/* <Counter /> */}
    <Weather />
  </StrictMode>
);
