import React, { useEffect, useState } from "react";
import "./RightNav.css";

const RightNav = (props) => {
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("us");

  useEffect(() => {
    props.updateNews(place, category);
  }, [category, setCategory]);

  return (
    <div className="topics">
      <button
        onClick={() => {
          setCategory("");
          setPlace("us");
        }}
      >
        World {/* done */}
      </button>

      <button
        onClick={() => {
          setCategory("Sports");
          setPlace("in");
        }}
      >
        Sports {/*done*/}
      </button>

      <button
        onClick={() => {
          setCategory("Technology");
          setPlace("in");
        }}
      >
        Technology {/*done*/}
      </button>

      <button
        onClick={() => {
          setCategory("Economy");
          setPlace("in");
        }}
      >
        Economy {/*done*/}
      </button>

      <button
        onClick={() => {
          setCategory("Entertainment");
          setPlace("in");
        }}
      >
        Entertainment {/* done */}
      </button>

      <button
        onClick={() => {
          setCategory("General");
          setPlace("in");
        }}
      >
        General {/* done */}
      </button>

      <button
        onClick={() => {
          setCategory("Business");
          setPlace("in");
        }}
      >
        Business {/* done */}
      </button>
    </div>
  );
};

export default RightNav;
