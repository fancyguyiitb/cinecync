import "./App.css";

import { fetchApiData } from "./utils/api";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchApiData().then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div className="App">App</div>
    </>
  );
}

export default App;
