import {useDispatch, useSelector} from "react-redux";
import "./MapPageStyle.css";
import {Clusterer, Map, Placemark, YMaps} from "react-yandex-maps";
import {getAllMapData, getMapElemData, setMapData, updateCurrentOnClickCoords} from "../../redux/reducers/authSlice";
import {useEffect} from "react";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import examplePlace from "./img/example-place.png"

const MapPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const centerCoords = (authSlice.mapAll) && (authSlice.mapAll.length > 0)
        ? [authSlice.mapAll[0].latitude, authSlice.mapAll[0].longitude]
        : [56.845130, 60.626060];

    useEffect(() => {
        dispatch(getAllMapData({}));
    })

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">

                <div className="map">
                    <div className="map__inner">
                        <button className="main-btn" id="map-toggler"> Пример</button>
                        <div
                            id="map__info"
                            className={
                                authSlice.isMapMenuVisible ? "map__info opened" : "map__info"
                            }
                        >
                            <div className="map__info__close" id="map__info__close"></div>
                            <div className="map__info-block">
                                <div className="map__image">
                                    <a href="">
                                        <img
                                            src={examplePlace}
                                            alt=""/>
                                    </a>
                                </div>
                                <p className="map__name">
                                    <a href="/">Название</a>
                                </p>
                                <p className="map__text">Адрес</p>
                                <p className="map__text">Количество квадратных метров</p>
                                <p className="map__text">Стоимость</p>
                            </div>
                            <div className="map__info-block">
                                <div className="map__image">
                                    <a href="">
                                        <img
                                            src={examplePlace}
                                            alt=""/>
                                    </a>
                                </div>
                                <p className="map__name">
                                    <a href="/">Название</a>
                                </p>
                                <p className="map__text">Адрес</p>
                                <p className="map__text">Количество квадратных метров</p>
                                <p className="map__text">Стоимость</p>
                            </div>
                            <div className="map__info-block">
                                <div className="map__image">
                                    <a href="">
                                        <img
                                            src={examplePlace}
                                            alt=""/>
                                    </a>
                                </div>
                                <p className="map__name">
                                    <a href="/">Название</a>
                                </p>
                                <p className="map__text">Адрес</p>
                                <p className="map__text">Количество квадратных метров</p>
                                <p className="map__text">Стоимость</p>
                            </div>
                            <div className="map__info-block">
                                <div className="map__image">
                                    <a href="">
                                        <img
                                            src={examplePlace}
                                            alt=""/>
                                    </a>
                                </div>
                                <p className="map__name">
                                    <a href="/">Название</a>
                                </p>
                                <p className="map__text">Адрес</p>
                                <p className="map__text">Количество квадратных метров</p>
                                <p className="map__text">Стоимость</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-right logined">
                    <a href="" className="menu-right__link">
                        Имя пользователя
                    </a>
                    <img src="img/user.png" alt="" className="user-avatar"/>
                </div>
            </div>
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