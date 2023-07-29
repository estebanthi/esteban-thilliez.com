import React from "react";
import { Tooltip } from "react-tooltip";

import "./Skill.css";


type SkillProps = {
    icon: string,
    name: string,
    color: string
}


const Skill = ({ icon, name, color }: SkillProps) => {
    const generateId = () => {
        return Math.random().toString(36).substring(2, 15);
    }

    const id = generateId();

    return (
        <div>
        <div className={"Skill " + color} data-tooltip-id={id} data-tooltip-content={name} data-tooltip-place={"bottom"}>
            <img src={icon} alt={name} />
            <Tooltip id={id} className="tooltip"/>
        </div>
        </div>
    );
}


export default Skill;