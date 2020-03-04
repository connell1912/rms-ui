import IAddress from "../model/IAddress";
import { addAddress } from "../utilities/api";

export const createAddressTypes = {
  SUCCESSFUL_CREATE: "CREATE_SUCCESSFUL_CREATE",
  UNSUCCESSFUL_CREATE: "CREATE_UNSUCCESSFUL_CREATE"
};

export const createAddress = (newAddress: IAddress) => async (
  dispatch: any
) => {
  let response: any = await addAddress(newAddress);
  if (response.body) {
    dispatch({
      type: createAddressTypes.SUCCESSFUL_CREATE,
      payload: {
        currentAddress: response.body
      }
    });
  } else {
    dispatch({
      type: createAddressTypes.UNSUCCESSFUL_CREATE,
      payload: {
        createMessage: response.createMessage
      }
    });
  }
};
