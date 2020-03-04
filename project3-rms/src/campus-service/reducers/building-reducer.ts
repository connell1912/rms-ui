import { createBuildingTypes } from "../action-mappers/create-building-action";
import { IBuildingState } from "../../utility";

const initialState: IBuildingState = {
    addBuilding: null,
    createBuildingMessage: ""
};

export const createBuildingReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case createBuildingTypes.SUCCESSFUL_CREATE: {
            return{
                ...state,
                addBuilding: action.payload.addBuilding,
                createBuildingMessage: "New amenity added"
            };
        }
        case createBuildingTypes.UNSUCCESSFUL_CREATE: {
            return{
                ...state,
                createBuildingMessage: action.payload.createBuildingMessage
            };
        }
        default:
            return state;
    }
};