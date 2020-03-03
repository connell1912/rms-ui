import { createAddressTypes } from "../action-mappers/create-address-action";
import { IAddressState } from "../../utility";

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
        createMessage: "New address added"
      };
    }
    case createAddressTypes.UNSUCCESSFUL_CREATE: {
      return {
        ...state,
        createMessage: action.payload.createMessage
      };
    }
    default:
        return state;
  }
};