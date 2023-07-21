import React from "react";

import { BrightnessHigh } from "react-bootstrap-icons";

import "./DarkModeToggle.css";


type DarkModeToggleProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
    return (
        <div className="DarkModeToggle">
            <BrightnessHigh onClick={() => setDarkMode(!darkMode)} className="DarkModeToggle__icon" />
        </div>
    );
}


export default DarkModeToggle