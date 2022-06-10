import axios from "axios";

const API_URL = "http://localhost:8081/bid/";
const user = JSON.parse(localStorage.getItem("user"));
const headers = {
    'Authorization': user ? user.token : ""
};

const getAllCompanyBid = () => {
    return axios
        .get(API_URL + "getAllCompanyBid", {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const makeNewBid = (id) => {
    return axios
        .post(`${API_URL}makeNew?premisesId=${id}`,
            {id},
            {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const approveBid = (id) => {
    return axios
        .get(`${API_URL}agree?bidId=${id}`,
            {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const disApproveBid = (id) => {
    return axios
        .get(`${API_URL}disagree?bidId=${id}`,
            {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const bidService = {
    getAllCompanyBid,
    makeNewBid,
    approveBid,
    disApproveBid
};
export default bidService;