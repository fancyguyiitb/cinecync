import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
//importing the carousel
import Carousel from "../../../components/carousel/Carousel";


const TopRated = () => {
  //useState hook to call API based on selected tab
  const [endpoint, setEndpoint] = useState("movie");

  //making API call using useFetch
  const {data, loading} = useFetch(`/${endpoint}/top_rated`)
  // {data && console.log(data);}

  //a function to handle tab change behaviour
  const onTabChange = (tab) => {
    //setting endpoint according to selected tab
    if(tab==="Movies") {
      setEndpoint("movie");
    }
    else if(tab==="TV Shows") {
      setEndpoint("tv");
    }
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        {/* passing all the relevant time frames of Popular to switchTabs component */}
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default TopRated;
