import { createCampusTypes } from "../action-mappers/create-campus-action";
import { ICampusState } from "../../utility";

const initialState: ICampusState = {
  addCampus: null,
  createCampusMessage: ""
};

export const createCampusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case createCampusTypes.SUCCESSFUL_CREATE: {
      return {
        ...state,
        addCampus: action.payload.addCampus,
        createCampusMessage: "New campus added"
      };
    }
    case createCampusTypes.UNSUCCESSFUL_CREATE: {
      return {
        ...state,
        createCampusMessage: action.payload.createCampusMessage
      };
    }
    default:
      return state;
  }
};
