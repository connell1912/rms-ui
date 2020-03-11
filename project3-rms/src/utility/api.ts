import { axiosConfig, axiosEmployee } from "./axiosConfig";
import IBatch from "../batch-service/model/IBatch";
import axios from "axios";
import { IWorkOrder } from "../work-order-service/model/IWorkOrder";
import { IRoom } from "../work-order-service/model/IRoom";
import IAddress from "../campus-service/model/IAddress";
import { IAmenity } from "../campus-service/model/IAmenity";
import IBuilding from "../campus-service/model/IBuilding";
import ICampus from "../campus-service/model/ICampus";
import IUser from "../employee-service/model/IUser";

export const apiLogin = async (email: string, password: string) => {
  try {
    const response = await axiosEmployee.post("employee/login", {
      email,
      password
    });
    if (response.status === 200) {
      const body = await response.data;
      console.log(body);
      return {
        body,
        loginMessage: "successful login"
      };
    } else if (response.status === 401) {
      return {
        loginMessage: "Incorrect Email or Password",
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

export const apiRegister = async (
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  department: string
): Promise<object> => {
  let user = {
    password,
    firstName,
    lastName,
    email,
    role,
    department
  };
  try {
    const response = await axiosEmployee.post("employee/save", {
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      department: department
    });
    if (response.status === 200) {
      const body = await response.data;
      if (body["role"] === "ADMIN") {
        try {
          const response2 = await axiosConfig.post(
            "employee/register/customer",
            {
              id: body["id"],
              password: body["password"],
              firstName: body["firstName"],
              lastName: body["lastName"],
              email: body["email"],
              role: body["role"],
              department: body["department"]
            }
          );
          if (response2.status === 200) {
            console.log("Customer created Successfully!");
          } else if (response2.status === 500) {
            return {
              message: "Failed to register you!",
              body: null
            };
          } else {
            return {
              message: "Something Went Wrong",
              body: null
            };
          }
        } catch (e) {
          console.log(e);
          return {
            registerMessage: "Something Went Wrong"
          };
        }
      }

      return {
        body,
        message: "You have been registered!"
      };
    } else if (response.status === 500) {
      return {
        message: "Failed to register you!",
        body: null
      };
    } else {
      return {
        message: "Something Went Wrong",
        body: null
      };
    }
  } catch (e) {
    console.log(user);
    console.log(e);
    return {
      registerMessage: "Something Went Wrong"
    };
  }
};

export const addUser = (body: IUser) => {
  return axiosEmployee.post("employee/save", body);
}

/* Batch APIs */

export const addBatch = (body: IBatch) => {
  return axiosConfig.post("batch-service/batch/add", body);
};

export const getBatch = () => {
  return axiosConfig.get("batch-service/batch/all");
};

export const deleteBatch = () => {
  return axiosConfig.get("batch-service/batch/delete");
};

/* Work Order APIs */

export const getWOList = () => {
  return axiosConfig.get("work-order-service/workorder/all");
};

export const publishWorkOrder = (body: IWorkOrder) => {
  return axiosConfig.post("work-order-service/workorder/newworkorder", body);
};

/* Room APIs */

export const getRooms = () => {
  return axiosConfig.get("campus-service/room/all");
};

export const publishRoom = (body: IRoom) => {
  return axiosConfig.post("campus-service/room/new", body);
};

/* Address APIs */

export const getAddresses = () => {
  return axiosConfig.get("campus-service/address/all");
};

export const addAddress = (body: IAddress) => {
  return axiosConfig.post("campus-service/address/new", body);
};

/* Amenity APIs */

export const getAmenities = () => {
  return axiosConfig.get("campus-service/amenity/all");
};

export const addAmenity = (body: IAmenity) => {
  return axiosConfig.post("campus-service/amenity/new", body);
};

/* Building APIs */

export const getBuildings = () => {
  return axiosConfig.get("campus-service/building/all");
};

export const addBuilding = (body: IBuilding) => {
  return axiosConfig.post("campus-service/building/new", body);
};

/* Campus APIs */

export const getCampuses = () => {
  return axiosConfig.get("campus-service/campus/all");
};

export const addCampus = (body: ICampus) => {
  return axiosConfig.post("campus-service/campus/new", body);
};
