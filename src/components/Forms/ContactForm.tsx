import React from "react";
import "./ContactForm.css";

import {useTranslation} from "react-i18next";
import IconButton from "../Buttons/IconButton";
import {Send} from "react-bootstrap-icons";
import axios from "axios";


type Inputs = {
    name: string,
    email: string,
    message: string
}

const ContactForm = () => {
    const {t} = useTranslation();
    const [success, setSuccess] = React.useState<boolean>(false);
    const [mailError, setMailError] = React.useState<boolean>(false);

    const [form, setForm] = React.useState<Inputs>({
        name: "",
        email: "",
        message: ""
    });

    const setError = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add("error");
            setTimeout(() => {
                element.classList.remove("error");
            }, 1000);
        }
    };

    const submit = async () => {
        if (form.name === "") {
            setError("name");
        } else if (form.email === "") {
            setError("email");
        } else if (form.message === "") {
            setError("message");
        } else {
            const url = process.env.REACT_APP_MAIL_API_URL as string;
            const email = form.email;
            const text = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
            const subject = "[Portfolio] New message from " + form.name;

            axios.post(url, {email, text, subject})
                .then(() => {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            })
                .catch(() => {
                    setMailError(true);
                    setSuccess(false)
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                })
        }
    };



    return (
        <div className="ContactForm">
            <div className="section1">
                <div>
                    <label>{t('contact.name')}</label>
                    <input type="text" id="name" onChange={(e) => setForm({...form, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">{t('contact.email')}</label>
                    <input type="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} />
                </div>
            </div>
            <div className="section2">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" onChange={(e) => setForm({...form, message: e.target.value})} />
            </div>
            <IconButton icon={<Send/>} onClick={async () => await submit()} text={t('contact.send')} color="color-3" />
            {success && <p className="success">{t('contact.success')}</p>}
            {mailError && <p className="mailError">{t('contact.error')}</p>}
        </div>
    );
}


export default ContactForm;