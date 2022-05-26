import axios from "axios";
import initalState from "../redux/initalState";

const ALL_API_URL = "http://localhost:8081/map/getAllMapPoints";
const ELEM_API_URL = "http://localhost:8081/map/getMapPoint";
const API_URL = "http://localhost:8081/premises/addPremises";

const user = JSON.parse(localStorage.getItem("user"));
/**/

const getAllMessages = () => {
    return axios
        .get("http://localhost:8081/getAllMessages")
        .then((response) => {
            console.log(response.data)
            return response.data;
        });
};


/**/

const headers = {
    'Content-Type': 'application/json',
    'Authorization': user ? user.token : "",
};

const getMapData = () => {
    return axios
        .get(ALL_API_URL, {headers: {...headers}})
        .then((response) => {
            localStorage.setItem("mapAll", JSON.stringify(response.data));
            return response.data;
        });
};

const getMapElemData = (id, {headers: {...headers}}) => {
    return axios
        .get(ELEM_API_URL + `?id=${id}`, {headers: {...headers}})
        .then((response) => {
            localStorage.setItem("mapElem", JSON.stringify(response.data));
            return response.data;
        });
};

const getAddressByCoords = (coords) => {
    const params = {
        access_key: 'b0e7bb90687ccaca2410253ebb4fcb1b',
        lon: coords[0] + "",
        lat: coords[1] + "",
    }
    /*http://api.positionstack.com/v1/reverse?access_key=b0e7bb90687ccaca2410253ebb4fcb1b&query=40.7638435,-73.9729691*/

    return axios
        .get(`http://api.positionstack.com/v1/reverse?access_key=${params.access_key}&query=${params.lon},${params.lat}`)
        .then(response => {
            return response.data.data[0].name;
        }).catch(error => {
            console.log(error);
        });
};

const postRentAddress = (address, latitude, longitude) => {
    return axios
        .post(API_URL, {address, latitude: latitude, longitude: longitude}, {headers: {...headers}})
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

const mapService = {
    getMapData,
    getMapElemData,
    getAddressByCoords,
    postRentAddress,
    getAllMessages
};
export default mapService;