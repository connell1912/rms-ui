import { combineReducers } from "redux";
import { loginReducer } from "../employee-service/reducers/login-reducer";
import { createReducer } from "../batch-service/reducers/create-reducer";
import { createAddressReducer } from "../campus-service/reducers/address-reducer";
import { createAmenityReducer } from "../campus-service/reducers/amenity-reducer";
import { createBuildingReducer } from "../campus-service/reducers/building-reducer";
import { createCampusReducer } from "../campus-service/reducers/campus-reducer";
import { IUser } from "../employee-service/model/IUser";

export interface IUserState {
  currentUser: IUser;
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

export interface IAddressState {
  addAddress: any;
  createAddressMessage: string;
}

export interface IAmenityState {
  addAmenity: any;
  createAmenityMessage: string;
}

export interface IBuildingState {
  addBuilding: any;
  createBuildingMessage: string;
}

export interface ICampusState {
  addCampus: any;
  createCampusMessage: string;
}

export interface IState {
  userState: IUserState;
  // registerState: IRegisterState;
  batchState: IBatchState;
  addressState: IAddressState;
  amenityState: IAmenityState;
  buildingState: IBuildingState;
  campusState: ICampusState;
}

export const state = combineReducers<IState>({
  userState: loginReducer,
  // registerState: registerReducer,
  batchState: createReducer,
  addressState: createAddressReducer,
  amenityState: createAmenityReducer,
  buildingState: createBuildingReducer,
  campusState: createCampusReducer
});
