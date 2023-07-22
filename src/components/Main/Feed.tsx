import React from "react";

import "./Feed.css";
import MediumFeed from "../Feeds/MediumFeed";
import YouTubeFeed from "../Feeds/YouTubeFeed";


const Feed: React.FC = () => {
    return (
        <div className="Feed" id="feed">
            <h1>FEED</h1>
            <div className="feeds">
                <MediumFeed nItems={2} />
                <YouTubeFeed nItems={3} />
            </div>
        </div>
    );
}


export default Feed;