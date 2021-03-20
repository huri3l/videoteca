import React, { useContext } from "react";
import { IoAddSharp } from "react-icons/io5";
import { FormModalContext } from "../../context/FormModalContext";
import { VideoListContext } from "../../context/VideoListContext";
import Video from "../Video";

import "./styles.css";

export default function VideoListItems() {
  const { videos } = useContext(VideoListContext);
  const { openFormModal } = useContext(FormModalContext);

  return (
    <>
      <ul className="video-list">
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            link={video.link}
            liked={video.liked}
          />
        ))}
        <li>
          <button className="add-video" onClick={openFormModal}>
            <IoAddSharp />
          </button>
        </li>
      </ul>
    </>
  );
}
