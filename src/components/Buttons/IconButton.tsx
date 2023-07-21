import React from "react";

import "./IconButton.css";
import {Icon} from "react-bootstrap-icons";


type IconButtonProps = {
    icon: React.ReactElement<Icon>;
    onClick: () => void;
    text: string;
}


const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, text }) => {

    return (
        <button className="IconButton" onClick={onClick}>
            <span>{text}</span>
            {icon}
        </button>
    );

}


export default IconButton;