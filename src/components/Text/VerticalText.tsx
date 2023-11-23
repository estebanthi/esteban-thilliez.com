import React from "react";

import "./VerticalText.css";

type VerticalTextProps = {
    text: string;
}


const VerticalText: React.FC<VerticalTextProps> = ({ text }) => {
    return (
        <div className="VerticalText">
            <div className="VerticalText__container">
                {text.split("").map((letter, index) => {
                    if (letter === " ") {
                        return <div key={index} className="VerticalText__letter VerticalText__letter--space">{"\u00A0"}</div>
                    }
                    return <div key={index} className="VerticalText__letter">{letter}</div>
                })}
            </div>
        </div>
    );
}


export default VerticalText;

