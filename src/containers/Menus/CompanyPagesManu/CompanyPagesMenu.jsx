import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import {getAllPremises} from "../../../redux/reducers/authSlice";

const CompanyPagesMenu = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="pages-menu c-pages-menu">
            <ul className="pages-menu__ul">
                <li>
                    <a onClick={
                        () => {
                            dispatch(getAllPremises({}));
                            navigate("../Premises", {replace: true});
                        }}
                    >
                        Помещения</a>
                </li>
                <li>
                    <a onClick={
                        () => {
                            navigate("../Documents", {replace: true})
                        }
                    }
                    >Документы</a>
                </li>
                <li>
                    <a onClick={
                        () => {
                            navigate("../Bid", {replace: true})
                        }
                    }
                    >Заявки</a>
                </li>
                <li>
                    <a href="">Мессенджер</a>
                </li>
            </ul>
        </div>
    );
};

export default CompanyPagesMenu;