import axios, { AxiosResponse } from "axios";
import Post from "../utils/interfaces/Post";

const apiInstance = axios.create({
    baseURL: "http://markme.kz.test/api/",
});

export const getPosts = async (userId: number): Promise<AxiosResponse<any>> => {
    return apiInstance.get(`${userId}/posts`);
};
