import React, { useContext } from "react";
import { IoAddSharp } from "react-icons/io5";
import { FormModalContext } from "../../context/FormModalContext";
import { VideoListContext } from "../../context/VideoListContext";

import Video from "../Video";

import "./styles.css";

export default function VideoList() {
  const { videos } = useContext(VideoListContext);
  const { openFormModal } = useContext(FormModalContext);

  return (
    <div className="container">
      {videos.length ? (
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
      ) : (
        <article className="empty-video-list">
          <h2>No videos to show.</h2>
          <button onClick={openFormModal}>Add video</button>
        </article>
      )}
    </div>
  );
}
