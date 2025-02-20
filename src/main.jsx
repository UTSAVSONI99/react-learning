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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <Practise />
    <Props /> */}
    {/* <Colour /> */}
    {/* <PasswordGenerator /> */}
    {/* <CurrencyConverter /> */}
    {/* <Location /> */}
    <BMI />
  </StrictMode>
);
