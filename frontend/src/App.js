import React from "react";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";

import "./global.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <VideoList />
      <Footer />
    </div>
  );
}
