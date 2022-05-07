import {useDispatch, useSelector} from "react-redux";
import {makeLogVisible, makeRegVisible} from "../../redux/reducers/authSlice";
import Authentication from "./Authentication/Authentication";
import Registration from "./Registration/Registration";
import {useLocation, useNavigate} from "react-router";
import {Link} from "react-router-dom";
import authRegStyle from "./AuthReg.module.css";
import {useEffect} from "react";

const AuthReg = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <input
                type="submit"
                value="Login"
                onClick={() => {
                    dispatch(makeLogVisible())
                }}
            />
            <input
                type="submit"
                value="Registration"
                onClick={() => dispatch(makeRegVisible())}
            />
            {authSlice.isLogVisible ? <Authentication/> : ""}
            {authSlice.isRegVisible ? <Registration/> : ""}
            <p>
                {authSlice.isLoggedIn ? "true" : "false"}
            </p>
            <p>
                <Link to={"/HomePage"} className={authRegStyle.button}>
                    ToHomePage
                </Link>
            </p>
        </div>
    );
};

export default AuthReg