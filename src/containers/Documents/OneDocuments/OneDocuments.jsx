import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

const OneDocument = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            Docs
        </div>
    );
};

export default OneDocument;