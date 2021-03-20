import React, { useContext } from "react";
import { VideoListContext } from "../../context/VideoListContext";
import EmptyVideoListItems from "../EmptyVideoListItems";

import VideoListItems from "../VideoListItems";

import "./styles.css";

export default function VideoList() {
  const { videos } = useContext(VideoListContext);

  return (
    <div className="container">
      {videos.length ? <VideoListItems /> : <EmptyVideoListItems />}
    </div>
  );
}
