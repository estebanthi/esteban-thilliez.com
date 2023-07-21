import React, {useEffect} from "react";

import "./Introduction.css";

import { useTranslation } from "react-i18next";
import {TypeAnimation} from "react-type-animation";
import introduction from "./Introduction";


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
            </div>
            <img src="https://via.placeholder.com/150" alt="John Doe" />
        </div>
    );
}


export default Introduction;