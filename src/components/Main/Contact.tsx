import React, {useEffect} from "react";

import "./Contact.css";

import { useTranslation } from "react-i18next";
import {TypeAnimation} from "react-type-animation";
import ContactForm from "../Forms/ContactForm";


const Contact: React.FC = () => {

        const { t } = useTranslation();
        const [typeAnimation, setTypeAnimation] = React.useState<React.ReactNode>(<></>);

        useEffect(() => {
        setTypeAnimation(<span></span>);
        setTimeout(() => {
            setTypeAnimation(<TypeAnimation sequence={[t('contact.seq1'),t('contact.seq2'),t('contact.seq3'),t('contact.seq4'),]} wrapper="h3" repeat={Infinity} className="color-3" speed={35} deletionSpeed={1}/>);
            }, 0);
        }, [t]);

        return (
            <div className="Contact" id={"contact"}>
                <h1>{t('contact')}</h1>
                {typeAnimation}
                <p>{t('contact.desc')}<a href="mailto:contact@esteban-thilliez.com">contact@esteban-thilliez.com</a>{t('contact.desc2')}</p>
                <ContactForm />
            </div>
        );
}


export default Contact;