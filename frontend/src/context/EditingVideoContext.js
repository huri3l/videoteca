import { createContext, useState } from "react";

export const EditingVideoContext = createContext();

export function EditingVideoProvider({ children }) {
  const [editingVideo, setEditingVideo] = useState(false);

  return (
    <EditingVideoContext.Provider value={{ editingVideo, setEditingVideo }}>
      {children}
    </EditingVideoContext.Provider>
  );
}
