import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import CompanyPagesMenu from "../Menus/CompanyPagesManu/CompanyPagesMenu";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import {useEffect} from "react";
import {getAllContracts} from "../../redux/reducers/authSlice";

const Documents = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllContracts({}));
    }, [])

    return (
        <div className="main">
            <LeftMenu/>
            {
                authSlice.allContracts.length === 0
                    ? "..."
                    : <div className="main__inner" id="main__inner">
                        <div className="container container-m">
                            <CompanyPagesMenu/>
                            <h1 className="container__h">Документы</h1>
                            <div className="container__inner requests">
                                <div className="row mb20">
                                    <div className="col-md-4">
                                        <a
                                            className="main-btn"
                                            onClick={() => {
                                                navigate("../DocumentCreator", {replace: true})
                                            }}
                                        >Добавить документ</a>
                                    </div>
                                </div>
                                {
                                    authSlice.allContracts.map((elem) => {
                                        return (
                                            <div className="request__block">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p className="request__p">
                                                                    <b>Название документа:</b>
                                                                </p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <a
                                                                    className="request__a"
                                                                    onClick={
                                                                        () => {
                                                                            navigate("../OneDocument" + "?elementId=" + elem.id, {replace: true})
                                                                        }
                                                                    }
                                                                >
                                                                    <a className="form-link">{elem.name}</a>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p className="request__p">
                                                                    <b>Статус:</b>
                                                                </p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="request__p">{elem.status}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p className="request__p">
                                                                    <b>Арендодатель:</b>
                                                                </p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="request__p">
                                                                    <a
                                                                        onClick={() => {navigate("../Companies?elementId="+elem.landlord.id)}}
                                                                        className="form-link">{elem.landlord.name}</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p className="request__p">
                                                                    <b>Арендатор:</b>
                                                                </p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="request__p">
                                                                    <a
                                                                        onClick={() => {navigate("../Companies?elementId="+elem.tenant.id)}}
                                                                        className="form-link"
                                                                    >{elem.tenant.name}</a>
                                                                </p>
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
            }
        </div>
    );
};

export default Documents;