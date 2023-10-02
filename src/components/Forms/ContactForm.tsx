import React from "react";
import "./ContactForm.css";

import {useTranslation} from "react-i18next";
import IconButton from "../Buttons/IconButton";
import {Send} from "react-bootstrap-icons";
import axios from "axios";
import Loading from "../Loading/Loading";


type Inputs = {
    name: string,
    email: string,
    message: string
}

const ContactForm = () => {
    const {t} = useTranslation();
    const [success, setSuccess] = React.useState<boolean>(false);
    const [mailError, setMailError] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

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

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const submit = async () => {
        if (form.name === "") {
            setError("name");
        } else if (form.email === "") {
            setError("email");
        } else if (form.message === "") {
            setError("message");
        } else if (!validateEmail(form.email)) {
            setError("email");
        } else {
            const url = process.env.REACT_APP_MAIL_API_URL as string;
            const text = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
            const subject = "[Portfolio] New message from " + form.name;

            const body = {
                to: process.env.REACT_APP_MAIL_TO as string,
                text,
                subject
            }

            setLoading(true);
            axios.post(url, JSON.stringify(body), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(() => {
                setSuccess(true);
                setMailError(false);
                setForm({
                    name: "",
                    email: "",
                    message: ""
                });
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            })
                .catch(() => {
                    setMailError(true);
                    setSuccess(false)
                    setTimeout(() => {
                        setSuccess(false);
                        setMailError(false);
                    }, 5000);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };


    React.useEffect(() => {
    }, [form]);


    return (
        <div className="ContactForm">
            <div className="section1">
                <div>
                    <label>{t('contact.name')}</label>
                    <input type="text" id="name" onChange={(e) => setForm({...form, name: e.target.value})} value={form.name} />
                </div>
                <div>
                    <label htmlFor="email">{t('contact.email')}</label>
                    <input type="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} value={form.email} />
                </div>
            </div>
            <div className="section2">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" onChange={(e) => setForm({...form, message: e.target.value})} value={form.message} />
            </div>
            <IconButton icon={<Send/>} onClick={async () => await submit()} text={t('contact.send')} color="color-3" />
            {success && <p className="success">{t('contact.success')}</p>}
            {mailError && <p className="mailError">{t('contact.error')}</p>}
            <span style={{marginTop: "1rem"}}/>
            {loading && <Loading />}
        </div>
    );
}


export default ContactForm;