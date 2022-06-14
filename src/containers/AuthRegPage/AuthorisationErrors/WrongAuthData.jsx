import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import "../../mainStyle.css";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";

const WrongData = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-sm">
                    <h1 className="container__h">Ошибка!!!</h1>
                    <div className="container__inner">
                        <form action="" className="main-form">
                            <p className="container_p">
                                Вы ввели неверные данные
                            </p>
                        </form>
                    </div>
                </div>
                <div className="menu-right">
                    <a
                        onClick={() => {
                            navigate("../", {replace: true})
                        }}
                        className="menu-right__link"
                    >Войти</a>
                </div>
            </div>
        </div>
    );
};

export default WrongData;