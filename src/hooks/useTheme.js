import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw Error("useTheme() must be used with a provider");

  return context;
};

export default useTheme;
