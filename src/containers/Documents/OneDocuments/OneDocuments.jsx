import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import MenuRightLogined from "../../Menus/MenuRightLogined/MenuRightLogined";
import CompanyPagesMenu from "../../Menus/CompanyPagesManu/CompanyPagesMenu";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {
    approveContract,
    disApproveContract,
    downloadDocument,
    getCurrentContract
} from "../../../redux/reducers/authSlice";

const OneDocument = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const elementId = searchParams.get("elementId");

    useEffect(() => {
        dispatch(getCurrentContract({id: elementId}))
    }, [])

    return (
        <div className="main">
            <LeftMenu/>
            {
                authSlice.currentContract === ""
                    ? ""
                    : <div className="main__inner" id="main__inner">
                        <div className="container container-m">
                            <CompanyPagesMenu/>
                            <h1 className="container__h">Документ</h1>
                            <div className="container__inner requests">
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
                                                    <p className="request__p">
                                                        <a href="" className="form-link">
                                                            {authSlice.currentContract.name}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <b>Тема:</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        {authSlice.currentContract.theme}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <b>Описание:</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        {authSlice.currentContract.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <b>Помещение:</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <a className="form-link">
                                                            {authSlice.currentContract.premises.name}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <b>Статус:</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <a href="" className="form-link">
                                                            <a href="" className="form-link">
                                                                {authSlice.currentContract.status}
                                                            </a>
                                                        </a>
                                                    </p>
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
                                                        <a href="" className="form-link">
                                                            <a
                                                                onClick={() => {
                                                                    navigate("../CompanyBiId?elementId="+authSlice.currentContract.landlord.id)
                                                                }}
                                                                className="form-link"
                                                            >
                                                                {authSlice.currentContract.landlord.name}
                                                            </a>
                                                        </a>
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
                                                        <a href="" className="form-link">
                                                            <a
                                                                onClick={() => {
                                                                    navigate("../CompanyBiId?elementId="+authSlice.currentContract.tenant.id)
                                                                }}
                                                                className="form-link"
                                                            >
                                                                {authSlice.currentContract.tenant.name}
                                                            </a>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <b>Документ:</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <a
                                                            className="form-link"
                                                            onClick={() => {
                                                                dispatch(downloadDocument({
                                                                    id: authSlice.currentContract.id,
                                                                    documentName: authSlice.currentContract.documentName
                                                                }))
                                                            }}
                                                        >
                                                            Скачать
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <b>Действия:</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="request__p">
                                                        <a
                                                            className="form-link"
                                                            onClick={
                                                                () => {
                                                                    dispatch(approveContract({id: authSlice.currentContract.id}))
                                                                    setTimeout(() => {
                                                                        dispatch(getCurrentContract({id: elementId}))
                                                                    },500);
                                                                }
                                                            }
                                                        >Подписать</a>
                                                        /
                                                        <a
                                                            className="form-link"
                                                            onClick={
                                                                () => {
                                                                    dispatch(disApproveContract({id: authSlice.currentContract.id}))
                                                                    setTimeout(() => {
                                                                        dispatch(getCurrentContract({id: elementId}))
                                                                    },500);
                                                                }
                                                            }
                                                        >Отказаться</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MenuRightLogined/>
                    </div>
            }
        </div>
    );
};

export default OneDocument;