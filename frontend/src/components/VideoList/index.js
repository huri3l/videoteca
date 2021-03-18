import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("videos").then((res) => {
      console.log(res.data.videos);
      setVideos(res.data.videos);
    });
  }, []);

  return (
    <ul className="video-list">
      {videos.map((video) => (
        <li key={video.id} className="video">
          <h1>{video.title}</h1>
          <span>{video.link}</span>
        </li>
      ))}
    </ul>
  );
}
