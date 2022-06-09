import axios from "axios";

const API_URL = "http://localhost:8081/user/";
const register = (name, surname, patronymic, email, mobile, password) => {
    return axios.post(API_URL + "register", {
        name: name,
        surname: surname,
        patronymic: patronymic,
        email: email,
        mobile: mobile,
        password: password,
    });
};
const login = (email, password) => {
    return axios
        .post(API_URL + "authenticate", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            } else {
                localStorage.setItem("authError", JSON.stringify(response.data));
            }
            return response.data;
        });
};
const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("mapAll");
    localStorage.removeItem("myCompanies");
    localStorage.removeItem("mapElem");
    localStorage.removeItem("currentPlace");
    localStorage.removeItem("companyById");
    localStorage.removeItem("allPremises");
};
const sendEmailToChangePassword = (email) => {
    return axios
        .post(API_URL + "resetPasswordByEmail", {
            email
        })
        .then((response) => {
            return response.data;
        });
};
const sendNewPassword = (password,code,secondCode) => {
    return axios
        .post(`${API_URL}resetPassword?code=${code}&secondeCode=${secondCode}`,
            {password}
        )
        .then((response) => {
            return response.data;
        });
};
const authService = {
    register,
    login,
    logout,
    sendEmailToChangePassword,
    sendNewPassword
};
export default authService;