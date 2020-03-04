import { IAmenity } from "../model/IAmenity";
import { addAmenity } from "../../utility/api";

export const createAmenityTypes = {
    SUCCESSFUL_CREATE: "CREATE_SUCCESSFUL_CREATE",
    UNSUCCESSFUL_CREATE: "CREATE_UNSUCCESSFUL_CREATE"
};

export const createAmenity = (newAmenity: IAmenity) => async(dispatch: any) => {
    let response: any = await addAmenity(newAmenity);
    if(response.body) {
        dispatch({
            type: createAmenityTypes.SUCCESSFUL_CREATE,
            payload: {
                currentAmenity: response.body
            }
        });
    } else {
        dispatch({
            type: createAmenityTypes.UNSUCCESSFUL_CREATE,
            payload: {
                createMessage: response.createMessage
            }
        });
    }
};
