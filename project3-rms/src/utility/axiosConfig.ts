import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'http://10.226.81.252:8080/'

});

export default axiosConfig;