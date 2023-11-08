import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
//im porting useNAvigate and useLocation hooks
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/1024px-Eo_circle_orange_film-camera.svg.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  //searchbar state handlers
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  //function to handle search request
  const searchQueryHandler = (event) => {
    //only run search function when Enter key pressed
    //and length of query is NOT 0
    if (event.key === "Enter" && query.length > 0) {
      //pressing enter should reroute us to the searchResults page
      navigate(`/search/${query}`);
      //adding timeout to auto-close searchBar
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  //creating a navigation handler fucntion
  const navigationHandler = (type) => {
    if(type==="movie"){
      //send user to explore movies page
      navigate("/explore/movies");
    }
    else if(type==="tv"){
      //send user to explore tv shows page
      navigate("/explore/tv");
    }
    //auto close menu after navigation
    setMobileMenu(false);
  };

  //whenever new page, start scrolling from the top
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location])
  

  return (
    //writing a conditional class for mobile screens
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" className="logo-img" onClick={()=>navigate("/")}/>
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={()=>navigationHandler("tv")}>TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch}/>
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {/* if on mobile screen, show the close button, else the menu button */}
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {/* show rop searhbar only when state is true */}
      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for your favorite Movie/TV Show!"
              onChange={(e) => setQuery(e.target.value)}
              //function fired when user lifts finger from the keyboard
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header;
