import React, {useContext} from 'react';
import {Context} from "../index";

const TestimonialsElement = (props) => {
    const {locale} = useContext(Context)
    return (
        <div className="testimonials__items">
            <div className="testimonials__text">
                <div>
                    <span className="quote">" </span> <div className={"testimonials__text__main"}>{props.testimonials.text[locale.getLocale()]}</div>
                    <img src={props.testimonials.image} alt=""/>
                    <div className="testimonials__name">
                        {props.testimonials.name[locale.getLocale()]}
                    </div>
                    <div className="testimonials__position">
                        {props.testimonials.position[locale.getLocale()]}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialsElement;