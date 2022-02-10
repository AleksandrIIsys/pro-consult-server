import React from 'react';
import Header from "./Header";
import MainSlider from "./MainSlider";
import FooterTest from "./FooterTest";
import OfficeLocation from "./OfficeLocation";
import EventLocation from "./EventLocation";

const WhereWeWork = () => {
    return (
        <div>
            <Header/>
            <MainSlider/>
            <OfficeLocation/>
            <EventLocation/>
            <FooterTest/>
        </div>
    );
};

export default WhereWeWork;