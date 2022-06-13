import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../mainStyle.css";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import mainImg from "../img/main.png";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import {updateRegOrLogVisibility} from "../../redux/reducers/authSlice";

const MainPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-main">
                    <div className="row">
                        <div className="maincol-1">
                            <div className="main-text">
                                <h1>
                                    Arenda
                                </h1>
                                <p>
                                    Arenda — это сервис по взаимодействияю арендодателя и арендатора с возможностью
                                    нахождения нужного помещения для аренды. С помощью сервиса Arenda можно подписывать
                                    договоры электронной подписью, мониторить свои помещения и арендаторов:
                                    автоматически напоминать им о предстоящих платежах, решать необходимые вопросы
                                    через внутренний мессенджер, в автоматическом режиме уведомлять арендаторов о
                                    предстоящих изменениях или новостях.
                                </p>
                            </div>
                        </div>
                        <div className="maincol-2">
                            <div className="main-img">
                                <img src={mainImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-right">
                    {
                        authSlice.user
                            ? <MenuRightLogined/>
                            : <div>
                                <a
                                    className="menu-right__link"
                                    onClick={() => {
                                        navigate("../", {replace: true})
                                    }}
                                >Вход</a>
                                /
                                <a
                                    className="menu-right__link"
                                    onClick={() => {
                                        navigate("../", {replace: true})
                                        dispatch(updateRegOrLogVisibility())
                                    }}
                                >Регистрация</a>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;