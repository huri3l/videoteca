import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

export const FormModalContext = createContext();

export function FormModalProvider({ children }) {
  const [isFormModalUp, setIsFormModalUp] = useState(false);

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
      }}
    >
      {children}
      {isFormModalUp && <FormModal />}
    </FormModalContext.Provider>
  );
}
