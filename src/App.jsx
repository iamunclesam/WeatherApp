// import { useState } from "react";

import "./App.css";
import WeatherDisplay from "./components/Weather/index";
import Sidebar from './components/Layout/sidebar'
import Header from "./components/Layout/header";


function App() {
  return (
    <>
      <div className="md:p-10 p-3 bg-black h-screen mx-auto">
        <div className="">
        <Sidebar />
        <Header />
        <div className=" sm:ml-20 text-white">
       
        <WeatherDisplay />
        </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
