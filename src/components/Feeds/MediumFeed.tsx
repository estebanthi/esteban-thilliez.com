import React from "react";
import axios from "axios";

import "./MediumFeed.css";
import "../Main/Feed.css";

import {Medium} from "react-bootstrap-icons";
import LinkButton from "../Buttons/LinkButton";
import FeedPost from "./FeedPost";


type MediumFeedProps = {
    nItems: number
}


const MediumFeed: React.FC<MediumFeedProps> = ({nItems}) => {

    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {

        const fetchArticles = async () => {
            const articlesIds = await axios.get(`https://mediumapi.esteban-thilliez.com/users/${process.env.REACT_APP_MEDIUM_USER_ID}/articles?count=${nItems}`)
            .then(res => res.data.data || []);

            const articles = await Promise.all(articlesIds.map((id: any) => axios.get(`https://mediumapi.esteban-thilliez.com/articles/${id}`)));

            setData(articles.map((article: any) => article.data.data));
        }

        fetchArticles();
    }, []);


    return (
        <div className="MediumFeed">
            <div className="content">
                <div className="header">
                    <LinkButton icon={<Medium />} link={"https://medium.com/@estebanthi"} color={"color-3"}/>
                    <h2>Medium</h2>
                </div>
                <div className="feed">
                    {data.map((item, index) => <FeedPost title={item.title} date={item.publishedAt} link={item.url} thumbnail={item.previewImage} key={index} buttonColor="color-3"/>)}
                </div>
            </div>
        </div>
    );
}


export default MediumFeed;