import { createReducer } from "./create-reducer";
import { combineReducers } from "redux";

export interface IBatchState {
  addBatch: any;
  createMessage: string;
}

export interface IState {
  batchState: IBatchState;
}

export const state = combineReducers<IState>({
  batchState: createReducer
});
