import ICampus from "../model/ICampus";
import { addCampus } from "../../utility/api";

export const createCampusTypes = {
  SUCCESSFUL_CREATE: "CREATE_SUCCESSFUL_CREATE",
  UNSUCCESSFUL_CREATE: "CREATE_UNSUCCESSFUL_CREATE"
};

export const createCampus = (newCampus: ICampus) => async (dispatch: any) => {
  let response: any = await addCampus(newCampus);
  if (response.body) {
    dispatch({
      type: createCampusTypes.SUCCESSFUL_CREATE,
      payload: {
        currentCampus: response.body
      }
    });
  } else {
    dispatch({
      type: createCampusTypes.UNSUCCESSFUL_CREATE,
      payload: {
        createMessage: response.createMessage
      }
    });
  }
};
