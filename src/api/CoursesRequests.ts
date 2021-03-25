import axios, { AxiosResponse } from "axios";
import { getCurrentTokenFromCookie } from "../utils/helper";
import Course from "../utils/interfaces/Course";

const apiInstance = axios.create({
  baseURL: "http://markme.kz.test/api/",
  headers: { Authorization: "Bearer " + getCurrentTokenFromCookie() },
});

export const getCompanyCourses = async (): Promise<
  AxiosResponse<{ payload: Course[]; resultCode: number }>
> => {
  return apiInstance.get("company-courses");
};

export const addCourse = async (
  course: Course
): Promise<AxiosResponse<any>> => {
  return apiInstance.post("courses", course);
};
