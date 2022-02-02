import React from 'react';

const TestimonialsElement = (props) => {
    return (
        <div className="testimonials__items">
            <div className="testimonials__text">
                <div>
                    <span className="quote">" </span> <div className={"testimonials__text__main"}>{props.testimonials.text}</div>
                    <img src={props.testimonials.image} alt=""/>
                    <div className="testimonials__name">
                        {props.testimonials.name}
                    </div>
                    <div className="testimonials__position">
                        {props.testimonials.position}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialsElement;