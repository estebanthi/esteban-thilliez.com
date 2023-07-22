import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../Main/MainContent";

import "./Layout.css";


type LayoutProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const Layout: React.FC<LayoutProps> = ({ darkMode, setDarkMode }) => {
    return (
        <div className="Layout">
            <MainContent />
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}


export default Layout;