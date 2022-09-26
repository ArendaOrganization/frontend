import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import MenuRightLogined from "../../Menus/MenuRightLogined/MenuRightLogined";
import CompanyPagesMenu from "../../Menus/CompanyPagesManu/CompanyPagesMenu";
import LeftMenu from "../../Menus/MenuLeft/LeftMenu";
import {useEffect} from "react";
import {
    addDocumentFileToState, cleanCurrentPremiseTenantsData, getAllContracts, getPremisesInDocPage,
    getPremiseTenantsData, postDocument, updateCurrentChosenPremiseId,
    updateCurrentChosenTenantId, updateCurrentDocumentDescriptionInput,
    updateCurrentDocumentNameInput, updateCurrentDocumentThemeInput,
} from "../../../redux/reducers/authSlice";

const DocumentCreator = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPremisesInDocPage({}));
    }, [])

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">

                <div className="container container-m">
                    <CompanyPagesMenu/>
                    <h1 className="container__h">Создание документа</h1>
                    <div className="container__inner requests">
                        <div className="request__block">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <label htmlFor="" className="form-label">Название*:</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Название"
                                            value={authSlice.currentDocumentNameInput}
                                            onChange={(e) => {
                                                dispatch(updateCurrentDocumentNameInput(e.target.value))
                                            }}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="" className="form-label">Тема:</label>
                                        <input
                                            type="text"
                                            className="form-text"
                                            placeholder="Тема"
                                            value={authSlice.currentDocumentThemeInput}
                                            onChange={(e) => {
                                                dispatch(updateCurrentDocumentThemeInput(e.target.value))
                                            }}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="" className="form-label">Описание:</label>
                                        <textarea
                                            placeholder="Описание"
                                            cols="30"
                                            rows="10"
                                            className="form-textarea"
                                            value={authSlice.currentDocumentDescriptionInput}
                                            onChange={(e) => {
                                                dispatch(updateCurrentDocumentDescriptionInput(e.target.value))
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="form-row">
                                        <a
                                            className="main-btn"
                                            onClick={() => {
                                                dispatch(postDocument(
                                                    {
                                                        name: authSlice.currentDocumentNameInput,
                                                        theme: authSlice.currentDocumentThemeInput,
                                                        description: authSlice.currentDocumentDescriptionInput,
                                                        tenantId: authSlice.currentChosenTenantId,
                                                        premisesId: authSlice.currentChosenPremiseId,
                                                        document: authSlice.currentDocumentFile,
                                                    }

                                                ));
                                                dispatch(getAllContracts({}));
                                                setTimeout(() => {
                                                    navigate("../Documents", {replace: true})
                                                },500);
                                            }}
                                        >Создать и отправить</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-row">
                                        <label className="form-label">Арендодатель:</label>
                                        <p className="form-p">Ваша компания</p>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="" className="form-label">Помещение:</label>
                                        <select
                                            className="form-select"
                                            onChange={(e) => {
                                                if (e.target.value === "empty") {
                                                    dispatch(cleanCurrentPremiseTenantsData())
                                                    dispatch(updateCurrentChosenPremiseId(""))
                                                    dispatch(updateCurrentChosenTenantId(""))
                                                } else {
                                                    dispatch(updateCurrentChosenPremiseId(e.target.value))
                                                    dispatch(getPremiseTenantsData({id: e.target.value}))
                                                }
                                            }}
                                        >
                                            <option value="empty">По умолчанию</option>
                                            {
                                                authSlice.docPremisesData.length === 0
                                                    ? ""
                                                    : authSlice.docPremisesData.map((elem) => {
                                                        return (
                                                            <option value={elem.id}>{elem.name}</option>
                                                        );
                                                    })
                                            }
                                        </select>
                                    </div>
                                    {
                                        authSlice.currentPremiseTenantsData.length === 0
                                            ? ""
                                            : <div className="form-row">
                                                <label htmlFor="" className="form-label">Арендатор:</label>
                                                <select
                                                    className="form-select"
                                                    onChange={(e) => {
                                                        if (e.target.value === "empty") {
                                                            dispatch(updateCurrentChosenTenantId(""))
                                                        } else {
                                                            dispatch(updateCurrentChosenTenantId(e.target.value))
                                                        }
                                                    }}
                                                >
                                                    <option value="empty">По умолчанию</option>
                                                    {
                                                        authSlice.currentPremiseTenantsData.length === 0
                                                            ? ""
                                                            : authSlice.currentPremiseTenantsData.map((elem) => {
                                                                return (
                                                                    <option value={elem.id}>{elem.name}</option>
                                                                );
                                                            })
                                                    }
                                                </select>
                                            </div>
                                    }
                                    <div className="form-row">
                                        <label htmlFor="" className="form-label">Документ:</label>
                                        <input
                                            type="file"
                                            onChange={
                                                (e) => {
                                                    dispatch(addDocumentFileToState(e.target.files[0]));
                                                }
                                            }
                                        />
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

export default DocumentCreator;