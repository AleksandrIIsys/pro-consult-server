import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";

const EventLocation = () => (

    <div className="location">
        <div className="textLocation">
            Мероприятия проходят по адресу:<p>г. Ташкент, ул. Буюк Ипак Йули 114/3 (ориентир - гостиница "Саёхат")</p>
        </div>
        <div className="mapLocation">
            <YMaps>
                <Map
                    defaultState={{
                        center: [41.327289, 69.333528],
                        zoom: 16,
                    }}
                    width={1000}
                    height={320}>
                    <Placemark geometry={[41.327289, 69.333528]}/>
                </Map>
            </YMaps>
        </div>
    </div>
);

export default EventLocation;