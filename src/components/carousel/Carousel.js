import React, { useRef } from "react";
//for circle rating meter
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//for changing the date format of the response from server
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
//for lazy loading image
import Img from "../lazyLoadImage/Img";
//if no poster available, use fallback
import PosterFallback from "../../assets/no-poster.jpg";
//importing the rating component
import CircleRating from "../circleRating/CircleRating";

import "./style.scss";

//destructuring data from thr props
const Carousel = ({ data, loading, endpoint }) => {
  //we use this to catch any element such as a div
  const carouselContainer = useRef();
  //getting url from store
  const { url } = useSelector((state) => state.home);
  //creating instance of useNavigate
  const navigate = useNavigate();

  //creating a navigation function to scroll left and right
  const navigation = (direction) => {
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          //passing the carouselItems as ref
          <div className="carouselItems" ref={carouselContainer}>
            {/* looping through data to populate carousel */}
            {data?.map((item) => {
              //if poster exits, show it, else use fallback image
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                //adding navigate function to every movie block
                <div
                  key={item.id}
                  className="carouselItem"
                  //if media type not available, use the endpoint we provided 
                  onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    {/* adding rating component; Showing only 1 decimal point */}
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
