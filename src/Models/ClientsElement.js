import React from 'react';

const ClientsElement = (props) => {
    return (
        <div className="clients__item" style={props.style}>
            <img src={props.clElem.image} alt=""/>
        </div>
    );
};

export default ClientsElement;