import {useDispatch, useSelector} from "react-redux";
import "../../mainStyle.css";
import {getPremise, openOrCloseMapSlider} from "../../../redux/reducers/authSlice";
import {useNavigate} from "react-router";

const MapPagePremiseMenu = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                authSlice.mapElem === null
                    ? ""
                    : authSlice.mapElem.map((elem) => {
                        const downloadLinq = authSlice.mapElem !== null ? "http://localhost:8081" + elem.mainImg.downloadLink : "";
                        return (
                            <div
                                key={elem.id}
                                className="map__info-block"
                                onClick={
                                    () => {
                                        dispatch(getPremise({id:elem.id}));
                                        navigate("../Place", {replace: true});
                                    }
                                }
                            >
                                <div className="map__image">
                                    <a href="">
                                        <img
                                            src={downloadLinq}
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