import {useDispatch, useSelector} from "react-redux";
import CompanyPagesMenu from "../../Menus/CompanyPagesManu/CompanyPagesMenu";
import MenuRightLogined from "../../Menus/MenuRightLogined/MenuRightLogined";
import "../../mainStyle.css";
import {useEffect} from "react";
import examplePLace from "../../img/example-place.png";
import {
    addImgsToState, addMainImageToState, addPlanImageToState, postPremise, toggleIsMapOpenOnCreatePage,
    updateCurrentPremiseArea, updateCurrentPremiseCost, updateCurrentPremiseDescription, updateCurrentPremiseFloor,
    updateCurrentPremiseName, updateCurrentPremisePhone, updateIsPremisePrivate, updatePremiseHasInternet
} from "../../../redux/reducers/authSlice";
import RentYourPage from "../../RentYourPage/RentYourPage";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";
import {useNavigate} from "react-router";

const CreatePremise = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-m">
                    <CompanyPagesMenu/>
                    <h1 className="container__h">Добавление помещения</h1>
                    <div className="container__inner">
                        <div className="main-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <label className="form-label">Название *</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Название"
                                            value={authSlice.currentPremiseName}
                                            onChange={
                                                (e) => {
                                                    dispatch(updateCurrentPremiseName(e.target.value));
                                                }
                                            }
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label className="form-label">Площадь в м² *</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Площадь"
                                            value={authSlice.currentPremiseArea}
                                            onChange={
                                                (e) => {
                                                    dispatch(updateCurrentPremiseArea(e.target.value));
                                                }
                                            }
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label className="form-label">Этаж</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Этаж"
                                            value={authSlice.currentPremiseFloor}
                                            onChange={
                                                (e) => {
                                                    dispatch(updateCurrentPremiseFloor(e.target.value));
                                                }
                                            }
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label className="form-label">Описание помещения</label>
                                        <textarea
                                            cols="30"
                                            rows="10"
                                            className="form-textarea"
                                            placeholder="Описание"
                                            value={authSlice.currentPremiseDescription}
                                            onChange={
                                                (e) => {
                                                    dispatch(updateCurrentPremiseDescription(e.target.value));
                                                }
                                            }
                                        ></textarea>
                                    </div>
                                    <div className="form-row">
                                        <label className="form-label">Стоимость в месяц *</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Стоимость"
                                            value={authSlice.currentPremiseCost}
                                            onChange={
                                                (e) => {
                                                    dispatch(updateCurrentPremiseCost(e.target.value));
                                                }
                                            }
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label className="form-label">Номер телефона *</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Номер"
                                            value={authSlice.currentPremisePhone}
                                            onChange={
                                                (e) => {
                                                    dispatch(updateCurrentPremisePhone(e.target.value));
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <p className="form-label">Основное фото **</p>
                                        <div className="form-images">
                                            <div className="form-image selected notempty">
                                                <input type="file" name="" id="f1"/>
                                                <label htmlFor="f1" className="form-image__label">
                                                    <div className="form-image__mask">
                                                        <button>Удалить</button>
                                                    </div>
                                                    <img src={examplePLace} alt=""/>
                                                </label>
                                            </div>
                                            <div className="form-image">
                                                <input
                                                    type="file"
                                                    id="f4"
                                                    onChange={
                                                        (e) => {
                                                            console.log("main: ")
                                                            console.log(e.target.files[0]);
                                                            dispatch(addMainImageToState(e.target.files[0]));
                                                        }
                                                    }
                                                />
                                                <label htmlFor="f4" className="form-image__label"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <p className="form-label">Фото помещения</p>
                                        <div className="form-images">
                                            <div className="form-image selected notempty">
                                                <input type="file" name="" id="f1"/>
                                                <label htmlFor="f1" className="form-image__label">
                                                    <div className="form-image__mask">
                                                        <button>Удалить</button>
                                                    </div>
                                                    <img src={examplePLace} alt=""/>
                                                </label>
                                            </div>
                                            <div className="form-image notempty">
                                                <input type="file" name="" id="f2"/>
                                                <label htmlFor="f2" className="form-image__label">
                                                    <div className="form-image__mask">
                                                        <button>Сделать основным</button>
                                                        <br/>
                                                        <button>Удалить</button>
                                                    </div>
                                                    <img src={examplePLace} alt=""/>
                                                </label>
                                            </div>
                                            <div className="form-image notempty">
                                                <input type="file" name="" id="f3"/>
                                                <label htmlFor="f3" className="form-image__label">
                                                    <div className="form-image__mask">
                                                        <button>Сделать основным</button>
                                                        <br/>
                                                        <button>Удалить</button>
                                                    </div>
                                                    <img src={examplePLace} alt=""/>
                                                </label>
                                            </div>
                                            <div className="form-image">
                                                <input
                                                    type="file"
                                                    multiple
                                                    id="f5"
                                                    onChange={
                                                        (e) => {
                                                            console.log("imgs: ")
                                                            console.log(e.target.files);
                                                            dispatch(addImgsToState(e.target.files));
                                                        }
                                                    }
                                                />
                                                <label htmlFor="f5" className="form-image__label"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <p className="form-label">План помещения</p>
                                        <div className="form-images">
                                            <div className="form-image selected notempty">
                                                <input type="file" name="" id="f5"/>
                                                <label htmlFor="f5" className="form-image__label">
                                                    <div className="form-image__mask">
                                                        <button>Удалить</button>
                                                    </div>
                                                    <img src={examplePLace} alt=""/>
                                                </label>
                                            </div>
                                            <div className="form-image notempty">
                                                <input type="file" name="" id="f6"/>
                                                <label htmlFor="f6" className="form-image__label">
                                                    <div className="form-image__mask">
                                                        <button>Сделать основным</button>
                                                        <br/>
                                                        <button>Удалить</button>
                                                    </div>
                                                    <img src={examplePLace} alt=""/>
                                                </label>
                                            </div>
                                            <div className="form-image notempty">
                                                <input type="file" name="" id="f7"/>
                                                <label htmlFor="f7" className="form-image__label">
                                                    <div className="form-image__mask">
                                                        <button>Сделать основным</button>
                                                        <br/>
                                                        <button>Удалить</button>
                                                    </div>
                                                    <img src={examplePLace} alt=""/>
                                                </label>
                                            </div>
                                            <div className="form-image">
                                                <input
                                                    type="file"
                                                    id="f8"
                                                    onChange={
                                                        (e) => {
                                                            console.log("plan: ")
                                                            console.log(e.target.files[0]);
                                                            dispatch(addPlanImageToState(e.target.files[0]));
                                                        }
                                                    }
                                                />
                                                <label htmlFor="f8" className="form-image__label"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label className="form-label">Адрес:</label>
                                        <span
                                            className="form-link"
                                            id="create-place-map-modal-toogler"
                                            onClick={
                                                () => {
                                                    dispatch(toggleIsMapOpenOnCreatePage(true));
                                                }
                                            }
                                        >
                                        указать на карте
                                    </span>
                                    </div>
                                    <div className="form-row">
                                        <p className="form-label">Наличие интернета</p>
                                        <div className="form-radio">
                                            <input type="radio" name="r1" id="r1" className="form-radio-input"/>
                                            <label
                                                htmlFor="r1"
                                                className="form-radio-label"
                                                onClick={() => {
                                                    dispatch(updatePremiseHasInternet(true))
                                                }}
                                            >Да</label>
                                        </div>
                                        <div className="form-radio">
                                            <input type="radio" name="r1" id="r2" className="form-radio-input"/>
                                            <label
                                                htmlFor="r2"
                                                className="form-radio-label"
                                                onClick={() => {
                                                    dispatch(updatePremiseHasInternet(false))
                                                }}
                                            >Нет</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <p className="form-label">Помещение приватное?</p>
                                        <div className="form-radio">
                                            <input type="radio" name="r2" id="r3" className="form-radio-input"/>
                                            <label
                                                htmlFor="r3"
                                                className="form-radio-label"
                                                onClick={() => {
                                                    dispatch(updateIsPremisePrivate(true))
                                                }}
                                            >Да</label>
                                        </div>
                                        <div className="form-radio">
                                            <input type="radio" name="r2" id="r4" className="form-radio-input"/>
                                            <label
                                                htmlFor="r4"
                                                className="form-radio-label"
                                                onClick={() => {
                                                    dispatch(updateIsPremisePrivate(false))
                                                }}
                                            >Нет</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <button
                                            className="main-btn"
                                            onClick={
                                                () => {
                                                    dispatch(postPremise(
                                                        {
                                                            name: authSlice.currentPremiseName,
                                                            description: authSlice.currentPremiseDescription,
                                                            squareMetersNumber: authSlice.currentPremiseArea,
                                                            numberOfFloor: authSlice.currentPremiseFloor,
                                                            hasInternet: authSlice.premiseHasInternet,
                                                            privatePremises: authSlice.isPremisePrivate,
                                                            phone: authSlice.currentPremisePhone,
                                                            costPerMonth: authSlice.currentPremiseCost,
                                                            address: authSlice.currentOnClickAddress,
                                                            latitude: authSlice.currentOnClickCoords[0],
                                                            longitude: authSlice.currentOnClickCoords[1],
                                                            mainImage: authSlice.mainImg,
                                                            planImg: authSlice.plan,
                                                            imqsImg: authSlice.imgs
                                                        }
                                                    ))
                                                    navigate("../Premises");
                                                    window.location.reload(false);
                                                }
                                            }
                                        >Отправить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuRightLogined/>
                {
                    authSlice.isMapOpened ?
                        <div className="modal opened" id="create-place-map-modal">
                            <div className="modal__bg"></div>
                            <RentYourPage/>
                        </div> : null
                }
            </div>
        </div>
    );
};

export default CreatePremise;