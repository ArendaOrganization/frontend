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
            }
            return response.data;
        });
};
const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("mapAll");
};
const authService = {
    register,
    login,
    logout,
};
export default authService;