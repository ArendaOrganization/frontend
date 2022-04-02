import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../redux/reducers/authSlice";

const LogOut = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(logout())}>
                LogOut
            </button>
        </div>
    );
};

export default LogOut;