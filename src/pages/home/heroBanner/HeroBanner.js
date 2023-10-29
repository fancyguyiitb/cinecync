import React, { useState } from "react";
import "./style.scss";

const HeroBanner = () => {
  //creating a state to store and update hero section BG
  const [background, setBackground] = useState("");
  //state to store and handle the search text
  const [query, setQuery] = useState("");

  //function to handle search request
  const searchQueryHandler = (event) => {
    //only run search function when Enter key pressed
    //and length of query is NOT 0
    if(event.key==="Enter" && query.length>0) {

    }
  };
  return (
    <div className="HeroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome User</span>
          <span className="subTitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for your favorite Movie/TV Show!"
              onChange={(e) => setQuery(e.target.value)}
              //function fired when user lifts finger from the keyboard
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
