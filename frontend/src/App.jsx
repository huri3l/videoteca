import React from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { FormModalProvider } from "./context/FormModalContext";
import { EditingVideoProvider } from "./context/EditingVideoContext";

export default function App() {
  return (
    <>
      <EditingVideoProvider>
        <FormModalProvider>
          <Layout />
        </FormModalProvider>
      </EditingVideoProvider>
      <GlobalStyles />
    </>
  );
}
