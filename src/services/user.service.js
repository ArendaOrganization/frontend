import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/rest/";
const getUserBoard = () => {
    return axios.get(API_URL + "user/", { headers: authHeader() });
};
/*
const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
    return axios.get(API_URL + "admin/", { headers: authHeader() });
};
*/
const userService = {
    /*
    getPublicContent,
    getModeratorBoard,
    getAdminBoard,
    */
    getUserBoard,
};
export default userService