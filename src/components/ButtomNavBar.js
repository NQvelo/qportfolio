import React from "react";
import "./ButtomNavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const BottomNavBar = () => {
  return (
    <div className="button-navbar">
      <div className="nav-item">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faHeart} />
        <span>Notifications</span>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faUser} />
        <span>Messages</span>
      </div>
    </div>
  );
};

export default BottomNavBar;
