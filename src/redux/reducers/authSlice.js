import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import basicData from "../initalState";
import AuthService from "../../services/auth.service";
import {setMessage} from "./messageAuthSlice";
import mapService from "../../services/map.service";
import authService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const mapAll = JSON.parse(localStorage.getItem("mapAll"));
const mapElem = JSON.parse(localStorage.getItem("mapElem"));

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
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logOut",
    async ({}, thunkAPI) => {
        try {
            AuthService.logout();
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
/**/
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
/**/
/*
{
    "name": "Даниил2",
    "surname": "Вшивцев2",
    "patronymic": "Павлович2",
    "email":"danya.vshivtsev@gmail.com",
    "mobile":"+7 912 123 12 12",
    "password":"daniil"
}
*/

export const getAllMapData = createAsyncThunk(
    "auth/mapAllData",
    async ({}, thunkAPI) => {
        try {
            const mapData = await mapService.getMapData();
            thunkAPI.dispatch(setMapData(mapData));
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
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});

const initialState = user
    ? {isLoggedIn: true, user, mapAll, mapElem, ...basicData}
    : {isLoggedIn: false, user: null, mapAll: null, mapElem: null, ...basicData};

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
        setMapData(state, action) {
            state.mapAll = action.payload;
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
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
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
    setMapData,
    setMapElemData,
    updateCurrentOnClickCoords,
} = authSlice.actions
export default authSlice.reducer