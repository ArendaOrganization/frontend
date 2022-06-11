import {useDispatch, useSelector} from "react-redux";
import {getAllMapData, leftMenuToggler} from "../../../redux/reducers/authSlice";
import {useNavigate} from "react-router";

const LeftMenu = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={authSlice.leftMenuToggle ? "left-menu opened" : "left-menu"} id="main__inner">
            <div
                className="left-menu__togler"
                id="left-menu__togler"
                onClick={() => dispatch(leftMenuToggler())}
            >
                <span className="left-menu__togler1"></span>
                <span className="left-menu__togler2"></span>
                <span className="left-menu__togler3"></span>
            </div>
            <ul className="left-menu__ul">
                <li>
                    <a
                        onClick={() => navigate("../HomePage", {replace: true})}
                        className="leftMenuA"
                    >Личный Кабинет</a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            navigate("../MainPage", {replace: true})
                        }}
                        className="leftMenuA"
                    >Главная</a>
                </li>
                <li>
                    <a
                        onClick={
                            () => {
                                navigate("../MapPage", {replace: true});
                                dispatch(getAllMapData({}));
                            }
                        }
                        className="leftMenuA"
                    >Карта помещений</a>
                </li>
                <li>
                    <a
                        onClick={
                            () => {
                                navigate("../HelpPage", {replace: true})
                            }
                        }
                        className="leftMenuA"
                    >Помощь</a>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;