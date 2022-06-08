import {useDispatch, useSelector} from "react-redux";
import {
    sendNewPasswordToBackEnd,
    updatePasswordCheckerToChangePasswordInput,
    updatePasswordToChangePasswordInput,
    updateRegOrLogVisibility
} from "../../redux/reducers/authSlice";
import {useLocation, useNavigate} from "react-router";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import "../mainStyle.css";
import {useSearchParams} from "react-router-dom";

const ChangePassword = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    let passwordChecker = (authSlice.passwordToChangePassword === authSlice.passwordCheckerToChangePassword);
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const secondCode = searchParams.get("secondeCode");

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">

                <div className="container container-sm">
                    <h1 className="container__h">Изменение пароля</h1>
                    <div className="container__inner">
                        <div action="" className="main-form">
                            <div className="row align-end">
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <label className="form-label">Пароль *</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            value={authSlice.passwordToChangePassword}
                                            onChange={
                                                (e) => {
                                                    dispatch(updatePasswordToChangePasswordInput(e.target.value))
                                                }
                                            }
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label className="form-label">
                                            Подтверждение пароля *
                                            {
                                                passwordChecker
                                                    ? ""
                                                    : "!ПАРОЛИ НЕ СХОДЯТСЯ!"
                                            }
                                        </label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            value={authSlice.passwordCheckerToChangePassword}
                                            onChange={
                                                (e) => {
                                                    dispatch(updatePasswordCheckerToChangePasswordInput(e.target.value))
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <button
                                            className="main-btn"
                                            onClick={
                                                () => {
                                                    dispatch(sendNewPasswordToBackEnd({
                                                        password: authSlice.passwordToChangePassword,
                                                        code,
                                                        secondCode,
                                                    }))
                                                    navigate("../PasswordChangeConfirmation", {replace: true})
                                                }
                                            }
                                        >Изменить пароль
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default ChangePassword;