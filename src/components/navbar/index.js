import React from "react";
import NavbarButton from "./navbarButton";
import "./navbar.css";
import { FaHome, FaPlay, FaUser, FaSignOutAlt } from "react-icons/fa";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
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
