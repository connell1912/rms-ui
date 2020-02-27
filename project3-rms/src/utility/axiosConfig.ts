import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'http://10.226.80.56:8080/'

});

export default axiosConfig;