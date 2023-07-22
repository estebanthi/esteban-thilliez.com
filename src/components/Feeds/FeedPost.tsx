import React from "react";

import "./FeedPost.css";
import IconButton from "../Buttons/IconButton";
import {Eye} from "react-bootstrap-icons";

import { useTranslation } from "react-i18next";


type FeedPostProps = {
    title: string;
    date: string;
    link: string;
    thumbnail: string;
    buttonColor: string;
}


const FeedPost: React.FC<FeedPostProps> = ({title, date, link, thumbnail, buttonColor}) => {

    const { t, i18n } = useTranslation();
    const [currentLocale, setCurrentLocale] = React.useState<string>("en");

    React.useEffect(() => {
        setCurrentLocale(i18n.language);
    }, [i18n.language]);

    const formatDate = (date: string) => {

        const dateObj = new Date(date);
        const lang = currentLocale;

        const day = dateObj.toLocaleString(lang, {day: "numeric"});
        const month = dateObj.toLocaleString(lang, {month: "long"});
        const year = dateObj.toLocaleString(lang, {year: "numeric"});

        return `${day} ${month} ${year}`;
    }

    return (
        <div className="FeedPost">
            <img src={thumbnail} alt={title}/>
            <div className="content">
                <p>{formatDate(date)}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank"><IconButton icon={<Eye />} onClick={() => {}} text={t('feed.view')} color={buttonColor} /></a>
            </div>
        </div>
    );
}


export default FeedPost;