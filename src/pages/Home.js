import Header from "../Models/Header";
import Main from "../Models/Main";
import MainSlider from "../Models/MainSlider";
import Footer from "../Models/Footer";
import React from "react";
import FooterTest from "../Models/FooterTest";
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
