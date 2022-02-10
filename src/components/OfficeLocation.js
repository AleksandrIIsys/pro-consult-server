import {YMaps, Map, Placemark} from 'react-yandex-maps';


const OfficeLocation = () => (
    <div>
        <div className="location">
            <div className="textLocation">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias delectus deleniti
                distinctio dolor ducimus illo incidunt, inventore ipsam iure nam omnis pariatur quasi qui quisquam quo,
                voluptatum? Animi architecto cupiditate, debitis dolores, eos excepturi explicabo facilis incidunt ipsa
                iure iusto minima non porro quae quia quo quod rerum saepe sapiente sed similique suscipit unde
                veritatis! Aliquam in libero optio quae recusandae, rerum. Architecto at aut beatae commodi deserunt
                dolor dolores ea eligendi enim exercitationem expedita harum impedit in inventore ipsa iste labore,
                minima molestias nemo neque nesciunt nobis numquam possimus quaerat qui quibusdam quo quod sequi
                similique voluptatibus.
            </div>
            <div className="mapLocation">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [53.848043, 27.509163],
                            zoom: 16,
                        }}
                        width={1000}
                        height={320}>
                        <Placemark geometry={[53.848043, 27.509163]}/>
                    </Map>
                </YMaps>
            </div>
        </div>
    </div>
)
export default OfficeLocation;