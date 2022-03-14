import {useDispatch, useSelector} from "react-redux";
import {reg, updateEmailInput, updateMobileInput, updateNameInput, updatePasswordInput} from "../../redux/mainReducer";


const Registration = function () {
    const initialData = useSelector(state => state.authReducer)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Regin</h2>
            <input
                type="text"
                placeholder="name"
                value={initialData.currentNameInput}
                onChange={(e) => {
                    dispatch(updateNameInput(e.target.value))
                }}
            />
            <p>Daniil</p>
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
                placeholder="mobile"
                value={initialData.currentMobileInput}
                onChange={(e) => {
                    dispatch(updateMobileInput(e.target.value))
                }}
            />
            <p>+7 912 123 12 12</p>
            <input
                type="text"
                placeholder="password"
                value={initialData.currentPasswordInput}
                onChange={(e) => {
                    dispatch(updatePasswordInput(e.target.value))
                }}
            />
            <p>testuser</p>
            <button onClick={() => dispatch(reg())}>
                Reg
            </button>
        </div>
    );
};

export default Registration