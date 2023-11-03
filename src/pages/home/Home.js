import React from 'react'
import './style.scss'

//importing our modules
import HeroBanner from './heroBanner/HeroBanner'
import Trending from "./trending/Trending";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending/>
    </div>
  )
}

export default Home