import { createTypes } from "../action-mappers/create-action";
import { IBatchState } from ".";

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
        createMessage: "Something Went Wrong"
      };
    }

    default:
      return state;
  }
};
