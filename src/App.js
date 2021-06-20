import React from "react";
// import "./sass/main.scss"
import Collapsee from "./component/Collapse";
import Footer from "./component/Footer";
import MainPage from "./component/MainPage";

function App() {
  return (
    <div className="App d-flex">
        <div className="collapse">
          <Collapsee/>
        </div>
        <div className="mainPage">
            <MainPage/>
        </div>
        <div className="Footer">
            <Footer/>
        </div>
    </div>
  );
}

export default App;
