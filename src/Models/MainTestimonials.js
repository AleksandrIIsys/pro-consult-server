import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import TestimonialsElement from "../components/TestimonialsElement";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {fetchTestimonials} from "../http/Api";

const MainTestimonials = observer(() => {
    const {testimonials} = useContext(Context)
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