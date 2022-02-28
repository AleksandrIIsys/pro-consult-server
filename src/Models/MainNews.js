import React, {useContext} from 'react';
import Slider from "react-slick";
import NewsElement from "./NewsElement";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";

const MainNews = observer(() => {
    const {news,locale} = useContext(Context)
    return (
        <div className="news">
            {
                news.getNews().length > 4 ?
            <div className="container">


                <div className="news__title">
                    <FormattedMessage id={"news_title"}/>
                </div>
                <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={false} slidesToShow={4}>
                    {
                        news.getNews().map((news_element,key)=>
                        <NewsElement currentLocale={locale.getLocale()} key={key} news={news_element}/>
                    )}
                </Slider>
                <div className=" news__item__btn"><a href={"/news"}><FormattedMessage id={"all_news"}/></a>
                </div>
            </div>
                    : <></>
            }
        </div>
    );
});

export default MainNews;