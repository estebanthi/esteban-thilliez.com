import React from "react";

import "./MainContent.css";
import Introduction from "./Introduction";


const MainContent: React.FC = () => {
    return (
        <div className="MainContent">
            <Introduction />
        </div>
    );
}


export default MainContent;