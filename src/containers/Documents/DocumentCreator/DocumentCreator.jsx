import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

const DocumentCreator = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            Docs
        </div>
    );
};

export default DocumentCreator;