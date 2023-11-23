import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../Main/MainContent";

import "./Layout.css";


type LayoutProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    setCursorColorChange: React.Dispatch<React.SetStateAction<boolean>>;
}


const Layout: React.FC<LayoutProps> = ({ darkMode, setDarkMode, setCursorColorChange }) => {
    return (
        <div className="Layout">
            <MainContent setCursorColorChange={setCursorColorChange}/>
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} setCursorColorChange={setCursorColorChange}/>
        </div>
    );
}


export default Layout;