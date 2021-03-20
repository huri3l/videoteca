import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";

import "./styles.css";

export default function EmptyVideoListItems() {
  const { openFormModal } = useContext(FormModalContext);

  return (
    <article className="empty-video-list">
      <h2>No videos to show.</h2>
      <button onClick={openFormModal}>Add video</button>
    </article>
  );
}
