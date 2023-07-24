import React from "react";

import "./MainContent.css";
import Introduction from "./Introduction";
import Feed from "./Feed";
import About from "./About";
import Projects from "./Projects";


const MainContent: React.FC = () => {
    return (
        <div className="MainContent" id="home">
            <Introduction />
            <Feed />
            <About />
            <Projects />
        </div>
    );
}


export default MainContent;