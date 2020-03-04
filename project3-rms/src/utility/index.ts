import { combineReducers } from "redux";
import { loginReducer } from "../employee-service/reducers/login-reducer";
// import { registerReducer } from "../employee-service/reducers/register-reducer";
import { createReducer } from "../batch-service/reducers/create-reducer";
import { createAddressReducer } from "../campus-service/reducers/address-reducer";
import { createAmenityReducer } from "../campus-service/reducers/amenity-reducer";

export interface IUserState {
  currentUser: any;
  loginMessage: string;
}

// export interface IRegisterState {
//   newUser: any;
//   registerMessage: string;
// }

export interface IBatchState {
  addBatch: any;
  createMessage: string;
}

export interface IAddressState {
  addAddress: any;
  createAddressMessage: string;
}

export interface IAmenityState {
  addAmenity: any,
  createAmenityMessage: string
}

export interface IState {
  userState: IUserState;
  // registerState: IRegisterState;
  batchState: IBatchState; 
  addressState: IAddressState;
  amenityState: IAmenityState;
}

export const state = combineReducers<IState>({
  userState: loginReducer,
  // registerState: registerReducer,
  batchState: createReducer,
  addressState: createAddressReducer,
  amenityState: createAmenityReducer
});


