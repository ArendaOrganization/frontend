import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import {getCompanies, logout} from "../../../redux/reducers/authSlice";

const PagesMenu = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="pages-menu">
            <ul className="pages-menu__ul">
                <li>
                    <a
                        className="active"
                        onClick={
                            () => {
                                navigate("../Companies", {replace: true});
                                dispatch(getCompanies({}));
                            }
                        }
                    >Мои компании</a>
                </li>
                <li>
                    <a href="">Мессенджер</a>
                </li>
                <li>
                    <a onClick={() => dispatch(logout())}>Выйти</a>
                </li>
            </ul>
        </div>
    );
};

export default PagesMenu;