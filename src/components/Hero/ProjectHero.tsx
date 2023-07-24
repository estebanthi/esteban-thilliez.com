import React from "react";
import "./ProjectHero.css";
import IconButton from "../Buttons/IconButton";
import {Eye} from "react-bootstrap-icons";


type ProjectHeroProps = {
    title: string;
    description: string;
    image: string;
    link: string;
    side: "left" | "right";
    color: string;
}


const ProjectHero: React.FC<ProjectHeroProps> = ({ title, description, image, link, side, color }) => {
    return (
        <div className={"ProjectHero " + side + " " + color}>
                <div className="ProjectHero__content">
                    <h2 className="ProjectHero__title">{title}</h2>
                    <p className="ProjectHero__description">{description}</p>
                    <a className="ProjectHero__link" href={link} target="_blank" rel="noopener noreferrer"><IconButton icon={<Eye />} text="See more" color={color} onClick={() => { }} /></a>
                </div>
                <img className={`ProjectHero__image`} src={image} alt="Project" />
        </div>
    );
}


export default ProjectHero;