import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../mainStyle.css"
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import RightMenu from "../Menus/MenuRightLogined/MenuRightLogined";
import CreateCompanies from "./CreateCompanie/CreateCompanie";
import {useEffect} from "react";
import {getCompanies, getCompanyById} from "../../redux/reducers/authSlice";
import CompanyPagesMenu from "../Menus/CompanyPagesManu/CompanyPagesMenu";
import CreatedCompanyPage from "./CreatedCompanyPage/CreatedCompanyPage";
import {useSearchParams} from "react-router-dom";

const Companies = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const elementId = searchParams.get("elementId");

    useEffect(() => {
        dispatch(getCompanies({}))
    },[])

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                {
                    (authSlice.myCompanies !== null && authSlice.myCompanies)
                        ? <CreatedCompanyPage/>
                        : <CreateCompanies/>
                }
                <RightMenu/>
            </div>
        </div>
    );
};

export default Companies;