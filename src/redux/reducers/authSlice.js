import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import basicData from "../initalState";
import AuthService from "../../services/auth.service";
import {setMessage} from "./messageAuthSlice";
import mapService from "../../services/map.service";
import companyService from "../../services/companies.service";
import premiseService from "../../services/premise.service";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const authError = JSON.parse(localStorage.getItem("authError"));
const mapAll = JSON.parse(localStorage.getItem("mapAll"));
const mapElem = JSON.parse(localStorage.getItem("mapElem"));
const myCompanies = JSON.parse(localStorage.getItem("myCompanies"));
const currentPlace = JSON.parse(localStorage.getItem("currentPlace"));

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
    "auth/mapAllData",
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
            thunkAPI.dispatch(setMapElemData(mapElemData));
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
/*Messenger*/
export const getAllMessages = createAsyncThunk(
    "auth/getMessages",
    async ({}, thunkAPI) => {
        try {
            const response = await mapService.getAllMessages();
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
)
/*Companies*/

export const getCompanies = createAsyncThunk(
    "auth/getCompanies",
    async ({}, thunkAPI) => {
        try {
            const response = await companyService.getMyCompanies();
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
)

export const createCompany = createAsyncThunk(
    "auth/createCompany",
    async ({name, description, inn, addressMainOffice, phone, email}, thunkAPI) => {
        try {
            const response = await companyService.makeCompanies(name, description, inn, addressMainOffice, phone, email);
            thunkAPI(getCompanies());
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
    async ({id,mainImage,planImg,imqsImg}, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.append("mainImg", mainImage);
            formData.append("plan", planImg);
            formData.append("imgs", imqsImg);
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

const initialState = user
    ? {isLoggedIn: true, user, mapAll, mapElem, authError: false, userCompanies: [], currentPlace, ...basicData}
    : {isLoggedIn: false, user: null, mapAll: null, mapElem: null, authError, currentPlace: null, ...basicData};

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
        setMapElemData(state, action) {
            state.mapElem = action.payload;
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
        }
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
        [getAllMessages.fulfilled]: (state, action) => {
            console.log(action.payload);
        },
        [getCompanies.fulfilled]: (state, action) => {
            state.userCompanies = myCompanies;
        },
        [createCompany.fulfilled]: (state, action) => {
            state.hasCompany = true;
        },
        [getAllMapData.fulfilled]: (state, action) => {
            state.mapAll = action.payload;
        }
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
    setMapElemData,
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
    openOrCloseMapSlider
} = authSlice.actions
export default authSlice.reducer