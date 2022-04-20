import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import rentYourPageStyle from "./RentYourPage.module.css"
import {Clusterer, Map, Placemark, YMaps} from "react-yandex-maps";
import {updateCurrentOnClickCoords} from "../../redux/reducers/authSlice";

const RentYourPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const centerCoords = [authSlice.mapAll[0].latitude, authSlice.mapAll[0].longitude];

    return (
        <div>
            <p>
                <Link to={"/HomePage"} className={rentYourPageStyle.button}>
                    ToHomePage
                </Link>
                <Link to={"/MapPage"} className={rentYourPageStyle.button}>
                    ToMapPage
                </Link>
            </p>
            <YMaps>
                <div>
                    Click on map!
                    <Map
                        defaultState={{
                            center: centerCoords,
                            zoom: 12,
                            controls: ['zoomControl', 'fullscreenControl'],
                        }}
                        modules={['control.ZoomControl', 'control.FullscreenControl']}
                        width={1000}
                        height={600}
                        onClick={(e) => dispatch(updateCurrentOnClickCoords(e.get('coords')))}
                    >
                        <Clusterer
                            options={{
                                preset: 'islands#invertedVioletClusterIcons',
                                groupByCoordinates: false,
                            }}
                        >
                            {
                                authSlice.currentOnClickCoords.length !== 0 ?
                                    <Placemark
                                        geometry={[authSlice.currentOnClickCoords[0], authSlice.currentOnClickCoords[1]]}
                                        options={{preset: 'islands#redCircleDotIcon'}}
                                        key={authSlice.currentOnClickCoords[0]}
                                    /> :
                                    null
                            }
                        </Clusterer>
                    </Map>
                </div>
            </YMaps>
            <div>
                {
                    authSlice.currentOnClickCoords.length !== 0 ?
                        <p>
                            {authSlice.currentOnClickCoords[0]} : {authSlice.currentOnClickCoords[1]}
                        </p> :
                        null
                }
            </div>
        </div>
    );
};

export default RentYourPage;