import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initalState";
import {AuthRegAPI} from "../api/api";

const authSlice = createSlice({
    name: 'authOrReg',
    initialState,
    reducers: {
        updateNameInput(state, action) {
            state.currentNameInput = action.payload;
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
        logIn(state) {
            AuthRegAPI.login(
                state.currentEmailInput,
                state.currentPasswordInput
            );
            state.currentEmailInput = "";
            state.currentPasswordInput = "";
        },
        reg(state) {
            AuthRegAPI.reg(
                state.currentNameInput,
                state.currentEmailInput,
                state.currentMobileInput,
                state.currentPasswordInput
            )
            state.currentNameInput = "";
            state.currentEmailInput = "";
            state.currentMobileInput = "";
            state.currentPasswordInput = "";
        },
    },
})

export const {
    updateNameInput,
    updateEmailInput,
    updateMobileInput,
    updatePasswordInput,
    logIn,
    reg
} = authSlice.actions
export default authSlice.reducer