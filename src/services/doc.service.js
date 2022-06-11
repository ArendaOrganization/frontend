import axios from "axios";

const API_URL = "http://localhost:8081/contract/";
const user = JSON.parse(localStorage.getItem("user"));
const headers = {
    'Authorization': user ? user.token : ""
};

const getPremisesInDocPage = () => {
    return axios
        .get(API_URL + "makeContract", {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const getPremiseTenantsData = (id) => {
    return axios
        .get(API_URL + `getTenants?premisesId=${id}`, {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const postDocument = (name, theme, description, tenantId, premisesId) => {
    return axios
        .post(
            `${API_URL}makeContract`,
            {
                name,
                theme,
                description,
                tenant: {id: tenantId},
                premises: {id: premisesId},
            },
            {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

const getAllContracts = () => {
    return axios
        .get(API_URL + "getAllContracts", {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};

const getCurrentContract = (id) => {
    return axios
        .get(API_URL + `getContract?contractId=${id}`, {headers: {...headers}})
        .then((response) => {
            return response.data;
        });
};


const docService = {
    getPremisesInDocPage,
    getPremiseTenantsData,
    postDocument,
    getAllContracts,
    getCurrentContract,
};
export default docService;