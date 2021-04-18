import React from "react";
import AddVideo from "../AddVideo";

import VideoListItems from "../VideoListItems";

import "./styles.css";

export default function VideoList() {
  return (
    <div className="container">
      <ul className="video-list">
        <VideoListItems />
        <AddVideo />
      </ul>
    </div>
  );
}
