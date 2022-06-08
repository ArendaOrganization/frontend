import {useDispatch, useSelector} from "react-redux";
import "../../mainStyle.css";
import examplePlace from "../img/example-place.png";
import {openOrCloseMapSlider} from "../../../redux/reducers/authSlice";

const MapPagePremiseMenu = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <div
            id={
                authSlice.isMapMenuVisible ? "opened" : ""
            }
            className="map__info"
        >
            <div
                className="map__info__close"
                onClick={
                    () => {
                        dispatch(openOrCloseMapSlider())
                    }
                }
            ></div>
            {
                authSlice.mapElem.map((elem) => {
                    return (
                        <div className="map__info-block">
                            <div className="map__image">
                                <a href="">
                                    <img
                                        src={examplePlace}
                                        alt=""/>
                                </a>
                            </div>
                            <p className="map__name">
                                <a href="/">{elem.name}</a>
                            </p>
                            <p className="map__text">Адрес: {elem.coordinates.address}</p>
                            <p className="map__text">Количество квадратных метров: {elem.squareMetersNumber}</p>
                            <p className="map__text">Стоимость в месяц: {elem.costPerMonth}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default MapPagePremiseMenu;