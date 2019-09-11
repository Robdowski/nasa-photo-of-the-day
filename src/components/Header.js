import React from "react";

export default function Header() {
  return (
    <div className="container">
      <div className="title">
        <h1>Nasa Photo of the Day</h1>
      </div>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Archive</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
