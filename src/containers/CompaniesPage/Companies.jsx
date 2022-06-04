import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../mainStyle.css"
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import RightMenu from "../Menus/MenuRightLogined/MenuRightLogined";
import CreateCompanies from "./CreateCompanie/CreateCompanie";
import {useEffect} from "react";
import {getCompanies} from "../../redux/reducers/authSlice";
import CompanyPagesMenu from "../Menus/CompanyPagesManu/CompanyPagesMenu";
import CreatedCompanyPage from "./CreatedCompanyPage/CreatedCompanyPage";

const Companies = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myCompanies = JSON.parse(localStorage.getItem("myCompanies"));

    useEffect(() => {
        dispatch(getCompanies({}));
    });

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                {
                    myCompanies
                        ? <CreatedCompanyPage/>
                        : <CreateCompanies/>
                }
                <RightMenu/>
            </div>
        </div>
    );
};

export default Companies;