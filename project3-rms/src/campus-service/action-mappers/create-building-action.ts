import IBuilding from "../model/IBuilding";
import { addBuilding } from "../../utility/api";

export const createBuildingTypes = {
  SUCCESSFUL_CREATE: "CREATE_SUCCESSFUL_CREATE",
  UNSUCCESSFUL_CREATE: "CREATE_UNSUCCESSFUL_CREATE"
};

export const createBuilding = (newBuilding: IBuilding) => async (
  dispatch: any
) => {
  let response: any = await addBuilding(newBuilding);
  if (response.body) {
    dispatch({
      type: createBuildingTypes.SUCCESSFUL_CREATE,
      payload: {
        currentBuilding: response.body
      }
    });
  } else {
    dispatch({
      type: createBuildingTypes.UNSUCCESSFUL_CREATE,
      payload: {
        createMessage: response.createMessage
      }
    });
  }
};
