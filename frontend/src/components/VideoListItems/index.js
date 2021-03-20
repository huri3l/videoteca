import React, { useContext } from "react";
import { IoAddSharp } from "react-icons/io5";
import { FormModalContext } from "../../context/FormModalContext";
import { useAxios } from "../../hooks/useAxios";
import Video from "../Video";

import "./styles.css";

export default function VideoListItems() {
  const { openFormModal } = useContext(FormModalContext);
  const { data } = useAxios(`videos`);

  return (
    <>
      <ul className="video-list">
        {data?.videos.map((video) => (
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
