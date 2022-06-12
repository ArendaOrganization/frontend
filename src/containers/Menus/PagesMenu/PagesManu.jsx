import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import {getCompanies, getCompanyById, logout} from "../../../redux/reducers/authSlice";
import {useEffect} from "react";

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
                                navigate("../Companies");
                                window.location.reload(false);
                            }
                        }
                    >Мои компании</a>
                </li>
                <li>
                    <a
                        onClick={
                            () => {
                                navigate("../Messenger");
                            }
                        }
                    >Мессенджер</a>
                </li>
                <li>
                    <a onClick={
                        () => {
                            dispatch(logout());
                            window.location.reload(false);
                        }
                    }>Выйти</a>
                </li>
            </ul>
        </div>
    );
};

export default PagesMenu;