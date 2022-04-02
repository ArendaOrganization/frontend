import {Outlet, useLocation} from "react-router";
import {Navigate} from "react-router-dom";

const useAuth = () => {
    const user = {loggedIn: false};
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = true;
    return isAuth
        ? <Outlet/>
        : <Navigate to="/" replace state={{from: location}}/>;
};

export default ProtectedRoutes;