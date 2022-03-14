import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../redux/mainReducer"

const reducers = combineReducers({
    authReducer: authSlice,
})

export const store = configureStore({
    reducer: reducers,
})