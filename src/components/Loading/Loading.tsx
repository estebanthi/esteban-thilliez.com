import React from "react";
import "./Loading.css";


const Loading: React.FC = () => {
    return (
        <div className="Loading" id="loading">
                <div className="spinner"></div>
        </div>
    );
}


export default Loading;