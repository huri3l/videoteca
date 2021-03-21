import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";
import { EditingVideoContext } from "../../context/EditingVideoContext";
import { IoAdd } from "react-icons/io5";

import "./styles.css";

export default function AddVideo() {
  const { openFormModal, setTitle, setLink } = useContext(FormModalContext);
  const { setEditingVideo } = useContext(EditingVideoContext);

  function handleAdd() {
    setTitle("");
    setLink("");
    setEditingVideo(false);
    openFormModal();
  }

  return (
    <li>
      <button className="add-video" onClick={handleAdd}>
        <IoAdd />
      </button>
    </li>
  );
}
