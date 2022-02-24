import React from 'react';
import MainSlider from "./MainSlider";
import MainAbout from "./MainAbout";
import MainNews from "./MainNews";
import MainCapabilities from "./MainCapabilities";
import MainClients from "./MainClients";
import MainPartners from "./MainPartners";
import MainTestimonials from "./MainTestimonials";

const Main = () => {
    return (
        <main>
            <MainAbout></MainAbout>
            <MainNews></MainNews>
            <MainCapabilities></MainCapabilities>
            <MainClients ></MainClients>
            <MainPartners></MainPartners>
            <MainTestimonials></MainTestimonials>
        </main>
    );
};

export default Main;