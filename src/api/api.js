import axios from "axios";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../redux/reducers/messageAuthSlice";

let instance = axios.create(
    {
        baseURL: `http://localhost:8081/rest/user/`,
    }
);

const dispatch = useDispatch();

export const AuthRegAPI = {
    login: (email, password) => {
        return instance.post(`authenticate`, {email, password})
            .then(response => {
                console.log("api: "+response.status);
                dispatch(setIsAuth(response.status));
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    reg: (name, email, mobile, password) => {
        return instance.post(`register`, {name, email, mobile, password})
            .then(response => response)
            .catch(error => {
                console.log(error.response)
            })
    },
};
/*
{
    name: "Daniil",
    email: "test@user.com",
    mobile: "+7 912 123 12 12",
    password: "testuser"
}
*/
/*
useEffect(() => {
    axios.post('http://localhost:8081/rest/user/register',
        {
            name:"Daniil",
            email:"test@user.com",
            mobile:"+7 912 123 12 12",
            password:"testuser"
        }
    )
        .then(response => console.log(response.status))
        .catch(error => {
            console.log(error.response)
        });
}, []);
*/
