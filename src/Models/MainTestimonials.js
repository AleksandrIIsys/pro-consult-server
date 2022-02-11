import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import TestimonialsElement from "../components/TestimonialsElement";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";

const MainTestimonials = observer(() => {
    const {testimonials} = useContext(Context)
    useEffect(()=>{
        let isMounted = true;
        fetch('/api/testimonials/').
        then((response)=>{
            return response.json()
        }).then((t)=>testimonials.setTestimonials(t))
        return () => { isMounted = false };
    },[])
    return (
        <div className="testimonials">
            <div className="container">
                <div className="testimonials__title">
                    <FormattedMessage id={'testimonials_title'}/>
                </div>
                <div className="testimonials__slider">{
                    testimonials.getTestimonials().map(o => <TestimonialsElement testimonials = {o}></TestimonialsElement>)}
                </div>
            </div>
        </div>

);
});

export default MainTestimonials;