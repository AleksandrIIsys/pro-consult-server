import React from 'react';

const NewsElement = (props) => {
    return (
        <div className="news__item" style={props.style}>
            <img src= {props.news.image} alt=""/>
            <div className="news__item__title">
                {props.news.title[props.currentLocale]}
            </div>
            <div className="news__item__text">
                {props.news.text[props.currentLocale]}
            </div>
        </div>
    );
};

export default NewsElement;