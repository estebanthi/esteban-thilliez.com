import React from "react";
import i18n from "i18next";

import "./LanguageSelector.css";


const LanguageSelector: React.FC = () => {
    return (
        <div className="LanguageSelector">
            <img src={require("../assets/icons/uk-flag.png")} alt="UK flag" onClick={() => i18n.changeLanguage("en")} className={i18n.language === "en" ? "active" : ""} />
            <img src={require("../assets/icons/fr-flag.png")} alt="FR flag" onClick={() => i18n.changeLanguage("fr")} className={i18n.language === "fr" ? "active" : ""} />
        </div>
    );
}


export default LanguageSelector;