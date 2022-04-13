import axios from "axios";

const API_URL = "http://localhost:8081/rest/map/getAllMapPoints";

const user = JSON.parse(localStorage.getItem("user"));

const getMapData = async () => {
    return await axios
        .get(API_URL)
        .then((response) => {
            localStorage.setItem("mapAll", JSON.stringify(response.data));
            return response.data;
        });
};

const mapService = {
    getMapData
};
export default mapService;