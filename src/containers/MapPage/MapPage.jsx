import {useDispatch, useSelector} from "react-redux";
import "../mainStyle.css";
import {Clusterer, Map, Placemark, YMaps} from "react-yandex-maps";
import {
    getAllMapData,
    getMapElemData,
    openMapSlider
} from "../../redux/reducers/authSlice";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import MapPagePremiseMenu from "./MapPagePremiseMenu/MapPagePremiseMenu";
import {useEffect} from "react";

const MapPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const centerCoords = (authSlice.mapAll) && (authSlice.mapAll.length > 0)
        ? [authSlice.mapAll[0].latitude, authSlice.mapAll[0].longitude]
        : [56.845130, 60.626060];
    
    useEffect(() => {
        dispatch(getAllMapData({}));
    }, [])

    return (
        <div className="main">
            <LeftMenu/>
            {
                authSlice.mapAll === null
                    ? "..."
                    : <div className="main__inner" id="main__inner">

                        <div className="map">
                            <div className="map__inner">
                                {/*<button className="main-btn" onClick={() => {dispatch(openOrCloseMapSlider())}}> Пример</button>*/}
                                <YMaps>
                                    <div>
                                        <Map
                                            defaultState={{
                                                center: centerCoords,
                                                zoom: 12,
                                                controls: ['zoomControl', 'fullscreenControl'],
                                            }}
                                            modules={['control.ZoomControl', 'control.FullscreenControl']}
                                            width="100vw"
                                            height="100vh"
                                        >
                                            <Clusterer
                                                options={{
                                                    preset: 'islands#invertedVioletClusterIcons',
                                                    groupByCoordinates: false,
                                                }}
                                            >
                                                {
                                                    (authSlice.mapAll) && (authSlice.mapAll.length > 0)
                                                        ? authSlice.mapAll.map(elem => {
                                                            return (
                                                                <Placemark
                                                                    id={elem.id}
                                                                    geometry={[elem.latitude, elem.longitude]}
                                                                    options={{preset: 'islands#redCircleDotIcon'}}
                                                                    key={elem.id}
                                                                    onClick={
                                                                        () => {
                                                                            dispatch(getMapElemData({id: elem.id}));
                                                                            dispatch(openMapSlider());
                                                                        }
                                                                    }
                                                                />
                                                            )
                                                        })
                                                        : ""
                                                }
                                            </Clusterer>
                                        </Map>
                                    </div>
                                </YMaps>
                                <MapPagePremiseMenu/>
                            </div>
                        </div>

                        <MenuRightLogined/>
                    </div>
            }
        </div>
    );
};
/*
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
                                (authSlice.mapAll)&&(authSlice.mapAll.length > 0)
                                    ? authSlice.mapAll.map(elem => {
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
                                    : null
                            }
                        </Clusterer>
                    </Map>
                </div>
            </YMaps>

            className={
                                authSlice.isMapMenuVisible ? "map__info opened" : "map__info"
                            }
*/


export default MapPage;