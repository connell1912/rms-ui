import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";

export interface IUserState {
  currentUser: any;
  loginMessage: string;
}

export interface IRegisterState {
  newUser: any;
  registerMessage: string;
}

export interface IState {
  userState: IUserState;
  registerState: IRegisterState;
}

export const state = combineReducers<IState>({
  userState: loginReducer,
  registerState: registerReducer
});
