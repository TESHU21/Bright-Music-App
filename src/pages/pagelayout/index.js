import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Playlist from "../playlist";
import ErrorPages from "../errorPages";
import Navbar from "../../components/navbar";
import "./pagelayout.css";

export default function Pagelayout() {
  return (
    <>
      <div className="main-body">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPages />} />
        </Routes>
      </div>
    </>
  );
}
