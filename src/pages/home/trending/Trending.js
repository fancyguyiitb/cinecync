import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import { useState } from "react";

const Trending = () => {
  //a function to handle tab change behaviour
  const onTabChange = (tab) => {};
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        {/* passing all the relevant time frames of trending to switchTabs component */}
        <SwitchTabs data={["Day", "Week", "Month"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
