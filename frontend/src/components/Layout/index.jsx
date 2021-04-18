import React from "react";

import Header from "../Header";
import VideoList from "../VideoList";
import Footer from "../Footer";

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
}
