import React from 'react';
import Header from "../Models/Header";
import MainSlider from "../Models/MainSlider";
import OfficeLocation from "../components/OfficeLocation";
import EventLocation from "../components/EventLocation";
import FooterTest from "../Models/FooterTest";


const WhereWeWork = () => {
    return (
        <div>
            <OfficeLocation/>
            <EventLocation/>
            <FooterTest/>
        </div>
    );
};

export default WhereWeWork;