import { loginTypes } from "../action-mappers/login-action";
// import { IUser } from "../model/IUser";
import { IUserState } from "../../utility";

const initialState: IUserState = {
  currentUser: {
    empId: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    // ,
    // department: null,
    // role: null
  },
  loginMessage: ""
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.SUCCESSFUL_LOGIN: {
      return {
        ...state,
        currentUser: action.payload.currentUser,
        loginMessage: "You have Logged in"
      };
    }
    /*   case loginTypes.LOGOUT: {
      return {
        ...state,
        currentUser: null
      };
    } */
    case loginTypes.UNSUCCESSFUL_LOGIN: {
      return {
        ...state,
        loginMessage: action.payload.loginMessage
      };
    }

    default:
      return state;
  }
};
