// API.js
import Axios from "axios";

// TODO: use /api base url for production / docker
// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "/api";

// REST API calls
export const getTestQry = async (qry) => {
    try {
        const resp = await Axios.get(`${BASE_URL}/test/${qry}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(resp);
        return resp;
    } catch (err) {
        console.error(err);
        // window.alert("Error submiting query, see console err");
    }
};

export const postTestData = async (data) => {
    try {
        const resp = await Axios.post(`${BASE_URL}/test`, { data: data });
        console.log(resp);
        return resp;
    } catch (err) {
        console.error(err);
        // window.alert("Error submiting query, see console err");
    }
};

// Utils
export const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
export const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 3) + "..." : str;
};
