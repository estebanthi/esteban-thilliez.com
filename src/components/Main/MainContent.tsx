import React from "react";

import "./MainContent.css";
import Introduction from "./Introduction";
import Feed from "./Feed";


const MainContent: React.FC = () => {
    return (
        <div className="MainContent" id="home">
            <Introduction />
            <Feed />
        </div>
    );
}


export default MainContent;