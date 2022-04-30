import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import rentYourPageStyle from "./RentYourPage.module.css"
import {Clusterer, Map, Placemark, YMaps} from "react-yandex-maps";
import {getAddressByCoords, updateCurrentOnClickCoords} from "../../redux/reducers/authSlice";

const RentYourPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const centerCoords = [authSlice.mapAll[0].latitude, authSlice.mapAll[0].longitude];

    /*
    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);

            myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine()
                });
        });
    }
    */
    /*YMaps.geocode(centerCoords).then(function (res) {
        let firstGeoObject = res.geoObjects.get(0);
        console.log(firstGeoObject);
    });*/

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
                        modules={['control.ZoomControl', 'control.FullscreenControl', "geolocation", "geocode"]}
                        width={1000}
                        height={600}
                        onClick={(e) => {
                            dispatch(updateCurrentOnClickCoords(e.get('coords')))
                            dispatch(getAddressByCoords({coords: e.get("coords")}))
                        }}
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
                {
                    authSlice.currentOnClickAddress.length !== 0 ?
                        <p>
                            {authSlice.currentOnClickAddress}
                        </p> :
                        null
                }
            </div>
        </div>
    );
};

export default RentYourPage;