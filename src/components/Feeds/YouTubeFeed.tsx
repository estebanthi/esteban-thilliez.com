import React from "react";
import axios from "axios";

import "./YouTubeFeed.css";
import "../Main/Feed.css"

import LinkButton from "../Buttons/LinkButton";
import {Youtube} from "react-bootstrap-icons";
import YouTubePost from "./FeedPost";
import FeedPost from "./FeedPost";


type YouTubeFeedProps = {
    nItems: number
}


const YouTubeFeed: React.FC<YouTubeFeedProps> = ({nItems}) => {

    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {
        const apiKEY = process.env.REACT_APP_GOOGLE_API_KEY;
        const playlistId = process.env.REACT_APP_YOUTUBE_PLAYLIST_ID;
        const maxResults = nItems;

        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKEY}`)
            .then(res => {
                setData(res.data.items);
            }
        );
    }, []);


    return (
        <div className="YouTubeFeed">
            <div className="content">
                <div className="header">
                    <LinkButton icon={<Youtube/>} link={"https://www.youtube.com/channel/UCuDAZiZ79BkBFPrsG4N5QoQ"} color={"color-2"}/>
                    <h2>YouTube</h2>
                </div>
                <div className="feed">
                    {data.map((item, index) => (
                        <FeedPost title={item.snippet.title} date={item.snippet.publishedAt} link={"https://www.youtube.com/watch/?v=" + item.snippet.resourceId.videoId} thumbnail={item.snippet.thumbnails.maxres.url} key={index} buttonColor="color-2"/>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default YouTubeFeed;