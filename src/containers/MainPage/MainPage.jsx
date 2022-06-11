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
                                    Заголовок
                                </h1>
                                <p>
                                    Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
                                    какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы
                                    Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не
                                    достигнут нужный объём.
                                </p>
                                <p>
                                    Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum
                                    генератором. Он использует словарь из более чем 200 латинских слов, а также набор
                                    моделей предложений.
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