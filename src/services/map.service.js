import axios from "axios";

const ALL_API_URL = "http://localhost:8081/rest/map/getAllMapPoints";
const ELEM_API_URL = "http://localhost:8081/rest/map/getMapPoint";

const user = JSON.parse(localStorage.getItem("user"));

const getMapData = () => {
    return axios
        .get(ALL_API_URL)
        .then((response) => {
            localStorage.setItem("mapAll", JSON.stringify(response.data));
            return response.data;
        });
};

const getMapElemData = (id) => {
    return axios
        .get(ELEM_API_URL + `?id=${id}`)
        .then((response) => {
            localStorage.setItem("mapElem", JSON.stringify(response.data));
            return response.data;
        });
};

const mapService = {
    getMapData,
    getMapElemData
};
export default mapService;