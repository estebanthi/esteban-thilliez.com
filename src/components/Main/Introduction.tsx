import React, {useEffect} from "react";

import "./Introduction.css";

import { useTranslation } from "react-i18next";
import {TypeAnimation} from "react-type-animation";
import IconButton from "../Buttons/IconButton";
import {
    Github,
    KanbanFill,
    Linkedin,
    Medium,
    Question,
    QuestionCircleFill,
    RssFill,
    SendFill, Youtube
} from "react-bootstrap-icons";
import LinkButton from "../Buttons/LinkButton";
import links from "../../assets/data/links";


const Introduction: React.FC = () => {

    const { t } = useTranslation();
    const [typeAnimation, setTypeAnimation] = React.useState<React.ReactNode>(<></>);

    useEffect(() => {
            setTypeAnimation(<span></span>);
            setTimeout(() => {
                setTypeAnimation(<TypeAnimation sequence={[t('introduction.subtitle.universe')]} wrapper="span" repeat={0} className="color-3"/>);
            }, 0);
    }, [t]);

    return (
        <div className="Introduction">
            <div className="content">
                <h1>{t('introduction.title.line1')}<br/>
                    {t('introduction.title.line2')} Esteban <span className="color-2">Thilliez</span></h1>
                <h2>{t('introduction.subtitle')} {typeAnimation}</h2>
                
                <div className="navigation">
                    <a href="#feed"><IconButton icon={<RssFill/>} text={t('feed')} onClick={() => {} }/></a>
                    <a href="#about"><IconButton icon={<QuestionCircleFill/>} text={t('about')} onClick={() => {} }/></a>
                    <a href="#projects"><IconButton icon={<KanbanFill/>} text={t('projects')} onClick={() => {} }/></a>
                    <a href="#contact"><IconButton icon={<SendFill/>} text={t('contact')} onClick={() => {} }/></a>
                </div>

                <div className="links">
                    {links.map((link, index) => {
                        return <LinkButton key={index} icon={link.icon} link={link.link}/>
                    })}
                </div>
            </div>
            <img src="https://via.placeholder.com/150" alt="John Doe" />
        </div>
    );
}


export default Introduction;