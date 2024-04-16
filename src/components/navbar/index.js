import React from "react";
import NavbarButton from "./navbarButton";
import "./navbar.css";
import { FaHome, FaPlay, FaUser, FaSignOutAlt } from "react-icons/fa";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [image, setImage] = useState(
    "https://i.pinimg.com/474x/bf/74/56/bf745694ac40df8c1dd6068ac9f2101d.jpg"
  );
  return (
    <div className="navbar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <NavbarButton title="Home" to="/" icon={<FaHome />} />
        <NavbarButton title="Playlist" to="/playlist" icon={<FaPlay />} />
        <NavbarButton title="About" to="/about" icon={<FaUser />} />
      </div>
      <NavbarButton title="Sign Out" to="#" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Navbar;
