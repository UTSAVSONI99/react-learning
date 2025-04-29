import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen text-xl ${
        theme === "dark" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <h1 className="text-xl">Welcome to Dark Mode App</h1>
      <p className="text-lg">
        Click the button below to toggle between Light and Dark mode.
      </p>
      <button onClick={handleToggleTheme} className="mt-4 px-4 py-2 border">
        Switch to {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};
