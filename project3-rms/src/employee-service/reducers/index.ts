import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";
import { createReducer } from "../../batch-service/reducers/create-reducer";

export interface IUserState {
  currentUser: any;
  loginMessage: string;
}

export interface IRegisterState {
  newUser: any;
  registerMessage: string;
}

export interface IBatchState {
  addBatch: any;
  createMessage: string;
}

export interface IState {
  userState: IUserState;
  registerState: IRegisterState;
  batchState: IBatchState; 
}

export const state = combineReducers<IState>({
  userState: loginReducer,
  registerState: registerReducer,
  batchState: createReducer
});


