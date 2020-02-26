import IUser from "../model/IUser";
import { addUser } from "../utility/api";

export const registerTypes = {
  SUCCESSFUL_REGISTER: "REGISTER_SUCCESSFUL_REGISTER",
  UNSUCCESSFUL_REGISTER: "REGISTER_UNSUCCESSFUL_REGISTER"
};

export const registerUser = (newUser: IUser) => async (dispatch: any) => {
  let response: any = await addUser(newUser);
  if (response.body) {
    dispatch({
      type: registerTypes.SUCCESSFUL_REGISTER,
      payload: {
        currentUser: response.body
      }
    });
  } else {
    dispatch({
      type: registerTypes.UNSUCCESSFUL_REGISTER,
      payload: {
        registerMessage: response.registerMessage
      }
    });
  }
};
