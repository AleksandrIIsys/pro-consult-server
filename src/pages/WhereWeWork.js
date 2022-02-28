import React from 'react';
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