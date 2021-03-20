import React, { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
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
          <strong>Add a video</strong>
          <button onClick={closeFormModal}>
            <IoCloseSharp />
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
            <button onClick={submitForm}>Submit</button>
          </footer>
        </form>
      </div>
    </div>
  );
}
