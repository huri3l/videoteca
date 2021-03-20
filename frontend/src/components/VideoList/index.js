import React from "react";
import { useAxios } from "../../hooks/useAxios";
import EmptyVideoListItems from "../EmptyVideoListItems";

import VideoListItems from "../VideoListItems";

import "./styles.css";

export default function VideoList() {
  const { data } = useAxios(`videos`);

  return (
    <div className="container">
      {data?.videos.length ? <VideoListItems /> : <EmptyVideoListItems />}
    </div>
  );
}
