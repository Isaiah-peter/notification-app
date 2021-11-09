import React, { useEffect, useState } from "react";
import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";

const Navbar = ({ socket }) => {
  const [notification, setNotification] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotification((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayName = ({ senderName, type }) => {
    let actions;

    if (type === 1) {
      actions = "like your post";
    }

    if (type === 2) {
      actions = "dislike your post ";
    }

    if (type === 3) {
      actions = "comment  on your post";
    }

    if (type === 4) {
      actions = "share your post";
    }

    return <div className="notification">{`${senderName} ${actions}`}</div>;
  };

  console.log(notification);
  return (
    <div className="navbar">
      <span className="logo">Ice App</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} alt="" className="iconImg" />
          <span className="counter">2</span>
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Message} alt="" className="iconImg" />
          <span className="counter">2</span>
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Settings} alt="" className="iconImg" />
          <span className="counter">2</span>
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notification.map((item) => displayName(item.senderName, item.type))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
