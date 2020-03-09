import { axiosConfig } from "./axiosConfig";
import IAddress from "../model/IAddress";
import { IAmenity } from "../model/IAmenity";

export const getAddresses = () => {
    return axiosConfig.get("address/all");
}

export const addAddress = (body:IAddress) => {
    return axiosConfig.post("address/new", body);
}

export const getAmenities = () => {
    return axiosConfig.get("amenity/all");
}

export const addAmenity = (body: IAmenity) => {
    return axiosConfig.post("amenity/new", body);
}