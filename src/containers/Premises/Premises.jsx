import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../mainStyle.css";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import CreatePremise from "./CreatePremise/CreatePremise";

const PremisesPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="main">
            <LeftMenu/>
            <CreatePremise/>
        </div>
    );
};

export default PremisesPage;