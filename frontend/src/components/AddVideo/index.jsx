import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";
import { EditingVideoContext } from "../../context/EditingVideoContext";

import { AddVideoButton, AddIcon } from "./styles";

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
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  );
}
