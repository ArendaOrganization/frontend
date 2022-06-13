import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import {useEffect} from "react";
import {approveBid, disApproveBid, getAllCompanyBid, getCompanies} from "../../../redux/reducers/authSlice";

const BidElement = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllCompanyBid({}));
        dispatch(getCompanies({}));
    }, []);
    return (
        <div>
            {
                (authSlice.bidData.length === 0 || authSlice.myCompanies === null) ? "..."
                    : authSlice.bidData.map((elem) => {
                        if (authSlice.bidsFilter === "incoming" && elem.landlord.id !== authSlice.myCompanies.id) {
                            return ("");
                        }
                        if (authSlice.bidsFilter === "outgoing" && elem.tenant.id !== authSlice.myCompanies.id) {
                            return ("");
                        }
                        return (
                            <div className="request__block">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={"http://localhost:8081" + elem.premises.mainImg.downloadLink}
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
                                                <a
                                                    className="request__a"
                                                    onClick={() => {
                                                        navigate("../Place?elementId=" + elem.premises.id)
                                                    }}
                                                >{elem.premises.name}</a>
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
                                                    {elem.premises.coordinates.address}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="request__p">
                                                    <b>Арендодатель:</b>
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <a
                                                    className="request__a"
                                                    onClick={() => {
                                                        navigate("../CompanyBiId?elementId=" + elem.landlord.id)
                                                    }}
                                                >{elem.landlord.name}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="request__p">
                                                    <b>Арендатор:</b>
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <a
                                                    className="request__a"
                                                    onClick={() => {
                                                        navigate("../CompanyBiId?elementId=" + elem.tenant.id)
                                                    }}
                                                >{elem.tenant.name}</a>
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
                                        {
                                            (elem.landlord.id === authSlice.myCompanies.id && elem.status === "AWAITING")
                                                ? <div className="row">
                                                    <div className="col-md-6">
                                                        <p className="request__p">
                                                            <b>Назначить арендатором?</b>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="request__p">
                                                            <a
                                                                className="form-link"
                                                                onClick={() => {
                                                                    dispatch(approveBid({id: elem.id}))
                                                                    window.location.reload(false);
                                                                }}
                                                            >Да</a>
                                                            <a
                                                                className="form-link"
                                                                onClick={() => {
                                                                    dispatch(disApproveBid({id: elem.id}))
                                                                    window.location.reload(false);
                                                                }}
                                                            >Нет</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
            }
        </div>
    );
};

export default BidElement;