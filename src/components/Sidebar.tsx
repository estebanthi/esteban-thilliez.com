import React from "react";
import "./Sidebar.css";
import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";


type SidebarProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const Sidebar: React.FC<SidebarProps> = ({ darkMode, setDarkMode }) => {

    const { t } = useTranslation();

  return (
    <div className="Sidebar">
        <LanguageSelector />
        <div className="Sidebar__content">
            <a href="#home">{t('home')}</a>
            <a href="#feed">{t('feed')}</a>
            <a href="#about">{t('about')}</a>
            <a href="#projects">{t('projects')}</a>
            <a href="#contact">{t('contact')}</a>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    </div>
  );
}

export default Sidebar;