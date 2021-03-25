import axios, { AxiosResponse } from "axios";
import { getCurrentTokenFromCookie } from "../utils/helper";
import User from "../utils/interfaces/User";

const apiInstance = axios.create({
  baseURL: "http://markme.kz.test/api/",
  headers: { Authorization: "Bearer " + getCurrentTokenFromCookie() },
});

export const getCompanyTeachers = async (): Promise<
  AxiosResponse<{ payload: User[]; resultCode: number }>
> => {
  return apiInstance.get("company-teachers");
};
