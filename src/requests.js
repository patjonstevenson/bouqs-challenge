import axios from "axios";

const headers = {
    "Access-Control-Allow-Origin": "*"
}

export const axiosWithHeaders = axios.create({ headers });