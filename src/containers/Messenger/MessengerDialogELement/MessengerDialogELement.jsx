import {useDispatch, useSelector} from "react-redux";
import "../../mainStyle.css";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {getAllDialogs} from "../../../redux/reducers/authSlice";
const MessengerDialogElement = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllDialogs({}));
    },[])

    return (
        <div>
            {
                authSlice.AllDialogs === null
                    ? "..."
                    : <div className="messenger-list__item">
                        <div className="messenger-list__avatar">
                            <img src="img/user.png" alt=""/>
                        </div>
                        <div className="messenger-list__info">
                            <p className="messenger-list__username">
                                Имя пользователя
                            </p>
                            <p className="messenger-list__text">
                                Есть много вариантов Lorem...
                            </p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MessengerDialogElement;