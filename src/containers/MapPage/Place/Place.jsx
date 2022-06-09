import {useDispatch, useSelector} from "react-redux";
import "../../mainStyle.css";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";
import PagesManu from "../../Menus/PagesMenu/PagesManu";
import MenuRightLogined from "../../Menus/MenuRightLogined/MenuRightLogined";
import {useEffect} from "react";

const PlacePage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const currentPlace = JSON.parse(localStorage.getItem("currentPlace"));
    const downloadLinqMainImg = "http://localhost:8081" + currentPlace.mainImg.downloadLink;
    const downloadLinqPlan = "http://localhost:8081" + currentPlace.plan.downloadLink;
    const howMany = currentPlace.imgs.howMany;
    let imgsLinqs = [];
    for (let i = 0; i < howMany; i++) {
        imgsLinqs.push("http://localhost:8081" + currentPlace.imgs.downloadLink + "_" + i + ".png");
    }
    //"http://localhost:8081" + currentPlace.imgs.downloadLink + currentPlace.imgs.howMany;

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">

                <div className="container container-m">
                    <PagesManu/>
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
                                        <p className="request__p">Владелец</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="request__p">
                                            <b>Статус:</b>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="request__p">Статус</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="request__p">
                                            <b>Действия:</b>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="request__p">
                                            <a href="" className="form-link">Одобрить</a>
                                            <a href="" className="form-link">Не одобрять</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slider">
                                            <p className="slider__h">Фото помещения</p>
                                            <div className="swiper-container pages-slider">
                                                <div className="swiper-wrapper">
                                                    {
                                                        imgsLinqs.map((elem) => {
                                                            console.log(imgsLinqs);
                                                            return (
                                                                <div className="swiper-slide">
                                                                    <a data-fancybox="gallery">
                                                                        <img loading="lazy" src={elem}/>
                                                                    </a>
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="slider-navigation slider-navigation__items">
                                                <div className="slider-pagination pages-pagination"></div>
                                            </div>
                                        </div>
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