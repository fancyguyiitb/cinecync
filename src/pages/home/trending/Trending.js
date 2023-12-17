import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
//importing the carousel
import Carousel from "../../../components/carousel/Carousel";


const Trending = () => {
  //useState hook to call API based on selected tab
  const [endpoint, setEndpoint] = useState("day");

  //making API call using useFetch
  const {data, loading} = useFetch(`/trending/all/${endpoint}`)
  // {data && console.log(data);}

  //a function to handle tab change behaviour
  const onTabChange = (tab) => {
    //setting endpoint according to selected tab
    if(tab==="Day") {
      setEndpoint("day");
    }
    else if(tab==="Week") {
      setEndpoint("week");
    }
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        {/* passing all the relevant time frames of trending to switchTabs component */}
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
