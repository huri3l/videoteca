import React from "react";
import AddVideo from "../AddVideo";

import { useAxios } from "../../hooks/useAxios";
import Video from "../Video";

import { Container, VideoListWrapper } from "./styles";

export default function VideoList() {
  const { data } = useAxios(`videos`);

  return (
    <Container>
      <VideoListWrapper>
        {data?.videos.map((video) => (
          <Video
            key={video._id ? video._id : Math.random()}
            id={video._id}
            title={video.title}
            link={video.link}
            liked={video.liked}
          />
        ))}
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
