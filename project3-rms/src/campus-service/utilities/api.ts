import { axiosConfig } from "./axiosConfig";
import IAddress from "../model/IAddress";

export const getAddresses = () => {
    return axiosConfig.get("address/all");
}

export const addAddress = (body:IAddress) => {
    return axiosConfig.post("address/new", body);
}