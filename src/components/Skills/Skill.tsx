import React from "react";
import { Tooltip } from "react-tooltip";

import "./Skill.css";


type SkillProps = {
    icon: string,
    name: string,
    color: string
}


const Skill = ({ icon, name, color }: SkillProps) => {
    return (
        <div className={"Skill " + color} data-tooltip-id={name} data-tooltip-content={name} data-tooltip-place={"bottom"}>
            <img src={icon} alt={name} />
            <Tooltip id={name}/>
        </div>
    );
}


export default Skill;