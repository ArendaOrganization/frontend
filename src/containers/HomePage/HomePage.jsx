import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import LeftMenu from "../LeftMenu/LeftMenu";
import avatar from "./img/user.png";
import {logout} from "../../redux/reducers/authSlice";
import "../mainStyle.css"

const HomePage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-m">
                    <div className="pages-menu">
                        <ul className="pages-menu__ul">
                            <li>
                                <a href="">Мои компании</a>
                            </li>
                            <li>
                                <a href="">Мессенджер</a>
                            </li>
                            <li>
                                <a onClick={() => dispatch(logout())}>Выйти</a>
                            </li>
                        </ul>
                    </div>
                    <h1 className="container__h">Личный кабинет пользователя</h1>
                    <div className="container__inner">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="container-p container-p_wm">Фото профиля:</p>
                            </div>
                            <div className="col-md-9">
                                <img src={avatar} alt="" className="user-avatar"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <p className="container-p container-p_wm">Пароль:</p>
                            </div>
                            <div className="col-md-9">
                                <p className="container-p">********</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <p className="container-p container-p_wm">Номер телефона:</p>
                            </div>
                            <div className="col-md-9">
                                <p className="container-p">+7 (777) 777-77-77</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <a href="" className="main-btn">Редактировать</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-right logined">
                    <a href="" className="menu-right__link">
                        Имя пользователя
                    </a>
                    <img src={avatar} alt="" className="user-avatar"/>
                </div>
            </div>
        </div>
    );
};
/*
<div>
            <h1>Hello world!</h1>
            <h3>You are:</h3>
            {authSlice.user.name}
            <h3>You're token:</h3>
            {authSlice.user.token}
            <LogOut/>
            <Link to={"/MapPage"} className={homePageStyle.button}>
                ToMapPage
            </Link>
            <button onClick={() => dispatch(getAllMessages({}))}>Отправить сообщение</button>
        </div>
*/

export default HomePage;