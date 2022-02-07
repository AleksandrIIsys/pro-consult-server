import React, {useContext, useEffect, useState} from 'react';
import Slider from "react-slick";
import NewsElement from "./NewsElement";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
const MainNews = observer(() => {
    const {news} = useContext(Context)
    return (
        <div className="news">
            <div className="container">
                <div className="news__title">
                    Current news
                </div>
                <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={false} slidesToShow={4}>
                    {
                        news.getNews().map(news_element=>
                        <NewsElement news={news_element}></NewsElement>
                    )}
                </Slider>
                <div className=" news__item__btn"><a href="">Read all news</a>
                </div>
            </div>
        </div>
    );
});

export default MainNews;