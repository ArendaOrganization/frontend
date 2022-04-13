import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import mapPageStyle from "./MapPage.module.css"
import {Map, Placemark, YMaps} from "react-yandex-maps";

const MapPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const centerCoords = [authSlice.mapAll[0].latitude, authSlice.mapAll[0].longitude];


    return (
        <div>
            <p>
                <Link to={"/HomePage"} className={mapPageStyle.button}>
                    ToHomePage
                </Link>
            </p>
            <YMaps>
                <div>
                    My awesome application with maps!
                    <Map
                        defaultState={{
                            center: centerCoords,
                            zoom: 12,
                            controls: ['zoomControl', 'fullscreenControl'],
                        }}
                        modules={['control.ZoomControl', 'control.FullscreenControl']}
                        width={1000}
                        height={600}
                    >
                        {
                            authSlice.mapAll.map(elem => {
                                return <Placemark
                                    id={elem.id}
                                    geometry={[elem.latitude, elem.longitude]}
                                    options={{preset: 'islands#redDotIcon'}}
                                    key={elem.id}
                                />
                            })
                        }
                    </Map>
                </div>
            </YMaps>
        </div>
    );
};

export default MapPage;