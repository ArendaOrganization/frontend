import {useDispatch, useSelector} from "react-redux";
import "./RentYourPage.css";
import {Clusterer, Map, Placemark, YMaps} from "react-yandex-maps";
import {
    getAddressByCoords,
    toggleIsMapOpenOnCreatePage,
    updateCurrentOnClickCoords
} from "../../redux/reducers/authSlice";

const RentYourPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const centerCoords = [56.845130, 60.626060];

    return (
        <div className="modal__inner">
            <YMaps>
                <div>
                    <div>
                        Выбранный адрес: {authSlice.currentOnClickAddress}
                        <button
                            className="closeButton"
                            onClick={
                                () => {
                                    dispatch(toggleIsMapOpenOnCreatePage(false));
                                }
                            }
                        >
                            Закрыть
                        </button>
                    </div>
                    <Map
                        defaultState={{
                            center: centerCoords,
                            zoom: 12,
                            controls: ['zoomControl', 'fullscreenControl'],
                        }}
                        modules={['control.ZoomControl', 'control.FullscreenControl', "geolocation", "geocode"]}
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
        </div>
    );
};

export default RentYourPage;