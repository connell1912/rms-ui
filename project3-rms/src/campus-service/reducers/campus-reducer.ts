import { createCampusTypes } from '../action-mappers/create-campus-action';
import { ICampusState } from '../../utility';

const initialState: ICampusState ={
    addCampus:null,
    createCampusMessage:""
}

export const createCampusReducer = (state = initialState, action:any) =>{
    switch(action.type){
        case createCampusTypes.CREATE_SUCCESSFUL:{
            return {
                ...state,
                addCampus:action.payload.addCampus,
                createMessage: "New Campus Added"
            };
        }
        case createCampusTypes.CREATE_FAILED: {
            return{
                ...state,
                createMessage: action.payload.createMessage
            };
        }
        default:
            return state;
    }
}