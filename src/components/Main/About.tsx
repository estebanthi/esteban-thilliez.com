import React from "react";

import "./About.css";

import { useTranslation } from "react-i18next";
import Skill from "../Skills/Skill";


const About = () => {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
    }, [i18n.language]);

    const skills = require("../../assets/data/skills.json");
    const hobbies = require("../../assets/data/hobbies.json");

    const getColor = (index: number) => {
        if (index % 2 === 0) {
            return "color-2";
        }
        return "color-3";
    }

    const getSkills = () => {
        return skills.map((skill: any, index: number) => {
            return <Skill key={skill.name} icon={skill.icon} name={i18n.language === "en" ? skill.en : skill.fr} color={getColor(index)} />
        }
        );
    }

    const getHobbies = () => {
        return hobbies.map((hobby: any, index: number) => {
            return <Skill key={hobby.name} icon={hobby.icon} name={i18n.language === "en" ? hobby.en : hobby.fr} color={getColor(index)} />
        }
        );
    }

    return (
        <div className="About" id="about">
            <h1>{t("about")}</h1>
            <div className="content">
                <p>{t("about.content")}</p>
                <div className="skills-section">
                    <h3>{t("about.skills")}</h3>
                        <div className="grid">
                            {getSkills()}
                        </div>
                    <h3>{t("about.hobbies")}</h3>
                        <div className="grid">
                            {getHobbies()}
                        </div>
                    </div>
            </div>
        </div>
    );
}


export default About;