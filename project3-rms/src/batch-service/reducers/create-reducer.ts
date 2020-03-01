import { createTypes } from "../action-mappers/create-action";
import { IBatchState } from "../../utility";

const initialState: IBatchState = {
  addBatch: null,
  createMessage: ""
};

export const createReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case createTypes.SUCCESSFUL_CREATE: {
      return {
        ...state,
        addBatch: action.payload.addBatch,
        createMessage: "New Batch Added"
      };
    }
    case createTypes.UNSUCCESSFUL_CREATE: {
      return {
        ...state,
        createMessage: action.payload.createMessage
      };
    }

    default:
      return state;
  }
};
