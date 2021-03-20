import React from "react";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";
import { FormModalProvider } from "./context/FormModalContext";
import { EditingVideoProvider } from "./context/EditingVideoContext";

import "./global.css";

export default function App() {
  return (
    <div className="App">
      <EditingVideoProvider>
        <FormModalProvider>
          <Header />
          <VideoList />
          <Footer />
        </FormModalProvider>
      </EditingVideoProvider>
    </div>
  );
}
