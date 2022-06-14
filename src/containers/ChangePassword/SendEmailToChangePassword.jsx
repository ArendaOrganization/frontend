import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../mainStyle.css";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import {changePassword, updateEmailForPasswordChangeInput} from "../../redux/reducers/authSlice";

const SendEmailToChangePassword = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-sm">
                    <h1 className="container__h">Восстановление пароля</h1>
                    <div className="container__inner">
                        <div className="main-form">
                            <div className="row align-end">
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <label htmlFor="" className="form-label">
                                            Введите email от вашего аккаунта
                                        </label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Email"
                                            value={authSlice.emailForPasswordChangeInput}
                                            onChange={
                                                (e) => {
                                                    dispatch(updateEmailForPasswordChangeInput(e.target.value))
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <button
                                            className="main-btn"
                                            onClick={() => {
                                                dispatch(changePassword({email:authSlice.emailForPasswordChangeInput}));
                                                navigate("../CheckYourEmailSign", {replace: true});
                                            }}
                                        >Отправить
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
                            navigate("../", {replace: true});
                        }}
                        className="menu-right__link"
                    >Войти</a>
                </div>
            </div>
        </div>
    );
};

export default SendEmailToChangePassword;