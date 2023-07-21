import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

import "./Layout.css";


type LayoutProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const Layout: React.FC<LayoutProps> = ({ darkMode, setDarkMode }) => {
    return (
        <div className="Layout">
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
            <MainContent />
        </div>
    );
}


export default Layout;