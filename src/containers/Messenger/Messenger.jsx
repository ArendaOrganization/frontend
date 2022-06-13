import {useDispatch, useSelector} from "react-redux";
import "../mainStyle.css";
import {useNavigate} from "react-router";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import PagesManu from "../Menus/PagesMenu/PagesManu";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import MessengerDialogElement from "./MessengerDialogELement/MessengerDialogELement";
import dialogLogo from "../Menus/img/user.png";
import {useEffect} from "react";
import {connect, sendMessage} from "../../webSocket/sokcet";
import {useSearchParams} from "react-router-dom";
import {updateCurrentMessageTextInput} from "../../redux/reducers/authSlice";

const Messenger = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const elementId = searchParams.get("elementId");

    useEffect(() => {
        connect(elementId);
    },[])

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-m">
                    <PagesManu/>
                    <h1 className="container__h">Мои сообщения</h1>
                    <div className="container__inner messenger">
                        <div className="messenger-list">
                            <MessengerDialogElement/>
                        </div>
                        <div className="messenger__right">
                            <div className="dialog">
                                <div className="dialog__header">
                                    <div className="dialog__avatar">
                                        <img src={dialogLogo} alt=""/>
                                    </div>
                                    <div className="dialog__username">
                                        <p>{authSlice.currentDialogCompany}</p>
                                    </div>
                                </div>
                                <div className="dialog__center">
                                    <div className="dialog__center-inner">
                                        <div className="dialog__answer">
                                            <p>Ответ
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__user-message">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__answer">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__user-message">
                                            <p>Ответ
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__answer">
                                            <p>Ответ
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__user-message">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__answer">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__user-message">
                                            <p>Ответ
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__answer">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__user-message">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__answer">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__user-message">
                                            <p>Ответ
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__answer">
                                            <p>
                                                <img src="img/main.png" alt="" className="dialog__photo"/>
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                        <div className="dialog__user-message">
                                            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                                <span className="time">05:35</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dialog__form">
                                    <div className="dialog__form-left">
                                        <textarea
                                            cols="30"
                                            rows="10"
                                            className="dialog__textarea"
                                            onChange={(e) => {
                                                dispatch(updateCurrentMessageTextInput(e.target.value));
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="dialog__form-right">
                                        <label htmlFor="" className="dialog__file">
                                            <input type="file" className="dialog__file-input"/>
                                        </label>
                                        <button
                                            className="dialog__send"
                                            onClick={
                                                () => {
                                                    sendMessage({
                                                            messages: authSlice.currentMessageTextInput,
                                                            dialogId: authSlice.currentDialogId,
                                                            companyId: authSlice.companyAuthorId
                                                        }
                                                    )
                                                }
                                            }
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuRightLogined/>
            </div>
        </div>
    );
};

export default Messenger;