import React, {useState} from 'react';
import Slider from 'react-slick';
import SliderElement from "./SliderElement";

const MainSlider = () => {
    const [slides,setSlides] = useState([
        {image:"../image/slider/slider_img-1.jpg",title:"Experience Exceeding Expectations",text:"Quality services are the result of the experience of our employees and partners"},
        {image:"../image/slider/slider_img-2.jpg",title: "Develop yourself with PCC",text:"Training programs that will give you the opportunity to become a professional in engineering"},
        {image:"../image/slider/slider_img-3.jpg",title: "Design-Consulting-Supervision",text: "The company provides consulting services in project management in Uzbekistan"},
        {image:"../image/slider/slider_img-3.jpg",title: "2",text: "3nsulting services in project management in Uzbekistan"}
        ])
    return (
            <Slider dots={false} infinite={true} speed={1000} slidesToScroll={1} arrows={false} slidesToShow={1} className={"slider_main"}>
                {slides.map(slide=>
                    <SliderElement slide={slide}/>
                )}
            </Slider>
    );
};

export default MainSlider;