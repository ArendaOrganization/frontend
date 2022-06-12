import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../../mainStyle.css";
import PagesManu from "../../Menus/PagesMenu/PagesManu";
import {
    createCompany, updateCompanyAddressInput,
    updateCompanyDescriptionInput, updateCompanyEmailInput, updateCompanyINNInput,
    updateCompanyNameInput, updateCompanyPhoneInput,
} from "../../../redux/reducers/authSlice";

const CreateCompanies = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="container container-m">
            <PagesManu/>
            <h1 className="container__h">Создание компании</h1>
            <div className="container__inner">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-row">
                            <label htmlFor="" className="form-label">Название компании *</label>
                            <input
                                type="text"
                                className="form-text"
                                placeholder="Название"
                                value={authSlice.currentCompanyNameInput}
                                onChange={(e) => {
                                    dispatch(updateCompanyNameInput(e.target.value))
                                }}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="" className="form-label">Описание</label>
                            <textarea
                                cols="30"
                                rows="10"
                                className="form-textarea"
                                placeholder="Описание"
                                value={authSlice.currentCompanyDescriptionInput}
                                onChange={(e) => {
                                    dispatch(updateCompanyDescriptionInput(e.target.value))
                                }}
                            ></textarea>
                        </div>
                        <div className="form-row">
                            <label htmlFor="" className="form-label">ИНН *</label>
                            <input
                                type="text"
                                className="form-text"
                                placeholder="ИНН"
                                value={authSlice.currentCompanyINNInput}
                                onChange={(e) => {
                                    dispatch(updateCompanyINNInput(e.target.value))
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-row">
                            <label htmlFor="" className="form-label">Адрес главного офиса *</label>
                            <input
                                type="text"
                                className="form-text"
                                placeholder="Адрес"
                                value={authSlice.currentCompanyAddressInput}
                                onChange={(e) => {
                                    dispatch(updateCompanyAddressInput(e.target.value))
                                }}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="" className="form-label">Телефон *</label>
                            <input
                                type="text"
                                className="form-text"
                                placeholder="Телефон"
                                value={authSlice.currentCompanyPhoneInput}
                                onChange={(e) => {
                                    dispatch(updateCompanyPhoneInput(e.target.value))
                                }}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="" className="form-label">Email *</label>
                            <input
                                type="text"
                                className="form-text"
                                placeholder="Email"
                                value={authSlice.currentCompanyEmailInput}
                                onChange={(e) => {
                                    dispatch(updateCompanyEmailInput(e.target.value))
                                }}
                            />
                        </div>
                        <div className="form-row">
                            <button
                                className="main-btn"
                                onClick={
                                    () => {
                                        dispatch(
                                            createCompany({
                                                name: authSlice.currentCompanyNameInput,
                                                description: authSlice.currentCompanyDescriptionInput,
                                                inn: authSlice.currentCompanyINNInput,
                                                addressMainOffice: authSlice.currentCompanyAddressInput,
                                                phone: authSlice.currentCompanyPhoneInput,
                                                email: authSlice.currentCompanyEmailInput
                                            }))
                                        navigate("../Companies", {replace: true})
                                    }
                                }
                            >Зарегестрировать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCompanies;