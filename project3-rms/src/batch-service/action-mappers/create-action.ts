import IBatch from "../model/IBatch";
import { addBatch } from "../../utility/api";

export const createTypes = {
  SUCCESSFUL_CREATE: "CREATE_SUCCESSFUL_BATCH",
  UNSUCCESSFUL_CREATE: "CREATE_UNSUCCESSFUL_BATCH"
};

export const createBatch = (newBatch: IBatch) => async (dispatch: any) => {
  let response: any = await addBatch(newBatch);
  if (response.body) {
    dispatch({
      type: createTypes.SUCCESSFUL_CREATE,
      payload: {
        currentBatch: response.body
      }
    });
  } else {
    dispatch({
      type: createTypes.UNSUCCESSFUL_CREATE,
      payload: {
        createMessage: response.createMessage
      }
    });
  }
};
