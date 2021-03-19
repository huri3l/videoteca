import React, { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FormModalContext } from "../../context/FormModalContext";
import api from "../../services/api";

import "./styles.css";

export default function FormModal() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const { closeFormModal } = useContext(FormModalContext);

  function submitForm(e) {
    e.preventDefault();

    api.post("videos", {
      title,
      link,
    });

    closeFormModal();
  }

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
          <section>
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
          </section>
          <button onClick={submitForm}>Submit</button>
        </form>
      </div>
    </div>
  );
}
