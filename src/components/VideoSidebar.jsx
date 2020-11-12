import React from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
const VideoSidebar = () => {
  const [liked, setliked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setliked(!liked)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setliked(!liked)}
          />
        )}
        <p>1031</p>
      </div>
      <div className="videoSidebar__button">
        <ChatIcon fontSize="large" />
        <p>223</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>12</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
