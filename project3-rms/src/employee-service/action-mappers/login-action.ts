import { apiLogin } from "../../utility/api";
import { history } from "../../utility/history";

export const loginTypes = {
  SUCCESSFUL_LOGIN: "LOGIN_SUCCESSFUL_LOGIN",
  UNSUCCESSFUL_LOGIN: "LOGIN_UNSUCCESSFUL_LOGIN",
};

export const updateCurrentUser = (username: string, password: string) => async (
  dispatch: any
) => {
  let response: any = await apiLogin(username, password);
  if (response.body) {
    dispatch({
      type: loginTypes.SUCCESSFUL_LOGIN,
      payload: {
        currentUser: response.body
      }
    });
    history.push("/home");
    
  } else {
    dispatch({
      type: loginTypes.UNSUCCESSFUL_LOGIN,
      payload: {
        loginMessage: response.loginMessage
      }
    });
  }
};

// export const logout = (dispatch: any) => {
//   dispatch({
//     type: loginTypes.LOGOUT,
//     payload: {
//       loginMessage: "LOGGED OUT"
//     }
//   });
// };
