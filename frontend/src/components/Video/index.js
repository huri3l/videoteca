import React, { useContext } from "react";

import {
  IoTrashBinSharp,
  IoThumbsUpSharp,
  IoPencilSharp,
} from "react-icons/io5";
import { EditingVideoContext } from "../../context/EditingVideoContext";
import { FormModalContext } from "../../context/FormModalContext";
import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

import "./styles.css";

export default function Video({ id, title, link, liked }) {
  const { handleEditMode } = useContext(FormModalContext);
  const { setEditingVideo } = useContext(EditingVideoContext);

  const { data, mutate } = useAxios("videos");

  function handleLike() {
    api.patch(`/videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.map((video) => {
        if (video.id === id) {
          return { ...video, title, link, liked: !liked };
        }
        return video;
      }),
    };

    mutate(updatedVideos, false);
  }

  function handleDelete() {
    api.delete(`/videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.filter((video) => video.id !== id),
    };

    console.log(updatedVideos);

    mutate(updatedVideos, false);
  }

  function handleEdit() {
    handleEditMode(title, link);
    setEditingVideo(id);
  }

  return (
    <li key={id}>
      <article className="video">
        <h2>{title}</h2>
        <p>{link}</p>
        <div className="button-area">
          <button onClick={handleLike} className={liked ? "liked" : undefined}>
            <IoThumbsUpSharp />
          </button>
          <button onClick={handleEdit}>
            <IoPencilSharp />
          </button>
          <button onClick={handleDelete}>
            <IoTrashBinSharp />
          </button>
        </div>
      </article>
    </li>
  );
}
