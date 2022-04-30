import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../redux/reducers/authSlice";
import {
    updateEmailInput,
    updateMobileInput,
    updateNameInput,
    updatePasswordInput,
    updateRegPasswordChecker
} from "../../../redux/reducers/authSlice";
import axios from "axios";


const Registration = function () {
    const authSlice = useSelector(state => state.auth);
    const messageSlice = useSelector(state => state.authMessage)
    const dispatch = useDispatch();
    const passwordChecker = authSlice.currentPasswordInput === authSlice.regPasswordChecker;

    return (
        <div>
            <h2>Regin</h2>
            <input
                type="text"
                placeholder="name"
                value={authSlice.currentNameInput}
                onChange={(e) => {
                    dispatch(updateNameInput(e.target.value))
                }}
            />
            <p>Daniil</p>
            <input
                type="text"
                placeholder="email"
                value={authSlice.currentEmailInput}
                onChange={(e) => {
                    dispatch(updateEmailInput(e.target.value))
                }}
            />
            <p>test@user.com</p>
            <input
                type="text"
                placeholder="mobile"
                value={authSlice.currentMobileInput}
                onChange={(e) => {
                    dispatch(updateMobileInput(e.target.value))
                }}
            />
            <p>+7 912 123 12 12</p>
            <input
                type="text"
                placeholder="password"
                value={authSlice.currentPasswordInput}
                onChange={(e) => {
                    dispatch(updatePasswordInput(e.target.value))
                }}
            />
            <p>testuser</p>
            <input
                type="text"
                placeholder="password again"
                value={authSlice.regPasswordChecker}
                onChange={(e) => {
                    dispatch(updateRegPasswordChecker(e.target.value))
                }}
            />
            {
                passwordChecker
                    ? <p>----------</p>
                    : <p>PASSWORDS ARE DIFFERENT</p>
            }
            <button onClick={() => dispatch(register({
                username: authSlice.currentNameInput,
                email: authSlice.currentEmailInput,
                mobile: authSlice.currentMobileInput,
                password: authSlice.currentPasswordInput
            }))}>
                Reg
            </button>
        </div>
    );
};

export default Registration