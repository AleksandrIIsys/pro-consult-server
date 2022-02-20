import React, {useContext, useEffect, useState} from 'react';
import Slider from "react-slick";
import PartnersElement from "./PartnersElement";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {fetchPartners} from "../http/Api";
const MainPartners = observer(() => {
    const {partners} = useContext(Context);
    useEffect(()=>{
        let isMounted = true;
        fetchPartners().then((data)=>partners.setPartners(data))
        return () => { isMounted = false };
    },[])
    return (
        <div className={"partners"}>
            <div>
                <div className="partners__title">
                    <FormattedMessage id={"our_partners"}/>
                </div>
                <Slider className={"container"}  dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={6}>
                    {partners.getPartners().map(prElem=>
                    <PartnersElement prElem={prElem}></PartnersElement>)}
                </Slider>
            </div>
        </div>
    );
});

export default MainPartners;