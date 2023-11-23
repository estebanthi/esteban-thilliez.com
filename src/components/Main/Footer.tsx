import React from "react";

import "./Footer.css";

import { useTranslation } from "react-i18next";
import links from "../../assets/data/links";
import LinkButton from "../Buttons/LinkButton";
import {BalloonHeart, EnvelopeFill, Heart, HeartFill, HeartPulse} from "react-bootstrap-icons";


type FooterProps = {
    setCursorColorChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ setCursorColorChange }) => {
    const { t } = useTranslation();
return (
        <div className="Footer">
            <div className="FooterContent" onMouseEnter={() => setCursorColorChange(true)} onMouseLeave={() => setCursorColorChange(false)}>
                <div>
                    <h3>{t("footer.thanks")}</h3>
                    <p>{t("footer.thanks_text")}</p>
                </div>
                <div>
                    <h3>{t("footer.links")}</h3>
                    <div className="Footer_links">
                        {links.map((link, index) => {
                            return <LinkButton key={index} icon={link.icon} link={link.link} color={"color-2"}/>
                        })}
                    </div>
                </div>
                <div>
                    <h3>{t("footer.contact")}</h3>
                    <div className="Footer_contact">
                        <div>
                            <EnvelopeFill/>
                            <a href="mailto:contact@esteban-thilliez.com">contact@esteban-thilliez.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer_madeby">
                <p>{t("madeby.1")} <HeartFill /> {t("madeby.2")}<a href="https://github.com/estebanthi/esteban-thilliez.com" target="_blank"> {t("madeby.3")}</a>.</p>
            </div>
        </div>
    );
}


export default Footer;