import { createAmenityTypes } from "../action-mappers/create-amenity-action";
import { IAmenityState, state } from "../../utility";

const initialState: IAmenityState = {
  addAmenity: null,
  createAmenityMessage: ""
};

export const createAmenityReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case createAmenityTypes.SUCCESSFUL_CREATE: {
      return {
        ...state,
        addAmenity: action.payload.addAmenity,
        createAmenityMessage: "New amenity added"
      };
    }
    case createAmenityTypes.UNSUCCESSFUL_CREATE: {
      return {
        ...state,
        createAmenityMessage: action.payload.createAmenityMessage
      };
    }
    default:
      return state;
  }
};
