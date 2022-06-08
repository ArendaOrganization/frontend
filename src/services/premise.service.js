import axios from "axios";
import cartinka from "../img/bg.png"

const API_URL = "http://localhost:8081/premises";
// + "/addPremises"

const user = JSON.parse(localStorage.getItem("user"));
const headers = {
    'Authorization': user ? user.token : "",
};

const postPremise = (name, description, squareMetersNumber, numberOfFloor, hasInternet, privatePremises,
                     phone, costPerMonth, address, latitude, longitude) => {
    return axios
        .post(
            `${API_URL}/addPremises`,
            {
                name,
                description,
                squareMetersNumber,
                numberOfFloor,
                hasInternet,
                privatePremises,
                phone,
                costPerMonth,
                coordinates: {
                    address,
                    latitude,
                    longitude

                }
            },
            {
                headers: {
                    ...headers,
                    //'Accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

const postPremiseImg = (id) => {
    const formData = new FormData();
    formData.append("mainImg", cartinka);
    formData.append("plan", cartinka);
    formData.append("imgs", cartinka);
    return axios
        .post(
            `${API_URL}/addPremisesImg?premisesId=${id}`,
            {
                ...formData
            },
            {
                headers: {
                    ...headers,
                    //'Accept': '*/*',
                    'Content-Type': 'multipart/form-data'
                }
            })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

/*
const premises = {
        name,
        description,
        squareMetersNumber,
        numberOfFloor,
        hasInternet,
        privatePremises,
        phone,
        costPerMonth,
        coordinates: {
            address,
            latitude,
            longitude

        }
    }
    const json = JSON.stringify(premises);
    const blob = new Blob([json], {
        type: 'application/json'
    });
    const formData = new FormData();
    formData.append("mainImg", cartinka);
    formData.append("premises",blob);
*/

const premiseService = {
    postPremise,
    postPremiseImg
};
export default premiseService;