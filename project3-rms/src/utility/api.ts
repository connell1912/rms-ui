import axiosConfig from "./axiosConfig";
import IUser from "../employee-service/model/IUser";
import IBatch from "../batch-service/model/IBatch";

export const apiLogin = async (username: string, password: string) => {
  try {
    const response = await axiosConfig.post("auth.app", {
      username,
      password
    });
    console.log(response.status);
    if (response.status === 200) {
      const body = await response.data;
      console.log(body);

      return {
        body,
        loginMessage: "Successful Login"
      };
    } else if (response.status === 401) {
      return {
        loginMessage: "Incorrect Username or Password",
        body: null
      };
    } else {
      return {
        loginMessage: "Something Went Wrong",
        body: null
      };
    }
  } catch (e) {
    console.log(e);
    return {
      loginMessage: "Something Went Wrong"
    };
  }
};

export const addUser = async (body: IUser) => {
  try {
    const response = await axiosConfig.post("addUser.app", {
      body
    });
    if (response.status === 200) {
      const body = await response.data;
      console.log(body);

      return {
        body,
        registerMessage: "Successful Register"
      };
    } else if (response.status === 401) {
      return {
        registerMessage: "Registration failed",
        body: null
      };
    } else {
      return {
        registerMessage: "Something Went Wrong",
        body: null
      };
    }
  } catch (e) {
    console.log(e);
    return {
      loginMessage: "Something Went Wrong"
    };
  }
};

export const addBatch = (body: IBatch) => {
  return axiosConfig.post('newbatch.app', body);
}
