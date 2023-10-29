import "./App.css";
import { fetchApiData } from "./utils/api";
import { useEffect } from "react";
//importing stuff for react store
import { useSelector, useDispatch } from "react-redux";
//importing our api config function
import { getApiConfiguration } from "./store/homeSlice";

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
      <div className="App">
        JUJU
        {url?.total_pages}
      </div>
    </>
  );
}

export default App;
