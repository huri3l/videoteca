import React, { useContext } from "react";

import {
  IoTrashBinSharp,
  IoThumbsUpSharp,
  IoPencilSharp,
} from "react-icons/io5";
import { EditingVideoContext } from "../../context/EditingVideoContext";
import { FormModalContext } from "../../context/FormModalContext";

import api from "../../services/api";

import "./styles.css";

export default function Video({ id, title, link, liked }) {
  const { handleEditMode } = useContext(FormModalContext);
  const { setEditingVideo } = useContext(EditingVideoContext);

  function handleLike() {
    api.patch(`/videos/${id}`);
  }

  function handleDelete() {
    api.delete(`/videos/${id}`);
  }

  function handleEdit() {
    handleEditMode(title, link);
    setEditingVideo(id);
  }

  return (
    <li key={id}>
      <article className="video">
        <h2>{title}</h2>
        <span>{link}</span>
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
