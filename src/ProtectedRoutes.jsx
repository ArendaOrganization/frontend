import {Outlet, useLocation} from "react-router";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const useAuth = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
};

const ProtectedRoutes = () => {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));
    return user
        ? <Outlet/>
        : <Navigate to="/" replace state={{from: location}}/>;
};

export default ProtectedRoutes;