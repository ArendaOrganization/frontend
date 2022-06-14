import axios from "axios";

const COMPANY_URL = "http://localhost:8081/companyAccount";

const user = JSON.parse(localStorage.getItem("user"));
const headers = {
    'Content-Type': 'application/json',
    'Authorization': user ? user.token : "",
};

const getMyCompanies = () => {
    return axios
        .get(COMPANY_URL, {headers: {...headers}})
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

const makeCompanies = (name, description, inn, addressMainOffice, phone, email) => {
    return axios
        .post(
            `${COMPANY_URL}/makeCompany`,
            {
                name,
                description,
                inn,
                addressMainOffice,
                phone,
                email
            },
            {headers: {...headers}})
}

const getMyCompanyById = (id) => {
    return axios
        .get(`${COMPANY_URL}/getCompany?companyId=${id}`, {headers: {...headers}})
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

const companyService = {
    getMyCompanies,
    makeCompanies,
    getMyCompanyById
};
export default companyService;