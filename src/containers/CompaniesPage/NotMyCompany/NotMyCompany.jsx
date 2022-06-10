import {useDispatch, useSelector} from "react-redux";
import "../../mainStyle.css";
import {useNavigate} from "react-router";
import MenuRightLogined from "../../Menus/MenuRightLogined/MenuRightLogined";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";
import PagesManu from "../../Menus/PagesMenu/PagesManu";
import examplePlaceImg from "../../img/example-place.png"

const NotMyCompany = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const companyById = JSON.parse(localStorage.getItem("companyById"));

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">

                <div className="container container-m">
                    <PagesManu/>
                    <h1 className="container__h">Компания</h1>
                    <div className="container__inner">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="page-avatar">
                                    <img src={examplePlaceImg} alt="" className="page-avatar__img"/>
                                        <a href="" className="main-btn">Написать</a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="container-p container-p_wm">Название компании:</p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="container-p">{companyById.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="container-p container-p_wm">Описание:</p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="container-p">
                                            {companyById.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="container-p container-p_wm">ИНН:</p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="container-p">{companyById.inn}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="container-p container-p_wm">Адрес главного офиса:</p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="container-p">{companyById.addressMainOffice}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="container-p container-p_wm">Номер телефона:</p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="container-p">{companyById.phone}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="container-p container-p_wm">Email:</p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="container-p">{companyById.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuRightLogined/>
            </div>
        </div>
    );
};

export default NotMyCompany;