import React, { useState } from "react";
import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFill from "../../img/heartfilled.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import Comment from "../../img/comments.svg";

const Card = ({ post, socket, user }) => {
  const [like, setLike] = useState(false);

  const handleNotification = ({ type }) => {
    socket?.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userimg} alt="" className="userimg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postimg} alt="" className="postimg" />
      <div className="interaction">
        {like ? (
          <img
            src={Heart}
            alt=""
            className="cardIcon"
            onClick={() => {
              setLike(!like);
            }}
          />
        ) : (
          <img
            src={HeartFill}
            alt=""
            className="cardIcon"
            onClick={() => {
              setLike(!like);
              handleNotification(1);
            }}
          />
        )}
        <img
          src={Comment}
          onClick={() => handleNotification(2)}
          alt=""
          className="cardIcon"
        />
        <img src={Share} alt="" className="cardIcon" />
        <img src={Info} alt="" className="cardIcon" />
      </div>
    </div>
  );
};

export default Card;
