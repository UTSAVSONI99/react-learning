import React, { createContext } from "react";
import { unstable_setDevServerHooks } from "react-router-dom";

export const BioContext = createContext();
export const BioProvider = ({ children }) => {
  const myName = "utsav";
  const myAge = 22;

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// Ensure this file is imported correctly in your application

// custom hook
export const useBioContext = () => {
  const context = use(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};
