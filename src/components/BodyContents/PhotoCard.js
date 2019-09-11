import React from "react";

export default function PhotoCard(props) {
  return (
    <div className="photo-card">
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <img src={props.imgUrl} alt="NASA Photo of the Day" />
      <p>{props.desc}</p>
      <p>&copy;{props.copyright}</p>
    </div>
  );
}
