import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import logo from "../img/user.png"

const RightMenu = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="menu-right logined">
            <a
                className="menu-right__link"
                onClick={() => navigate("../HomePage", {replace: true})}
            >
                Имя пользователя
            </a>
            <img src={logo} alt="" className="user-avatar"/>
        </div>
    );
};

export default RightMenu;