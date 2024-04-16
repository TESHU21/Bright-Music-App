import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Playlist from "../playlist";
import ErrorPages from "../errorPages";
import Navbar from "../../components/navbar";
import styled from "styled-components";
const MainBody = styled.div`
  height: 100vh;
  width: auto;
  background-color: hsl(218, 35%, 18%);
  background-color: #532075;
  opacity: 1;
  border-radius: 30px;
  display: flex;
`;
export default function Pagelayout() {
  return (
    <>
      <MainBody>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPages />} />
        </Routes>
      </MainBody>
    </>
  );
}
