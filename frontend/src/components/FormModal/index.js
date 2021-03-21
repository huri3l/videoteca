import React, { useContext } from "react";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { EditingVideoContext } from "../../context/EditingVideoContext";
import { FormModalContext } from "../../context/FormModalContext";

import "./styles.css";

export default function FormModal() {
  const {
    closeFormModal,
    submitForm,
    title,
    setTitle,
    link,
    setLink,
  } = useContext(FormModalContext);

  const { editingVideo } = useContext(EditingVideoContext);

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function linkHandler(e) {
    setLink(e.target.value);
  }

  return (
    <div className="overlay">
      <div className="container">
        <header>
          <strong>{editingVideo ? "Edit video" : "Add a video"}</strong>
          <button onClick={closeFormModal}>
            <IoClose />
          </button>
        </header>
        <form>
          <main>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                placeholder="Insert a title"
                onChange={titleHandler}
              />
            </div>
            <div>
              <label htmlFor="title">Link</label>
              <input
                id="link"
                type="text"
                value={link}
                placeholder="Insert a link"
                onChange={linkHandler}
              />
            </div>
          </main>
          <footer>
            <button onClick={submitForm}>
              <IoCheckmark />
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
