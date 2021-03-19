import React, { useContext, useEffect, useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { FormModalContext } from "../../context/FormModalContext";

import api from "../../services/api";

import "./styles.css";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  const { openFormModal } = useContext(FormModalContext);

  useEffect(() => {
    api.get("videos").then((res) => {
      setVideos(res.data.videos);
    });
  }, []);

  return (
    <div className="container">
      {videos.length ? (
        <>
          <ul className="video-list">
            {videos.map((video) => (
              <li key={video.id}>
                <article className="video">
                  <h2>{video.title}</h2>
                  <span>{video.link}</span>
                </article>
              </li>
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
