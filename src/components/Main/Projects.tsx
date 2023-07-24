import React from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import ProjectHero from "../Hero/ProjectHero";

const Projects = () => {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
    }, [i18n.language]);

    const projects = require("../../assets/data/projects.json");

    const getSide = (index: number) => {
        if (index % 2 === 0) {
            return "left";
        }
        return "right";
    }

    const getColor = (index: number) => {
        if (index % 2 === 0) {
            return "color-2";
        }
        return "color-3";
    }

    return (
        <div className="Projects" id="projects">
            <h1>{t("projects")}</h1>
            <div className="Projects__container">
                {projects.map((project: any, index: number) => ProjectHero({
                    title: i18n.language === "en" ? project.title_en : project.title_fr,
                    description: i18n.language === "en" ? project.description_en : project.description_fr,
                    image: project.image,
                    link: project.link,
                    side: getSide(index),
                    color: getColor(index),
                }))}
            </div>
        </div>
    );
}

export default Projects;