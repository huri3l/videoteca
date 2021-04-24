import React, { useContext } from "react";

import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import { EditingVideoContext } from "../../context/EditingVideoContext";
import { FormModalContext } from "../../context/FormModalContext";
import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

import { Container, ButtonArea, Button } from "./styles";

export default function Video({ id, title, link, liked }) {
  const { handleEditMode } = useContext(FormModalContext);
  const { setEditingVideo } = useContext(EditingVideoContext);

  const { data, mutate } = useAxios("videos");

  function handleLike() {
    api.patch(`/videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.map((video) => {
        if (video._id === id) {
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
      videos: data.videos?.filter((video) => video._id !== id),
    };

    mutate(updatedVideos, false);
  }

  function handleEdit() {
    handleEditMode(title, link);
    setEditingVideo(id);
  }

  return (
    <li key={id}>
      <Container>
        <h2>{title}</h2>
        <p>{link}</p>
        <ButtonArea>
          <Button onClick={handleLike} liked={liked}>
            <IoThumbsUp />
          </Button>
          <Button onClick={handleEdit}>
            <IoPencil />
          </Button>
          <Button onClick={handleDelete}>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
