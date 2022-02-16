import React, {useEffect, useState} from "react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const OfficeLocation = (() => {
    const [load,setLoad] = useState(false)
    useEffect(()=>{
        if(!load)
            setLoad(true)
        },[]
    )
    return (
    <div>
        <div className="location">
            <div className="textLocation">
               г. Ташкент, Яккасарайский район ул.Миракилова, 34
            </div>
            <div className="mapLocation">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [53.848043, 27.509163],
                            zoom: 16,
                        }}
                        onLoad={()=> {
                            setLoad(true)
                        }}
                        onError={()=>{
                            console.log(false + '1');}
                        }

                        width={900}
                        height={320}>
                        <Placemark geometry={[53.848043, 27.509163]}/>
                    </Map>
                </YMaps>
            </div>
        </div>
    </div>
)
})
export default OfficeLocation;