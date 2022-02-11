import {YMaps, Map, Placemark} from 'react-yandex-maps';


const OfficeLocation = () => (
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
                        width={900}
                        height={320}>
                        <Placemark geometry={[53.848043, 27.509163]}/>
                    </Map>
                </YMaps>
            </div>
        </div>
    </div>
)
export default OfficeLocation;