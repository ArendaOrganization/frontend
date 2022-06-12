import {useDispatch, useSelector} from "react-redux";
import {updateRegOrLogVisibility} from "../../redux/reducers/authSlice";
import Authentication from "./AuthenticationpPage/Authentication";
import Registration from "./RegistrationPage/Registration";
import {useLocation, useNavigate} from "react-router";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import "../mainStyle.css";
import {useEffect} from "react";

const AuthReg = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="main">
            <LeftMenu/>
            <div className={authSlice.leftMenuToggle ? "main__inner translated" : "main__inner"}>
                {authSlice.regOrLogVisibility ? <Authentication/> : ""}
                {!authSlice.regOrLogVisibility ? <Registration/> : ""}
                <div className="menu-right">
                    <a onClick={() => dispatch(updateRegOrLogVisibility())} className="menu-right__link">
                        {authSlice.regOrLogVisibility ? "Зарегистрироваться" : "Вход"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AuthReg