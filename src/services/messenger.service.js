import axios from "axios";

const API_URL = "http://localhost:8081/";
const user = JSON.parse(localStorage.getItem("user"));
const headers = {
    'Authorization': user ? user.token : ""
};



/*const makeNewBid = (id) => {
    return axios
        .post(`${API_URL}makeNew?premisesId=${id}`,
            {id},
            {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};
*/
const getAllMessagesByCompanyId = (id) => {
    return axios
        .get(`${API_URL}getAllMessagesByCompanyId?companyId=${id}`,
            {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const getAllDialogs = () => {
    return axios
        .get(`${API_URL}getAllDialogs`,
            {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const messengerService = {
    getAllMessagesByCompanyId,
    getAllDialogs
};

export default messengerService;