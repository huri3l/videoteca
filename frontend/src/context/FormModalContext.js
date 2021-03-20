import { createContext, useContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../services/api";
import { EditingVideoContext } from "./EditingVideoContext";

export const FormModalContext = createContext();

export function FormModalProvider({ children }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isFormModalUp, setIsFormModalUp] = useState(false);

  const { editingVideo } = useContext(EditingVideoContext);

  function handleEditMode(videoTitle, videoLink) {
    setTitle(videoTitle);
    setLink(videoLink);
    openFormModal();
  }

  function submitForm(e) {
    e.preventDefault();
    if (editingVideo) {
      api.put(`videos/${editingVideo}`, {
        title,
        link,
      });
    } else {
      api.post("videos", {
        title,
        link,
      });
    }

    closeFormModal();
  }

  function openFormModal() {
    setIsFormModalUp(true);
  }

  function closeFormModal() {
    setIsFormModalUp(false);
  }

  return (
    <FormModalContext.Provider
      value={{
        isFormModalUp,
        setIsFormModalUp,
        openFormModal,
        closeFormModal,
        handleEditMode,
        title,
        setTitle,
        link,
        setLink,
        submitForm,
      }}
    >
      {children}
      {isFormModalUp && <FormModal />}
    </FormModalContext.Provider>
  );
}
