import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import mapPageStyle from "./MapPage.module.css"
import {Clusterer, Map, Placemark, YMaps} from "react-yandex-maps";
import {getMapElemData, updateCurrentOnClickCoords} from "../../redux/reducers/authSlice";

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
                <Link to={"/RentYourPage"} className={mapPageStyle.button}>
                    ToRentYourPage
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
                        <Clusterer
                            options={{
                                preset: 'islands#invertedVioletClusterIcons',
                                groupByCoordinates: false,
                            }}
                        >
                            {
                                authSlice.mapAll.map(elem => {
                                    return (
                                        <Placemark
                                            id={elem.id}
                                            geometry={[elem.latitude, elem.longitude]}
                                            options={{preset: 'islands#redCircleDotIcon'}}
                                            key={elem.id}
                                            onClick={() => dispatch(getMapElemData({id: elem.id}))}
                                        />
                                    )
                                })
                            }
                        </Clusterer>
                    </Map>
                </div>
            </YMaps>
            <div>
                {
                    authSlice.mapElem ?
                        <p>
                            id:{authSlice.mapElem.id}<br/>
                            address:{authSlice.mapElem.address}<br/>
                            lat:{authSlice.mapElem.latitude}<br/>
                            long:{authSlice.mapElem.longitude}<br/>
                        </p>
                        : null
                }
            </div>
        </div>
    );
};

export default MapPage;