import {useDispatch, useSelector} from "react-redux";
import "../../mainStyle.css";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";
import PagesManu from "../../Menus/PagesMenu/PagesManu";
import MenuRightLogined from "../../Menus/MenuRightLogined/MenuRightLogined";
import SwiperTeg from "./Swiper/Swiper";
import {useNavigate} from "react-router";
import {Clusterer, Map, Placemark, YMaps} from "react-yandex-maps";
import {getCompanyById} from "../../../redux/reducers/authSlice";

const PlacePage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentPlace = authSlice.currentPlace;
    const downloadLinqMainImg = "http://localhost:8081" + currentPlace.mainImg.downloadLink;
    const downloadLinqPlan = "http://localhost:8081" + currentPlace.plan.downloadLink;
    const mapElem = JSON.parse(localStorage.getItem("mapElem"));
    const centerCoords = (authSlice.mapAll) && (authSlice.mapAll.length > 0)
        ? [authSlice.mapElem[0].coordinates.latitude, authSlice.mapElem[0].coordinates.longitude]
        : [56.845130, 60.626060];
    const howMany = currentPlace.imgs.howMany;
    let imgsLinqs = [];
    for (let i = 0; i < howMany; i++) {
        imgsLinqs.push("http://localhost:8081" + currentPlace.imgs.downloadLink + "_" + i + ".png");
    }

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-m">
                    <h1 className="container__h">Помещение</h1>
                    <div className="container__inner">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="page-avatar">
                                    <img src={downloadLinqMainImg} alt="" className="page-avatar__img"/>
                                    <a href="" className="main-btn">Написать</a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="request__p">
                                            <b>Название помещения:</b>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="request__p">{currentPlace.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="request__p">
                                            <b>Адрес помещения:</b>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="request__p">{currentPlace.coordinates.address}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="request__p">
                                            <b>Количество м²:</b>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="request__p">{currentPlace.squareMetersNumber}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="request__p">
                                            <b>Владелец:</b>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <a
                                            className="request__a"
                                            onClick={
                                                () => {
                                                    dispatch(getCompanyById({id: currentPlace.company.id}));
                                                    navigate("../NotMyCompany", {replace: true});
                                                }
                                            }
                                        >{currentPlace.company.name}</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <SwiperTeg imgsLinqs={imgsLinqs}/>
                                        <div className="slider">
                                            <p className="slider__h">План помещения</p>
                                            <div className="swiper-container pages-slider2">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a data-fancybox="gallery1">
                                                            <img loading="lazy" src={downloadLinqPlan}/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-navigation slider-navigation__items">
                                                <div className="slider-pagination pages-pagination2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slider">
                                            <p className="slider__h">Карта</p>
                                            <YMaps>
                                                <div>
                                                    <Map
                                                        defaultState={{
                                                            center: centerCoords,
                                                            zoom: 12,
                                                            controls: ['zoomControl', 'fullscreenControl'],
                                                        }}
                                                        modules={['control.ZoomControl', 'control.FullscreenControl']}
                                                        width="50vw"
                                                        height="50vh"
                                                    >
                                                        <Clusterer
                                                            options={{
                                                                preset: 'islands#invertedVioletClusterIcons',
                                                                groupByCoordinates: false,
                                                            }}
                                                        >
                                                            <Placemark
                                                                geometry={centerCoords}
                                                                options={{preset: 'islands#redCircleDotIcon'}}
                                                            />
                                                        </Clusterer>
                                                    </Map>
                                                </div>
                                            </YMaps>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuRightLogined/>
            </div>
        </div>
    );
};

export default PlacePage;