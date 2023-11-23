import React from "react";

import "./MainContent.css";
import Introduction from "./Introduction";
import Feed from "./Feed";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


type MainContentProps = {
    setCursorColorChange: React.Dispatch<React.SetStateAction<boolean>>;
}


const MainContent: React.FC<MainContentProps> = ({ setCursorColorChange }) => {
    return (
        <div className="MainContent" id="home">
            <Introduction />
            <Feed />
            <About />
            <Projects />
            <Contact />
            <Footer setCursorColorChange={setCursorColorChange}/>
        </div>
    );
}


export default MainContent;