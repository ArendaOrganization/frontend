import {useDispatch, useSelector} from "react-redux";
import LogOut from "../AuthRegPage/LogOut/LogOut";


const HomePage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hello world!</h1>
            <h3>You are:</h3>
            {authSlice.user.name}
            <h3>You're token:</h3>
            {authSlice.user.token}
            <LogOut/>
        </div>
    );
};

export default HomePage;