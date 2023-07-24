import React from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import ProjectHero from "../Hero/ProjectHero";

const Projects = () => {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
    }, [i18n.language]);

    const projects = [
        {
            title_en: "Project 1",
            description_en: "Description 1",
            title_fr: "Projet 1",
            description_fr: "Description 1",
            image: "https://via.placeholder.com/500",
            link: "https://google.com",
        },
        {
            title_en: "Project 2",
            description_en: "Description 2",
            title_fr: "Projet 2",
            description_fr: "Description 2",
            image: "https://via.placeholder.com/500",
            link: "https://google.com",
        }
        ];

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
        <div className="Projects">
            <h1>{t("projects")}</h1>
            <div className="Projects__container">
                {projects.map((project, index) => ProjectHero({
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