import {addCampus} from '../../utility/api';
import { ICampus } from '../model/ICampus';

export const createCampusTypes = {
    CREATE_SUCCESSFUL: 'CAMPUS_ADDED',
    CREATE_FAILED: 'CAMPUS_NOT_ADDED'
}

export const createNewCampus = (newCampus:ICampus) => async (dispatch:any)=>{
    let response:any = await addCampus(newCampus);
    if (response.body){
        dispatch({
            type: createCampusTypes.CREATE_SUCCESSFUL,
            payload: {
                currentCampus: response.body
            }
        })
    }else {
        dispatch({
            type: createCampusTypes.CREATE_FAILED,
            payload:{
                createMessage: response.createMessage
            }
        })
    }
}