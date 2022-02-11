import React, {useContext, useEffect, useState} from 'react';
import Slider from "react-slick";
import PartnersElement from "./PartnersElement";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
const MainPartners = observer(() => {
    const {partners} = useContext(Context);
    useEffect(()=>{
        let isMounted = true;
        fetch('/api/partners/').
        then((response)=>{
            return response.json()
        }).then((p)=>partners.setPartners(p))
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