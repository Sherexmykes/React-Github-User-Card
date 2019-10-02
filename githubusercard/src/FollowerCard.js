import React from "react";

const FollowerCard = props => {
  console.log("rendered card");
  return (
    <div className="followerCard">
      <img className="followerImage" src={props.image} alt="pic" />
      <h3>{props.name}</h3>
    </div>
  );
};

export default FollowerCard;