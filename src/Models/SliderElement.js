import React from 'react';
import {FormattedMessage} from "react-intl";

const SliderElement = (props) => {
    return (
        <div className="slider__item">
            <img className="img-fluid" src={props.slide.image} alt="..." width="100vw"
                 height="20vh"
                 loading="lazy"/>
            <div className="slider__content">
                <div className="container">
                    <div className="slider__title">
                        <FormattedMessage id={"title"}/>
                    </div>
                    <div className="slider__text">
                        <FormattedMessage id={"text"}/>
                    </div>
                    <div className="slider__btn"><a href="">more info</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderElement;