import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../redux/reducers/authSlice";
import {
    updateEmailInput,
    updateMobileInput,
    updateNameInput,
    updatePasswordInput,
    updateRegPasswordChecker,
    updatePatronymicInput,
    updateSurnameInput
} from "../../../redux/reducers/authSlice";
import axios from "axios";
import "../../mainStyle.css";


const Registration = function () {
    const authSlice = useSelector(state => state.auth);
    const messageSlice = useSelector(state => state.authMessage)
    const dispatch = useDispatch();
    const passwordChecker = authSlice.currentPasswordInput === authSlice.regPasswordChecker;

    return (
        <div className="container container-sm">
            <h1 className="container__h">Регистрация</h1>
            <div className="container__inner">
                <form action="" className="main-form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Имя *</label>
                                <input
                                    className="form-text"
                                    placeholder="Имя"
                                    value={authSlice.currentNameInput}
                                    onChange={(e) => {
                                        dispatch(updateNameInput(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Фамилия *</label>
                                <input
                                    type="text"
                                    className="form-text"
                                    placeholder="Фамилия"
                                    value={authSlice.currentSurnameInput}
                                    onChange={(e) => {
                                        dispatch(updateSurnameInput(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Отчество *</label>
                                <input
                                    type="text"
                                    className="form-text"
                                    placeholder="Отчество"
                                    value={authSlice.currentPatronymicInput}
                                    onChange={(e) => {
                                        dispatch(updatePatronymicInput(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Email *</label>
                                <input
                                    type="text"
                                    className="form-text"
                                    placeholder="Email"
                                    value={authSlice.currentEmailInput}
                                    onChange={(e) => {
                                        dispatch(updateEmailInput(e.target.value))
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Телефон *</label>
                                <input
                                    type="text"
                                    className="form-text"
                                    placeholder="Телефон"
                                    value={authSlice.currentMobileInput}
                                    onChange={(e) => {
                                        dispatch(updateMobileInput(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="" className="form-label">Пароль *</label>
                                <input
                                    type="text"
                                    className="form-text"
                                    placeholder="Пароль"
                                    value={authSlice.currentPasswordInput}
                                    onChange={(e) => {
                                        dispatch(updatePasswordInput(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="" className="form-label">
                                    {
                                        (authSlice.regPasswordChecker === authSlice.currentPasswordInput)
                                            ? "Подтверждение пароля *"
                                            : "Подтверждение пароля * !ПАРОЛИ НЕ СХОДЯТСЯ!"
                                    }
                                </label>
                                <input
                                    type="text"
                                    className="form-text"
                                    placeholder="Подтверждение пароля"
                                    value={authSlice.regPasswordChecker}
                                    onChange={(e) => {
                                        dispatch(updateRegPasswordChecker(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-checkbox">
                                    <input type="checkbox" name="" id="c1" className="form-checkbox-input"/>
                                    <label htmlFor="c1" className="form-checkbox-label">Я человек</label>
                                </div>
                                <button
                                    className="main-btn"
                                    onClick={() => dispatch(
                                        register({
                                            name: authSlice.currentNameInput,
                                            surname: authSlice.currentSurnameInput,
                                            patronymic: authSlice.currentPatronymicInput,
                                            email: authSlice.currentEmailInput,
                                            mobile: authSlice.currentMobileInput,
                                            password: authSlice.currentPasswordInput
                                        }))}
                                >
                                    Зарегестрироваться
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        /*
        <div>
            <h2>Regin</h2>
            <p>
                <input
                    type="text"
                    placeholder="name"
                    value={authSlice.currentNameInput}
                    onChange={(e) => {
                        dispatch(updateNameInput(e.target.value))
                    }}
                />
            </p>
            <p>Ivan</p>
            <p>
                <input
                    type="text"
                    placeholder="surname"
                    value={authSlice.currentSurnameInput}
                    onChange={(e) => {
                        dispatch(updateSurnameInput(e.target.value))
                    }}
                />
            </p>
            <p>Ivanovskiy</p>
            <p>
                <input
                    type="text"
                    placeholder="patronymic"
                    value={authSlice.currentPatronymicInput}
                    onChange={(e) => {
                        dispatch(updatePatronymicInput(e.target.value))
                    }}
                />
            </p>
            <p>Ivanovich</p>
            <p>
                <input
                    type="text"
                    placeholder="email"
                    value={authSlice.currentEmailInput}
                    onChange={(e) => {
                        dispatch(updateEmailInput(e.target.value))
                    }}
                />
            </p>
            <p>22-emil@mail.ru</p>
            <p>
                <input
                    type="text"
                    placeholder="mobile"
                    value={authSlice.currentMobileInput}
                    onChange={(e) => {
                        dispatch(updateMobileInput(e.target.value))
                    }}
                />
            </p>
            <p>+7 912 123 12 12</p>
            <p>
                <input
                    type="text"
                    placeholder="password"
                    value={authSlice.currentPasswordInput}
                    onChange={(e) => {
                        dispatch(updatePasswordInput(e.target.value))
                    }}
                />
            </p>
            <p>testuser</p>
            <p>
                <input
                    type="text"
                    placeholder="password again"
                    value={authSlice.regPasswordChecker}
                    onChange={(e) => {
                        dispatch(updateRegPasswordChecker(e.target.value))
                    }}
                />
            </p>
            {
                passwordChecker
                    ? <p>----------</p>
                    : <p>PASSWORDS ARE DIFFERENT</p>
            }
            <button onClick={() => dispatch(register({
                name: authSlice.currentNameInput,
                surname: authSlice.currentSurnameInput,
                patronymic: authSlice.currentPatronymicInput,
                email: authSlice.currentEmailInput,
                mobile: authSlice.currentMobileInput,
                password: authSlice.currentPasswordInput
            }))}>
                Reg
            </button>
        </div>*/
    );
};
/*
{
    "name": "Даниил2",
    "surname": "Вшивцев2",
    "patronymic": "Павлович2",
    "email":"danya.vshivtsev@gmail.com",
    "mobile":"+7 912 123 12 12",
    "password":"daniil"
}
*/

export default Registration