import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../mainStyle.css";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import CompanyPagesMenu from "../Menus/CompanyPagesManu/CompanyPagesMenu";
import {useEffect} from "react";
import {getAllCompanyBid, updateBidFilter} from "../../redux/reducers/authSlice";
import BidElement from "./BidELement/BIdElement";

const Bid = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllCompanyBid({}));
    },[]);

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">

                <div className="container container-m">
                    <CompanyPagesMenu/>
                    <h1 className="container__h">Заявки по аренде</h1>
                    <div className="container__inner requests">
                        <div className="filters">
                            <select
                                className="filter"
                                onChange={(e) => {dispatch(updateBidFilter(e.target.value))}}
                            >
                                <option value="all">Все</option>
                                <option value="incoming">Входящие</option>
                                <option value="outgoing">Исходящие</option>
                            </select>
                        </div>
                        <BidElement/>
                    </div>
                </div>
                <MenuRightLogined/>
            </div>
        </div>
    );
};

export default Bid;