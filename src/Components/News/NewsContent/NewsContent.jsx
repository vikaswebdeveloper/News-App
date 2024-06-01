import React from "react";
import "./NewsContent.css";
import { useLocation } from "react-router-dom";

const NewsContent = () => {
  const location = useLocation();
  const newsContent = location.state;

  return (
    <div className="NewsContent">
      <div className="mainContent">
        <div className="upperContent">
          <h1>{newsContent.title}</h1>
          <h3>{newsContent.author}</h3>
          <p>{newsContent.publishedAt}</p>
        </div>

        <img src={newsContent.image} alt="" />

        <div className="lowerContent">{newsContent.content}</div>
      </div>
    </div>
  );
};

export default NewsContent;
