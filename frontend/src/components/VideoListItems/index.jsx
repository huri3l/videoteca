import React from "react";

import { useAxios } from "../../hooks/useAxios";
import Video from "../Video";

import "./styles.css";

export default function VideoListItems() {
  const { data } = useAxios(`videos`);

  return (
    <>
      {data?.videos.map((video) => (
        <Video
          key={video._id}
          id={video._id}
          title={video.title}
          link={video.link}
          liked={video.liked}
        />
      ))}
    </>
  );
}
