import React from "react";
import "./ProjectHero.css";
import IconButton from "../Buttons/IconButton";
import {Eye} from "react-bootstrap-icons";
import Skill from "../Skills/Skill";

import { useTranslation } from "react-i18next";


type ProjectHeroProps = {
    title: string;
    description: string;
    image: string;
    link: string;
    side: "left" | "right";
    color: string;
}


const ProjectHero: React.FC<ProjectHeroProps> = ({ title, description, image, link, side, color }) => {

    const { t, i18n } = useTranslation();

    return (
        <div className={"ProjectHero " + side + " " + color}>
                <div className="ProjectHero__container">
                    <div className="ProjectHero__content">
                        <h2 className="ProjectHero__title">{title}</h2>
                        <p className="ProjectHero__description">{description}</p>
                        <a className="ProjectHero__link" href={link} target="_blank" rel="noopener noreferrer"><IconButton icon={<Eye />} text="See more" color={color} onClick={() => { }} /></a>
                    </div>
                    <div className="ProjectHero__skills">
                        <h3>{t('projects.skills')}</h3>
                        <Skill name="React" icon="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png" color={color === "color-2" ? "color-3" : "color-2"} />
                        <Skill name="Typescript" icon="https://img.icons8.com/color/48/000000/typescript.png" color={color === "color-2" ? "color-3" : "color-2"} />
                    </div>
                </div>
                <img className={`ProjectHero__image`} src={require(`../../assets/data/projects/${image}`)} alt="Project image" />
        </div>
    );
}


export default ProjectHero;