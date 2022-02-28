import React, {useContext} from 'react';
import Slider from "react-slick";
import ClientsElement from "./ClientsElement";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";

const MainClients = observer(() => {
    const {clients} = useContext(Context);
    return (
        <div className={"clients"}>
            {
                clients.getClients().length > 4 ?
            <div>
            <div className="clients__title">
                <FormattedMessage id={"our_clients"}/>
            </div>
            <Slider className={"container"}  dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={6}>
                {clients.getClients().map((clElem,key) =>
                <ClientsElement clElem={clElem} key={key}/>)}
            </Slider>
            </div>
            : <></>
            }
        </div>
    );
});

export default MainClients;