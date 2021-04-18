import React, { useContext } from "react";
import { EditingVideoContext } from "../../context/EditingVideoContext";
import { FormModalContext } from "../../context/FormModalContext";

import {
  Overlay,
  Container,
  Header,
  CloseIcon,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CheckIcon,
} from "./styles";

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
    <Overlay>
      <Container>
        <Header>
          <strong>{editingVideo ? "Edit video" : "Add a video"}</strong>
          <button onClick={closeFormModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                placeholder="Insert a title"
                onChange={titleHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="title">Link</label>
              <input
                id="link"
                type="text"
                value={link}
                placeholder="Insert a link"
                onChange={linkHandler}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button onClick={submitForm}>
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
