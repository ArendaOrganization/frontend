import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import {useEffect} from "react";
import axios from "axios";

const EmailVerification = () => {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const secondCode = searchParams.get("secondeCode");

    useEffect(() => {
        axios.get(`http://localhost:8081/user/verifyEmail?code=${code}&secondeCode=${secondCode}`);
    })

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">
                <div className="container container-sm">
                    <h1 className="container__h">Подтверждение почты</h1>
                    <div className="container__inner">
                        <form action="src/containers/AuthRegPage/EmailVerification/Verificatrion" className="main-form">
                            <p className="container_p">
                                Почта подтверждрена!
                            </p>
                        </form>
                    </div>
                </div>

                <div className="menu-right">
                    <a
                        className="menu-right__link"
                        onClick={() => {navigate("../",{replace: true})}}
                    >Войти</a>
                </div>
            </div>
        </div>
    );
};

export default EmailVerification;