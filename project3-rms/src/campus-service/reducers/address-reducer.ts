import { createAddressTypes } from "../action-mappers/create-address-action";
import { IAddressState, state } from "../../utility";

const initialState: IAddressState = {
  addAddress: null,
  createAddressMessage: ""
};

export const createAddressReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case createAddressTypes.SUCCESSFUL_CREATE: {
      return {
        ...state,
        addAddress: action.payload.addAddress,
        createAddressMessage: "New address added"
      };
    }
    case createAddressTypes.UNSUCCESSFUL_CREATE: {
      return {
        ...state,
        createAddressMessage: action.payload.createAddressMessage
      };
    }
    default:
        return state;
  }
};
