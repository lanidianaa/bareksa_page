import React from "react";
import {Route} from "react-router-dom";
import DataPage from "./page/DataPage";
import NavBar from "./component/NavBar";
import "./App.css";
const App = () => {
  return (
    <div>
      <NavBar />
      <Route path="/" exact component={DataPage} />
    </div>
  );
};

export default App;
