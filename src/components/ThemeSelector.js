import React from "react";
import "./ThemeSelector.css";
import useTheme from "../hooks/useTheme";
import modeIcon from "../assets/brightness_icon.svg";

export default function ThemeSelector() {
  const themeColors = ["#58249c", "#249c6b", "#b70233"];

  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle" onClick={toggleMode}>
        <img
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
