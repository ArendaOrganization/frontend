import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import basicData from "../initalState";
import AuthService from "../../services/auth.service";
import {setMessage} from "./messageAuthSlice";
import mapService from "../../services/map.service";
import companyService from "../../services/companies.service";
import premiseService from "../../services/premise.service";
import axios from "axios";
import bidService from "../../services/bid.service";
import docService from "../../services/doc.service";
import messengerService from "../../services/messenger.service";

const user = JSON.parse(localStorage.getItem("user"));
const authError = JSON.parse(localStorage.getItem("authError"));

const headers = {
    'Authorization': user ? user.token : "",
};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}, thunkAPI) => {
        try {
            const data = await AuthService.login(email, password);
            return {user: data};
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});

export const register = createAsyncThunk(
    "auth/register",
    async ({name, surname, patronymic, email, mobile, password}, thunkAPI) => {
        try {
            const response = await AuthService.register(name, surname, patronymic, email, mobile, password);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const changePassword = createAsyncThunk(
    "auth/changePassword",
    async ({email}, thunkAPI) => {
        try {
            const response = await AuthService.sendEmailToChangePassword(email);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const sendNewPasswordToBackEnd = createAsyncThunk(
    "auth/changePassword",
    async ({password, code, secondCode}, thunkAPI) => {
        try {
            const response = await AuthService.sendNewPassword(password, code, secondCode);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

/*Map*/

export const getAllMapData = createAsyncThunk(
    "auth/getAllMapData",
    async ({}, thunkAPI) => {
        try {
            const mapData = await mapService.getMapData();
            return mapData;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getMapElemData = createAsyncThunk(
    "auth/mapElem",
    async ({id}, thunkAPI) => {
        try {
            const mapElemData = await mapService.getMapElemData(id);
            return mapElemData;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getAddressByCoords = createAsyncThunk(
    "auth/mapAddressGeocodeByCoords",
    async ({coords}) => {
        try {
            return await mapService.getAddressByCoords(coords);
        } catch (err) {
            console.log("ERROR in getAddressByCoords");
        }
    }
);
/*//Old
export const postRentAddress = createAsyncThunk(
    "auth/postRentAddress",
    async ({address, latitude, longitude}, thunkAPI) => {
        try {
            let postRentDataResp = await mapService.postRentAddress(address, latitude, longitude);
            const mapData = await mapService.getMapData();
            thunkAPI.dispatch(setMapData(mapData));
            return postRentDataResp;
        } catch (err) {
            console.log("ERROR in getAddressByCoords");
        }
    }
);*/
/*Companies*/

export const getCompanies = createAsyncThunk(
    "auth/getCompanies",
    async ({}, thunkAPI) => {
        try {
            const response = await companyService.getMyCompanies();
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
)

export const createCompany = createAsyncThunk(
    "auth/createCompany",
    async ({name, description, inn, addressMainOffice, phone, email}, thunkAPI) => {
        try {
            const response = await companyService.makeCompanies(name, description, inn, addressMainOffice, phone, email);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getCompanyById = createAsyncThunk(
    "auth/getCompanyById",
    async ({id}) => {
        try {
            const response = await companyService.getMyCompanyById(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
)
/*Premises*/

export const postPremise = createAsyncThunk(
    "auth/postPromise",
    async ({
               name, description, squareMetersNumber, numberOfFloor, hasInternet, privatePremises,
               phone, costPerMonth, address, latitude, longitude, mainImage, planImg, imqsImg
           }, thunkAPI) => {
        try {
            const response = await premiseService.postPremise(name, description, squareMetersNumber, numberOfFloor,
                hasInternet, privatePremises, phone, costPerMonth, address, latitude, longitude);
            thunkAPI.dispatch(postImgForPremise({
                id: response.id,
                mainImage,
                planImg,
                imqsImg
            }));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const postImgForPremise = createAsyncThunk(
    "auth/postPromise",
    async ({id, mainImage, planImg, imqsImg}, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.append("mainImg", mainImage);
            formData.append("plan", planImg);
            formData.append("imgs", imqsImg);
            console.log(imqsImg);
            /*imqsImg.forEach(img => {
                formData.append("imgs", img)
            })*/
            for (let i = 0; i < imqsImg.length; i++) {
                formData.append("imgs", imqsImg[i]);
            }
            //const response = await premiseService.postPremiseImg(id);
            const response = await axios({
                method: "post",
                url: `http://localhost:8081/premises/addPremisesImg?premisesId=${id}`,
                data: formData,
                headers: {
                    ...headers
                },
            });
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const getPremise = createAsyncThunk(
    "auth/getPremise",
    async ({id}) => {
        try {
            const response = await premiseService.getPremise(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const getAllPremises = createAsyncThunk(
    "auth/getAllPremises",
    async ({}) => {
        try {
            const response = await premiseService.getAllPremises();
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

/* Bid */

export const getAllCompanyBid = createAsyncThunk(
    "auth/getAllCompanyBid",
    async ({}) => {
        try {
            const response = await bidService.getAllCompanyBid();
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const makeNewBid = createAsyncThunk(
    "auth/makeNewBid",
    async ({id}) => {
        try {
            const response = await bidService.makeNewBid(id);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const approveBid = createAsyncThunk(
    "auth/approveBid",
    async ({id}) => {
        try {
            const response = await bidService.approveBid(id);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const disApproveBid = createAsyncThunk(
    "auth/approveBid",
    async ({id}) => {
        try {
            const response = await bidService.disApproveBid(id);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

/* Documents */

export const getPremisesInDocPage = createAsyncThunk(
    "auth/getPremisesInDocPage",
    async ({}) => {
        try {
            const response = await docService.getPremisesInDocPage();
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const getPremiseTenantsData = createAsyncThunk(
    "auth/getPremiseTenantsData",
    async ({id}) => {
        try {
            const response = await docService.getPremiseTenantsData(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const postDocument = createAsyncThunk(
    "auth/postDocument",
    async ({name, theme, description, tenantId, premisesId, document}, thunkAPI) => {
        try {
            const response = await docService.postDocument(name, theme, description, tenantId, premisesId);
            thunkAPI.dispatch(postFileForDocument({document, id: response.id}));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const postFileForDocument = createAsyncThunk(
    "auth/postPromise",
    async ({document, id}) => {
        try {
            const formData = new FormData();
            formData.append("document", document);
            const response = await axios({
                method: "post",
                url: `http://localhost:8081/contract/makeContractWithDocument?contractId=${id}`,
                data: formData,
                headers: {
                    ...headers
                },
            });
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const getAllContracts = createAsyncThunk(
    "auth/getAllContracts",
    async ({}, thunkAPI) => {
        try {
            const response = await docService.getAllContracts();
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const getCurrentContract = createAsyncThunk(
    "auth/getCurrentContract",
    async ({id}) => {
        try {
            const response = await docService.getCurrentContract(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const downloadDocument = createAsyncThunk(
    "auth/downloadDocument",
    async ({id, documentName}) => {
        try {
            axios({
                url: `http://localhost:8081/contract/downloadDocument?contractId=${id}`,
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', documentName + ".pdf");
                document.body.appendChild(link);
                link.click();
            });
            //const response = await docService.downloadDocument(id);
            return "response";
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const approveContract = createAsyncThunk(
    "auth/approveContract",
    async ({id}) => {
        try {
            const response = await docService.approveContract(id);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

export const disApproveContract = createAsyncThunk(
    "auth/disApproveContract",
    async ({id}) => {
        try {
            const response = await docService.disApproveContract(id);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

/*Messenger*/
export const getAllMessagesByCompanyId = createAsyncThunk(
    "auth/getAllMessagesByCompanyId",
    async ({id}) => {
        try {
            const response = await messengerService.getAllMessagesByCompanyId(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
)

export const getAllDialogs = createAsyncThunk(
    "auth/getAllDialogs",
    async ({}) => {
        try {
            const response = await messengerService.getAllDialogs();
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
)

export const getAllMessages = createAsyncThunk(
    "auth/getAllMessages",
    async ({id}) => {
        try {
            const response = await messengerService.getAllMessages(id);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
)

const initialState = user
    ? {
        isLoggedIn: true, user, authError: false, ...basicData
    }
    : {
        isLoggedIn: false, user: null, authError, ...basicData
    };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateNameInput(state, action) {
            state.currentNameInput = action.payload;
        },
        updateSurnameInput(state, action) {
            state.currentSurnameInput = action.payload;
        },
        updatePatronymicInput(state, action) {
            state.currentPatronymicInput = action.payload;
        },
        updateEmailInput(state, action) {
            state.currentEmailInput = action.payload;
        },
        updateMobileInput(state, action) {
            state.currentMobileInput = action.payload;
        },
        updatePasswordInput(state, action) {
            state.currentPasswordInput = action.payload;
        },
        updateRegPasswordChecker(state, action) {
            state.regPasswordChecker = action.payload;
        },
        updateRegOrLogVisibility(state) {
            state.regOrLogVisibility = !state.regOrLogVisibility;
        },
        updateCurrentOnClickCoords(state, action) {
            state.currentOnClickCoords = action.payload;
        },
        leftMenuToggler(state) {
            state.leftMenuToggle = !state.leftMenuToggle;
        },
        updateCompanyNameInput(state, action) {
            state.currentCompanyNameInput = action.payload;
        },
        updateCompanyDescriptionInput(state, action) {
            state.currentCompanyDescriptionInput = action.payload;
        },
        updateCompanyINNInput(state, action) {
            state.currentCompanyINNInput = action.payload;
        },
        updateCompanyAddressInput(state, action) {
            state.currentCompanyAddressInput = action.payload;
        },
        updateCompanyPhoneInput(state, action) {
            state.currentCompanyPhoneInput = action.payload;
        },
        updateCompanyEmailInput(state, action) {
            state.currentCompanyEmailInput = action.payload;
        },
        updateCurrentPremiseName(state, action) {
            state.currentPremiseName = action.payload;
        },
        updateCurrentPremiseArea(state, action) {
            state.currentPremiseArea = action.payload;
        },
        updateCurrentPremiseFloor(state, action) {
            state.currentPremiseFloor = action.payload;
        },
        updateCurrentPremiseDescription(state, action) {
            state.currentPremiseDescription = action.payload;
        },
        updateCurrentPremiseCost(state, action) {
            state.currentPremiseCost = action.payload;
        },
        updateCurrentPremisePhone(state, action) {
            state.currentPremisePhone = action.payload;
        },
        updatePremiseHasInternet(state, action) {
            state.premiseHasInternet = action.payload;
        },
        updateIsPremisePrivate(state, action) {
            state.isPremisePrivate = action.payload;
        },
        toggleIsMapOpenOnCreatePage(state, action) {
            state.isMapOpened = action.payload;
        },
        updateEmailForPasswordChangeInput(state, action) {
            state.emailForPasswordChangeInput = action.payload;
        },
        updatePasswordToChangePasswordInput(state, action) {
            state.passwordToChangePassword = action.payload;
        },
        updatePasswordCheckerToChangePasswordInput(state, action) {
            state.passwordCheckerToChangePassword = action.payload;
        },
        addMainImageToState(state, action) {
            state.mainImg = action.payload;
        },
        addPlanImageToState(state, action) {
            state.plan = action.payload;
        },
        addImgsToState(state, action) {
            state.imgs = action.payload;
        },
        openOrCloseMapSlider(state) {
            state.isMapMenuVisible = !state.isMapMenuVisible;
        },
        openMapSlider(state) {
            state.isMapMenuVisible = true;
        },
        updatePremisesFilter(state, action) {
            state.premisesFilter = action.payload;
        },
        updateBidFilter(state, action) {
            state.bidsFilter = action.payload;
        },
        cleanCurrentPremiseTenantsData(state) {
            state.currentPremiseTenantsData = [];
        },
        updateCurrentChosenTenantId(state, action) {
            state.currentChosenTenantId = action.payload;
        },
        updateCurrentChosenPremiseId(state, action) {
            state.currentChosenPremiseId = action.payload;
        },
        updateCurrentDocumentNameInput(state, action) {
            state.currentDocumentNameInput = action.payload;
        },
        updateCurrentDocumentThemeInput(state, action) {
            state.currentDocumentThemeInput = action.payload;
        },
        updateCurrentDocumentDescriptionInput(state, action) {
            state.currentDocumentDescriptionInput = action.payload;
        },
        addDocumentFileToState(state, action) {
            state.currentDocumentFile = action.payload;
        },
        openQuestionById(state, action) {
            if (state.whichQuestionIsOpened === action.payload) {
                state.whichQuestionIsOpened = "";
            } else {
                state.whichQuestionIsOpened = action.payload;
            }
        },
        updateCurrentDialogCompany(state, action) {
            state.currentDialogCompany = action.payload;
        },
        updateCurrentMessageTextInput(state, action) {
            state.currentMessageTextInput = action.payload;
        },
        updateCurrentDialogId(state, action) {
            state.currentDialogId = action.payload;
        },
        updateCurrentDialogAuthorId(state, action) {
            state.companyAuthorId = action.payload;
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.isAuthDataWrong = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [getAddressByCoords.fulfilled]: (state, action) => {
            state.currentOnClickAddress = action.payload;
        },
        [getAddressByCoords.rejected]: (state, action) => {
            state.currentOnClickAddress = "ERROR";
        },
        [getCompanies.fulfilled]: (state, action) => {
            if (action.payload.id !== -1) {
                state.myCompanies = action.payload;
            }
        },
        [getCompanyById.fulfilled]: (state, action) => {
            state.companyById = action.payload;
        },
        [getAllMessagesByCompanyId.fulfilled]: (state, action) => {
            state.currentDialogMessagesFromPlace = action.payload;
        },
        [getAllDialogs.fulfilled]: (state, action) => {
            state.AllDialogs = action.payload;
        },
        [getAllMessages.fulfilled]: (state, action) => {
            state.currentDialogMessages = action.payload;
        },
        [getAllMapData.fulfilled]: (state, action) => {
            state.mapAll = action.payload;
        },
        [getMapElemData.fulfilled]: (state, action) => {
            state.mapElem = action.payload;
        },
        [getAllCompanyBid.fulfilled]: (state, action) => {
            state.bidData = action.payload;
        },
        [getPremise.fulfilled]: (state, action) => {
            state.currentPlace = action.payload;
        },
        [getAllPremises.fulfilled]: (state, action) => {
            state.allPremises = action.payload;
        },
        [getPremisesInDocPage.fulfilled]: (state, action) => {
            state.docPremisesData = action.payload;
        },
        [getPremiseTenantsData.fulfilled]: (state, action) => {
            state.currentPremiseTenantsData = action.payload;
        },
        [getAllContracts.fulfilled]: (state, action) => {
            state.allContracts = action.payload;
        },
        [getCurrentContract.fulfilled]: (state, action) => {
            state.currentContract = action.payload;
        },
    },
})

export const {
    updateNameInput,
    updateSurnameInput,
    updatePatronymicInput,
    updateEmailInput,
    updateMobileInput,
    updatePasswordInput,
    updateRegPasswordChecker,
    updateRegOrLogVisibility,
    leftMenuToggler,
    updateCurrentOnClickCoords,
    updateCompanyNameInput,
    updateCompanyDescriptionInput,
    updateCompanyINNInput,
    updateCompanyAddressInput,
    updateCompanyPhoneInput,
    updateCompanyEmailInput,
    updateCurrentPremiseName,
    updateCurrentPremiseArea,
    updateCurrentPremiseFloor,
    updateCurrentPremiseDescription,
    updateCurrentPremiseCost,
    updateCurrentPremisePhone,
    updatePremiseHasInternet,
    updateIsPremisePrivate,
    toggleIsMapOpenOnCreatePage,
    updateEmailForPasswordChangeInput,
    updatePasswordToChangePasswordInput,
    updatePasswordCheckerToChangePasswordInput,
    addMainImageToState,
    addPlanImageToState,
    addImgsToState,
    openOrCloseMapSlider,
    openMapSlider,
    updatePremisesFilter,
    updateBidFilter,
    cleanCurrentPremiseTenantsData,
    updateCurrentChosenTenantId,
    updateCurrentDocumentNameInput,
    updateCurrentDocumentThemeInput,
    updateCurrentDocumentDescriptionInput,
    updateCurrentChosenPremiseId,
    addDocumentFileToState,
    openQuestionById,
    updateCurrentDialogCompany,
    updateCurrentMessageTextInput,
    updateCurrentDialogAuthorId,
    updateCurrentDialogId
} = authSlice.actions
export default authSlice.reducer