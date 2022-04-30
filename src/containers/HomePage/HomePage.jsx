import {useDispatch, useSelector} from "react-redux";
import LogOut from "../AuthRegPage/LogOut/LogOut";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import homePageStyle from "./HomePage.module.css"


const HomePage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hello world!</h1>
            <h3>You are:</h3>
            {authSlice.user.name}
            <h3>You're token:</h3>
            {authSlice.user.token}
            <LogOut/>
            <Link to={"/MapPage"} className={homePageStyle.button}>
                ToMapPage
            </Link>
        </div>
    );
};

export default HomePage;