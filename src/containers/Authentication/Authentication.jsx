import {useDispatch, useSelector} from "react-redux";
import {logIn, updateEmailInput, updatePasswordInput} from "../../redux/mainReducer";


const Authentication = function () {
    const initialData = useSelector(state => state.authReducer)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="email"
                value={initialData.currentEmailInput}
                onChange={(e) => {
                    dispatch(updateEmailInput(e.target.value))
                }}
            />
            <p>test@user.com</p>
            <input
                type="text"
                placeholder="password"
                value={initialData.currentPasswordInput}
                onChange={(e) => {
                    dispatch(updatePasswordInput(e.target.value))
                }}
            />
            <p>testuser</p>
            <button onClick={() => {
                dispatch(logIn())
            }}>
                Log
            </button>
        </div>
    );
};

export default Authentication