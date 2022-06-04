import {useDispatch, useSelector} from "react-redux";
import {leftMenuToggler} from "../../../redux/reducers/authSlice";

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
                    <a href="src/containers/Menus/MenuLeft/LeftMenu">Главная</a>
                </li>
                <li>
                    <a href="src/containers/Menus/MenuLeft/LeftMenu">Карта помещений</a>
                </li>
                <li>
                    <a href="src/containers/Menus/MenuLeft/LeftMenu">Помощь</a>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;