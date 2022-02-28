import Header from "../Models/Header";
import MainSlider from "../Models/MainSlider";
import React from "react";
import {Outlet} from "react-router-dom";

function Home({currentLocale,handleChangeLocale}) {
    return (
        <div>
            <Header currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}></Header>
            <MainSlider currentLocale={currentLocale}></MainSlider>
            <Outlet></Outlet>
        </div>
    );
}

export default Home;
