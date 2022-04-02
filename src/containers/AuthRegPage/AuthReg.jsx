import {useDispatch, useSelector} from "react-redux";
import {makeLogVisible, makeRegVisible} from "../../redux/reducers/authSlice";
import Authentication from "./Authentication/Authentication";
import Registration from "./Registration/Registration";
import LogOut from "./LogOut/LogOut";
import {useNavigate} from "react-router";
import {useContext} from "react";

const AuthReg = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

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
            {authSlice.isLoggedIn ? "true" : "false"}
            <LogOut/>
        </div>
    );
};

export default AuthReg