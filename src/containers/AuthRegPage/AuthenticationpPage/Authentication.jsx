import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/reducers/authSlice";
import {updateEmailInput, updatePasswordInput} from "../../../redux/reducers/authSlice";
import {useLocation, useNavigate} from "react-router";
import {Navigate} from "react-router-dom";
import "../../mainStyle.css";

const Authentication = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authorize = () => {
        dispatch(
            login({
                email: authSlice.currentEmailInput,
                password: authSlice.currentPasswordInput
            })
        )
    };
    /*async function handleSubmit(event) {
        event.preventDefault();
        await authorize();
        window.location.reload(false);
    }*/

    if (authSlice.user) {
        return <Navigate to="/HomePage" />;
    }
    /*onSubmit={handleSubmit} */
    return (
        <div className="container container-sm">
            <h1 className="container__h">Авторизация</h1>
            <div className="container__inner">
                <div className="main-form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Email *</label>
                                <input
                                    className="form-text"
                                    type="text"
                                    placeholder="email"
                                    value={authSlice.currentEmailInput}
                                    onChange={(e) => {
                                        dispatch(updateEmailInput(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <input
                                    type="submit"
                                    className="main-btn"
                                    value="Войти"
                                    onClick={() => authorize()}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Пароль *</label>
                                <input
                                    className="form-text"
                                    type="text"
                                    placeholder="password"
                                    value={authSlice.currentPasswordInput}
                                    onChange={(e) => {
                                        dispatch(updatePasswordInput(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <a
                                    className="form-link"
                                    onClick={() => navigate("../SendEmailToChangePassword",{replace: true})}
                                >Забыли пароль</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        /*
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="email"
                value={authSlice.currentEmailInput}
                onChange={(e) => {
                    dispatch(updateEmailInput(e.target.value))
                }}
            />
            <p>22-emil@mail.ru</p>
            <input
                type="text"
                placeholder="password"
                value={authSlice.currentPasswordInput}
                onChange={(e) => {
                    dispatch(updatePasswordInput(e.target.value))
                }}
            />
            <p>testuser</p>
            <button onClick={() => {
                dispatch(login({
                    email:authSlice.currentEmailInput,
                    password:authSlice.currentPasswordInput
                }))
            }}>
                Log
            </button>
        </div>*/
    );
};
/*
{
    "email":"danya.vshivtsev@gmail.com",
    "password":"daniil"
}
*/

export default Authentication