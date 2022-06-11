import axios from "axios";

const API_URL = "http://localhost:8081/premises";
// /getUserPremises
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

/*const postPremiseImg = (id) => {
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
                    //'Accept': '*!/!*',
                    'Content-Type': 'multipart/form-data'
                }
            })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}*/

const getPremise = (id) => {
    return axios
        .get(
            `${API_URL}/getPremisesById?premisesId=${id}`,
            {
                headers: {
                    ...headers
                }
            })
        .then(response => {
            localStorage.setItem("currentPlace", JSON.stringify(response.data));
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

const getAllPremises = () => {
    return axios
        .get(
            `${API_URL}/getUserPremises`,
            {
                headers: {
                    ...headers
                }
            })
        .then(response => {
            localStorage.setItem("allPremises", JSON.stringify(response.data));
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
    getPremise,
    getAllPremises
};
export default premiseService;