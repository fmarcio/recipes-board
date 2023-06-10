import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

// this function can access the object (action) passed in the dispatch function
const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  // useReducer hook accepts 2 arguments: the function that will manage the state updates (themeReducer)
  // and a initial value ({color: 'blue});
  // we can destruct as two values in an array, just like useState:
  // the first one (state) is related to the initial state
  // the second one corresponds to dispatch (send) a state change to the reducer function.
  // In other words, it will call the reducer function (themeReducer) to update the state
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    mode: "dark",
  });

  const changeColor = (color) => {
    // dispatch will fire themeReducer. The object passed as a value here is called "action"
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
