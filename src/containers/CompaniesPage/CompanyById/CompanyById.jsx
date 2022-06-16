import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {getAllDialogs, getAllMessagesByCompanyId, getCompanyById} from "../../../redux/reducers/authSlice";
import img from "../../img/example-place.png"
import MenuRightLogined from "../../Menus/MenuRightLogined/MenuRightLogined";
import PagesManu from "../../Menus/PagesMenu/PagesManu";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";

const CompanyBiId = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const elementId = searchParams.get("elementId");

    useEffect(() => {
        dispatch(getCompanyById({id: elementId}))
    },[]);

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                {
                    authSlice.companyById === null
                        ? ""
                        : <div className="container container-m">
                            <PagesManu/>
                            <h1 className="container__h">Компания</h1>
                            <div className="container__inner">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="page-avatar">
                                            <img src={img} alt="" className="page-avatar__img"/>
                                            <a
                                                className="main-btn"
                                                onClick={() => {
                                                    dispatch(getAllMessagesByCompanyId({id: elementId}))
                                                    dispatch(getAllDialogs({}));
                                                    setTimeout(() => {
                                                        navigate("../Messenger")
                                                    }, 500)
                                                }}
                                            >Написать</a>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <p className="container-p container-p_wm">Название компании:</p>
                                            </div>
                                            <div className="col-md-9">
                                                <p className="container-p">
                                                    {authSlice.companyById.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <p className="container-p container-p_wm">Описание:</p>
                                            </div>
                                            <div className="col-md-9">
                                                <p className="container-p">
                                                    {authSlice.companyById.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <p className="container-p container-p_wm">ИНН:</p>
                                            </div>
                                            <div className="col-md-9">
                                                <p className="container-p">
                                                    {authSlice.companyById.inn}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <p className="container-p container-p_wm">Адрес главного офиса:</p>
                                            </div>
                                            <div className="col-md-9">
                                                <p className="container-p">
                                                    {authSlice.companyById.addressMainOffice}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <p className="container-p container-p_wm">Номер телефона:</p>
                                            </div>
                                            <div className="col-md-9">
                                                <p className="container-p">
                                                    {authSlice.companyById.phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <p className="container-p container-p_wm">Email:</p>
                                            </div>
                                            <div className="col-md-9">
                                                <p className="container-p">
                                                    {authSlice.companyById.email}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <MenuRightLogined/>
            </div>
        </div>
    );
};

export default CompanyBiId;