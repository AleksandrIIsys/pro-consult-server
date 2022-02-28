import React, {useContext} from 'react';
import {Context} from "../index";
import TestimonialsElement from "../components/TestimonialsElement";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";

const MainTestimonials = observer(() => {
    const {testimonials} = useContext(Context)
    return (
        <div className="testimonials">
            {
                testimonials.getTestimonials().length !== 0 ?
                <div className="container">
                    <div className="testimonials__title">
                        <FormattedMessage id={'testimonials_title'}/>
                    </div>
                    <div className="testimonials__slider">{
                        testimonials.getTestimonials().map((o,key) => <TestimonialsElement
                            testimonials={o} key={key}></TestimonialsElement>)}
                    </div>
                </div>
                    : <></>
            }
        </div>

);
});

export default MainTestimonials;