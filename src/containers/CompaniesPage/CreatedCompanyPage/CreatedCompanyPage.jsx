import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import CompanyPagesMenu from "../../Menus/CompanyPagesManu/CompanyPagesMenu";

const CreatedCompanyPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="container container-m">
            <CompanyPagesMenu/>
            <h1 className="container__h">Личный кабинет компании</h1>
            <div className="container__inner">
                <div className="row">
                    <div className="col-md-3">
                        <p className="container-p container-p_wm">Название компании:</p>
                    </div>
                    <div className="col-md-9">
                        <p className="container-p">{authSlice.myCompanies.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="container-p container-p_wm">Описание:</p>
                    </div>
                    <div className="col-md-9">
                        <p className="container-p">
                            {authSlice.myCompanies.description}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="container-p container-p_wm">ИНН:</p>
                    </div>
                    <div className="col-md-9">
                        <p className="container-p">{authSlice.myCompanies.inn}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="container-p container-p_wm">Адрес главного офиса:</p>
                    </div>
                    <div className="col-md-9">
                        <p className="container-p">{authSlice.myCompanies.addressMainOffice}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="container-p container-p_wm">Номер телефона:</p>
                    </div>
                    <div className="col-md-9">
                        <p className="container-p">{authSlice.myCompanies.phone}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="container-p container-p_wm">Email:</p>
                    </div>
                    <div className="col-md-9">
                        <p className="container-p">{authSlice.myCompanies.email}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <a href="" className="main-btn">Редактировать</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatedCompanyPage;