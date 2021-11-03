import React from "react";
import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Ice App</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} alt="" className="iconImg" />
          <span className="counter">2</span>
        </div>
        <div className="icon">
          <img src={Message} alt="" className="iconImg" />
          <span className="counter">2</span>
        </div>
        <div className="icon">
          <img src={Settings} alt="" className="iconImg" />
          <span className="counter">2</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
