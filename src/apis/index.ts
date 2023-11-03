import axios from "axios";
import { IAuthProps, ILoginProps } from "../@types";

const Axios = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

export const signupAPI = async (body: IAuthProps) => {
  const response = await Axios.post("/users/signup", {
    name: body.name,
    email: body.email,
    password: body.password,
  });
  return response.data;
};

export const signinAPI = async (body: ILoginProps) => {
  const response = await Axios.post("/users/signin", {
    email: body.email,
    password: body.password,
  });
  return response.data;
};
