import {useDispatch, useSelector} from "react-redux";
import "../../mainStyle.css";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {
    getAllDialogs,
    getAllMessages,
    updateCurrentDialogAuthorId,
    updateCurrentDialogCompany,
    updateCurrentDialogId
} from "../../../redux/reducers/authSlice";
import dialogLogo from "../../Menus/img/user.png";

const MessengerDialogElement = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllDialogs({}));
    }, [])

    return (
        <div>
            {
                authSlice.AllDialogs === null
                    ? "..."
                    : authSlice.AllDialogs.map((elem) => {
                        return (
                            <div
                                className="messenger-list__item"
                                onClick={
                                    () => {
                                        dispatch(getAllMessages({id: elem.id}))
                                        dispatch(updateCurrentDialogCompany(elem.name))
                                        dispatch(updateCurrentDialogId(elem.id))
                                        dispatch(updateCurrentDialogAuthorId(elem.companyAuthorId))
                                    }
                                }
                            >
                                <div className="messenger-list__avatar">
                                    <img src={dialogLogo} alt=""/>
                                </div>
                                <div className="messenger-list__info">
                                    <p className="messenger-list__username">
                                        {elem.name}
                                    </p>
                                    {/*<p className="messenger-list__text">
                                        Есть много вариантов Lorem...
                                    </p>*/}
                                </div>
                            </div>
                        );
                    })
            }
        </div>
    );
};

export default MessengerDialogElement;