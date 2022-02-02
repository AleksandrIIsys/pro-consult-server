import React from 'react';

const NewsElement = (props) => {
    return (
        <div className="news__item" style={props.style}>
            <img src= {props.news.image} alt=""/>
            <div className="news__item__title">
                {props.news.title}
            </div>
            <div className="news__item__text">
                {props.news.text}
            </div>
        </div>
    );
};

export default NewsElement;