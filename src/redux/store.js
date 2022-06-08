import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./reducers/messageAuthSlice";
import authSlice from "./reducers/authSlice";

const reducers = combineReducers({
    auth: authSlice,
    authMessage: messageSlice,
})

const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {serializableCheck: false,}
        ),
})

export default store;