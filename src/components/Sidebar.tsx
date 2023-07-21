import React from "react";
import "./Sidebar.css";
import DarkModeToggle from "./DarkModeToggle";


type SidebarProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const Sidebar: React.FC<SidebarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="Sidebar">
        <div className="Sidebar__header">
            <img src={require("../assets/icons/uk-flag.png")} alt="UK flag" />
            <img src={require("../assets/icons/fr-flag.png")} alt="USA flag" />
        </div>
        <div className="Sidebar__content">
            <a href="#home">Home</a>
            <a href="#feed">Feed</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    </div>
  );
}

export default Sidebar;