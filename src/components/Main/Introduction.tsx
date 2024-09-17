import React, {useEffect} from "react";

import "./Introduction.css";

import { useTranslation } from "react-i18next";
import {TypeAnimation} from "react-type-animation";
import IconButton from "../Buttons/IconButton";
import {
    CameraFill,
    KanbanFill,
    QuestionCircleFill,
    RssFill,
    SendFill
} from "react-bootstrap-icons";
import LinkButton from "../Buttons/LinkButton";
import links from "../../assets/data/links";

import { ReactComponent as Me } from "../../assets/me/me1.svg";


const Introduction: React.FC = () => {

    const { t } = useTranslation();
    const [typeAnimation, setTypeAnimation] = React.useState<React.ReactNode>(<></>);

    useEffect(() => {
            setTypeAnimation(<span></span>);
            setTimeout(() => {
                setTypeAnimation(<TypeAnimation sequence={[t('introduction.subtitle.universe')]} wrapper="span" repeat={0} className="color-3"/>);
            }, 0);

            initialSvgPathsColor();
    }, [t]);

    const pathsColors = [{"color-2": 35}, {"color-3": 35}, {"color-2-transparent": 15}, {"color-3-transparent": 15}];

    const initialSvgPathsColor = () => {
        const svg = document.querySelector(".Introduction .me");
        if (svg) {
            const paths = svg.querySelectorAll("path");
            paths.forEach((path) => {
                path.style.fill = "var(--main-color-3)";
            })
        }
    }

    const randomizeSvgPathsColor = () => {
        const svg = document.querySelector(".Introduction .me");
        if (svg) {
            const paths = svg.querySelectorAll("path");
            paths.forEach((path) => {
                const getColor = () => {
                    const random = Math.floor(Math.random() * 100);
                    let total = 0;
                    for (let i = 0; i < pathsColors.length; i++) {
                        total += Object.values(pathsColors[i])[0];
                        if (random <= total) {
                            return Object.keys(pathsColors[i])[0];
                        }
                    }
                }
                const color = getColor();
                path.style.fill = "var(--main-" + color + ")";
            })
        }
    }

    setTimeout(() => {
        setInterval(() => {
            randomizeSvgPathsColor();
        }, 3000);
    }, 5000);

    return (
        <div className="Introduction">
            <div className="content">
                <h1>{t('introduction.title.line1')}<br/>
                    {t('introduction.title.line2')} Esteban <span className="color-2">Thilliez</span></h1>
                <h2>{t('introduction.subtitle')} {typeAnimation}</h2>
                
                <div className="navigation">
                    <a href="#feed"><IconButton icon={<RssFill/>} text={t('feed')} onClick={() => {} } color="color-3"/></a>
                    <a href="#about"><IconButton icon={<QuestionCircleFill/>} text={t('about')} onClick={() => {} } color="color-3"/></a>
                    <a href="#projects"><IconButton icon={<KanbanFill/>} text={t('projects')} onClick={() => {} } color="color-3"/></a>
                    <a href="#contact"><IconButton icon={<SendFill/>} text={t('contact')} onClick={() => {} } color="color-3"/></a>
                </div>

                <div className="links">
                    {links.map((link, index) => {
                        return <LinkButton key={index} icon={link.icon} link={link.link} color={"color-2"}/>
                    })}
                </div>

                <div className="photo-portfolio-section">
                    <a href="https://photo.esteban-thilliez.com" target="_blank" rel="noreferrer">Photo Portfolio</a>
                </div>
            </div>
            <Me className="me"/>
        </div>
    );
}


export default Introduction;