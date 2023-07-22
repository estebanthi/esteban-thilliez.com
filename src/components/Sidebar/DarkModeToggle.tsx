import React from "react";

import { BrightnessHigh } from "react-bootstrap-icons";

import "./DarkModeToggle.css";


type DarkModeToggleProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem("color-theme", darkMode ? "light" : "dark");
        }
    }

    return (
        <div className="DarkModeToggle">
            <BrightnessHigh onClick={toggleDarkMode} className="DarkModeToggle__icon" />
        </div>
    );
}


export default DarkModeToggle