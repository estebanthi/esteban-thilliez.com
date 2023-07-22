import React from "react";


import "./LinkButton.css";
import {Icon} from "react-bootstrap-icons";


interface LinkButtonProps {
    icon: React.ReactElement<Icon>
    link: string;
    color: string;
}


const LinkButton: React.FC<LinkButtonProps> = ({ icon, link, color }) => {

        return (
            <a className={"LinkButton " + color} href={link} target="_blank" rel="noopener noreferrer">
                {icon}
            </a>
        );

}


export default LinkButton;