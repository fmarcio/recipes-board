import React, { createContext, useReducer, ReactNode } from "react";

interface ThemeState {
  color: string;
  mode: "light" | "dark";
}

interface ThemeAction {
  type: "CHANGE_COLOR" | "CHANGE_MODE";
  payload: string;
}

interface ThemeContextType extends ThemeState {
  changeColor: (color: string) => void;
  changeMode: (mode: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload as "light" | "dark" };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    mode: "dark",
  });

  const changeColor = (color: string) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (mode: "light" | "dark") => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
