import IBatch from "../model/IBatch";
import { addBatch } from "../../utility/api"


export const createTypes = {
    SUCCESSFUL_CREATE: "BATCH_CREATE_SUCCESSFUL",
    UNSUCCESSFUL_CREATE: "BATCH_CREATE_UNSUCCESSFUL"
}

export const createBatch = (newBatch: IBatch) => async (dispatch: any) => {
    let response: any = await addBatch(newBatch);
    if (response.body) {
        dispatch({
            type: createTypes.SUCCESSFUL_CREATE,
            payload: {

            }
        })
    } else {
        dispatch({
            type: createTypes.UNSUCCESSFUL_CREATE,
            payload: {

            }
        })
    }
}