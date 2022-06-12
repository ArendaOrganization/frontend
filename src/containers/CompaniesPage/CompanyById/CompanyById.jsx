import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {getCompanyById} from "../../../redux/reducers/authSlice";

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
        <div></div>
    );
};

export default CompanyBiId;