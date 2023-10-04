import React from 'react'
import Home from "./Home";
import "./HomeController.scss";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HomeContext } from "./HomeContext";
function HomeController() {
    const [Theme, setTheme] = useState("light");
  return (
    <HomeContext.Provider value={{Theme, setTheme}}>
        <div className={`HomeController ${Theme==="light" ? "light" : "dark"}`}>
            <Routes>
                <Route exact path="/" element={<Home/>} ></Route>
            </Routes>
        </div>
    </HomeContext.Provider>
  )
}

export default HomeController