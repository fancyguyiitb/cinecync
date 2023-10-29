import "./App.css";
import { useEffect } from "react";
//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing stuff for react store
import { useSelector, useDispatch } from "react-redux";
//importing our api config function
import { getApiConfiguration } from "./store/homeSlice";
//importing the fetching data function
import { fetchApiData } from "./utils/api";

//importing all the individual components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResults/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();
  //storing our url
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    //calling our api to fetch data
    apiTest();
    // eslint-disable-next-line
  }, []);

  const apiTest = () => {
    fetchApiData().then((res) => {
      console.log(res);
      //saving the response data into our redux store
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:mediaType/:id" element={<Details />} />
          <Route exact path="/search/:query" element={<SearchResult />} />
          <Route exact path="/explore/:mediaType" element={<SearchResult />} />
          {/* FOR ANY OTHER ROUTES, THE 404 PAGE WILL BE RETURNED */}
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
