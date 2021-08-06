import React from "react";
//STYLES
import "./App.css";
//COMPONENTS
import Home from "./pages/home/home.component";
import InfoSection from "./pages/infoSection/infoSection.component";

const App = (props) => {
  return (
    <div className="app">
      <Home />
      <InfoSection />
    </div>
  );
};

export default App;
