import React from 'react';

const SliderElement = (props) => {
    return (
        <div className="slider__item">
            <img className="img-fluid" src={props.slide.image} alt="..." width="100vw"
                 height="20vh"
                 loading="lazy"/>
            <div className="slider__content">
                <div className="container">
                    <div className="slider__title">
                        {props.slide.title}
                    </div>
                    <div className="slider__text">
                        {props.slide.text}
                    </div>
                    <div className="slider__btn"><a href="">more info</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderElement;