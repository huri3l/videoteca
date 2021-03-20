import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const VideoListContext = createContext();

export function VideoListProvider({ children }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("videos").then((res) => {
      setVideos(res.data.videos);
    });
  }, []);

  return (
    <VideoListContext.Provider
      value={{
        videos,
        setVideos,
      }}
    >
      {children}
    </VideoListContext.Provider>
  );
}
