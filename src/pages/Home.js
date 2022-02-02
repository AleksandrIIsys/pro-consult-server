import Header from "../Models/Header";
import Main from "../Models/Main";
import MainSlider from "../Models/MainSlider";
import Footer from "../Models/Footer";
import React from "react";
import FooterTest from "../Models/FooterTest";
function Home() {
    return (
        <div>
            <Header></Header>
            <MainSlider></MainSlider>
            <Main></Main>
            {/*<Footer></Footer>*/}
            <FooterTest></FooterTest>
        </div>
    );
}

export default Home;
