import React from 'react';

const PartnersElement = (props) => {
    return (
        <div className="partners__item" style={props.style}>
            <img src={props.prElem.image} alt=""/>
        </div>
    );
};

export default PartnersElement;