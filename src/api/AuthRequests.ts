import axios, { AxiosResponse } from "axios";
import LoginFormData from "../utils/interfaces/LoginFormData";

const apiInstance = axios.create({
  baseURL: "http://markme.kz.test/api/auth/",
});

export const performLogin = async (
  loginFormData: LoginFormData
): Promise<AxiosResponse<any>> => {
  return apiInstance.post("login", loginFormData);
};

export const performLogout = () => {}; // just for example to test how exactly export works
