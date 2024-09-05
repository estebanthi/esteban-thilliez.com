import React, {useEffect} from "react";
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
    skills: string[];
    logo: string;
}


const ProjectHero: React.FC<ProjectHeroProps> = ({ title, description, image, link, side, color, skills, logo }) => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
    }, [i18n.language]);

    const getSkillColor = (color: string) => {
        switch (color) {
            case "color-2":
                return "color-3";
            case "color-3":
                return "color-2";
            default:
                return "color-2";
        }
    }

    const getSkills = (skills: string[]) => {
        const skillsJson = require("../../assets/data/skills.json");

        const skillsArray = skills.map((skill: string) => {
            const skillJson = skillsJson.find((skillJson: any) => skillJson.id === skill);
            return skillJson;
        });

        if (skillsArray.length === 0) {
            return [];
        }

        return skillsArray.map((skill: any) => {
            if (skill === undefined) {
                return null;
            }
            return <Skill name={skill.en} icon={skill.icon} color={getSkillColor(color)} />
        });
    }

    return (
        <div className={"ProjectHero " + side + " " + color}>
                <div className="ProjectHero__container">
                    <div className="ProjectHero__content">
                        { logo && <img className="ProjectHero__logo" src={require(`../../assets/data/projects/${logo}`)} alt="Project logo" />}
                        <h2 className="ProjectHero__title">{title}</h2>
                        <p className="ProjectHero__description">{description}</p>
                        {link && <a className="ProjectHero__link" href={link} target="_blank" rel="noopener noreferrer"><IconButton icon={<Eye />} text={t('projects.view')} color={color} onClick={() => { }} /></a>}
                    </div>
                    { getSkills(skills).length > 0 &&
                        <div className="ProjectHero__skills">
                        <h3>{t('projects.skills')}</h3>
                        {getSkills(skills)}
                        </div>
                    }
                </div>
                <img className={`ProjectHero__image`} src={require(`../../assets/data/projects/${image}`)} alt="Project image" />
        </div>
    );
}


export default ProjectHero;