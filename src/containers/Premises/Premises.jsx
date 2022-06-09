import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../mainStyle.css";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import CompanyPagesMenu from "../Menus/CompanyPagesManu/CompanyPagesMenu";
import {getCompanyById, getPremise, updatePremisesFilter} from "../../redux/reducers/authSlice";

const PremisesPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-m">
                    <CompanyPagesMenu/>
                    <h1 className="container__h">Помещения</h1>
                    <div className="container__inner requests">
                        <div className="row mb20">
                            <div className="col-md-4">
                                <a
                                    className="main-btn"
                                    onClick={
                                        () => {
                                            navigate("../CreatePremise", {replace: true})
                                        }
                                    }
                                >Добавить помещение</a>
                            </div>
                        </div>
                        <div className="filters">
                            <select
                                className="filter"
                                onChange={(e) => {dispatch(updatePremisesFilter(e.target.value))}}
                            >
                                <option value="all">Все</option>
                                <option value="mine">Мои</option>
                                <option value="rented">Арендуемые мной</option>
                            </select>
                        </div>
                        {
                            authSlice.allPremises === null
                                ? ""
                                : authSlice.allPremises.map((elem) => {
                                    if (authSlice.premisesFilter === "mine" && elem.company.id !== authSlice.myCompanies.id) {
                                        return ("");
                                    }
                                    if (authSlice.premisesFilter === "rented" && elem.tenant?.id !== authSlice.myCompanies.id) {
                                        return ("");
                                    }
                                    return (
                                        <div
                                            className="request__block"
                                            onClick={
                                                () => {
                                                    dispatch(getPremise({id: elem.id}));
                                                    navigate("../Place", {replace: true});
                                                }
                                            }
                                        >
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img
                                                        src={`http://localhost:8081${elem.mainImg.downloadLink}`}
                                                        className="request__img"
                                                    />
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p className="request__p">
                                                                <b>Название помещения:</b>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="request__p">
                                                                {elem.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p className="request__p">
                                                                <b>Адрес помещения:</b>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="request__p">
                                                                {elem.coordinates.address}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p className="request__p">
                                                                <b>Количество м²:</b>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="request__p">
                                                                {elem.squareMetersNumber}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p className="request__p">
                                                                <b>Владелец:</b>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <a
                                                                className="request__a"
                                                                onClick={
                                                                    () => {
                                                                        dispatch(getCompanyById({id: elem.company.id}));
                                                                        navigate("../NotMyCompany", {replace: true});
                                                                    }
                                                                }
                                                            >
                                                                {elem.company.name}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                        }
                    </div>
                </div>
                <MenuRightLogined/>
            </div>
        </div>
    );
};

export default PremisesPage;