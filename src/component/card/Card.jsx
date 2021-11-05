import React from "react";
import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFill from "../../img/heartfilled.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import Comment from "../../img/comments.svg";

const Card = ({ post }) => {
  console.log(post);
  return (
    <div className="card">
      <div className="info">
        <img src={post.userimg} alt="" className="userimg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postimg} alt="" className="postimg" />
      <div className="interaction">
        <img src={Heart} alt="" className="cardIcon" />
        <img src={Comment} alt="" className="cardIcon" />
        <img src={Share} alt="" className="cardIcon" />
        <img src={Info} alt="" className="cardIcon" />
      </div>
    </div>
  );
};

export default Card;
