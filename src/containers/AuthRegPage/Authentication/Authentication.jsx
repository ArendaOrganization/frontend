import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/reducers/authSlice";
import {updateEmailInput, updatePasswordInput} from "../../../redux/reducers/authSlice";
import {useLocation, useNavigate} from "react-router";

const Authentication = function () {
    const authSlice = useSelector(state => state.auth);
    const messageSlice = useSelector(state => state.authMessage)
    const dispatch = useDispatch();

    return (
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
        </div>
    );
};
/*
{
    "email":"danya.vshivtsev@gmail.com",
    "password":"daniil"
}
*/

export default Authentication