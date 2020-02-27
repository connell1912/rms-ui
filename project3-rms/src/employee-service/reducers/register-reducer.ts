import { IRegisterState } from "../../utility";
import { registerTypes } from "../action-mappers/register-action";

const initialState: IRegisterState = {
  newUser: null,
  registerMessage: ""
};

export const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case registerTypes.SUCCESSFUL_REGISTER: {
      return {
        ...state,
        newUser: action.payload.newUser,
        registerMessage: "You have Created New User"
      };
    }
    case registerTypes.UNSUCCESSFUL_REGISTER: {
      return {
        ...state,
        registerMessage: action.payload.registerMessage
      };
    }

    default:
      return state;
  }
};
