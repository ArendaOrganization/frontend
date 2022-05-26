import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import {leftMenuToggler} from "../../redux/reducers/authSlice";

const LeftMenu = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <div className={authSlice.leftMenuToggle ? "left-menu opened" : "left-menu"}  id="main__inner">
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
                    <a href="">Главная</a>
                </li>
                <li>
                    <a href="">Карта помещений</a>
                </li>
                <li>
                    <a href="">Помощь</a>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;