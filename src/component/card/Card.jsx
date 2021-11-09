import React, { useState } from "react";
import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFill from "../../img/heartfilled.svg";
import Share from "../../img/share.svg";
import Comment from "../../img/comments.svg";

const Card = ({ post, socket, user }) => {
  const [like, setLike] = useState(false);

  const handleNotification = (type) => {
    socket?.emit("sendNotification", {
      senderName: user,
      receiverName: post.name,
      type: type,
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
              handleNotification(1);
            }}
          />
        ) : (
          <img
            src={HeartFill}
            alt=""
            className="cardIcon"
            onClick={() => {
              setLike(!like);
              handleNotification(2);
            }}
          />
        )}
        <img
          src={Comment}
          onClick={() => handleNotification(3)}
          alt=""
          className="cardIcon"
        />
        <img
          onClick={() => handleNotification(4)}
          src={Share}
          alt=""
          className="cardIcon"
        />
      </div>
    </div>
  );
};

export default Card;
