import { AuthPaths, LoginInput, ResponseLogin } from "~/types";
import instance from "./axios";

const authService = {
  login: (data: LoginInput): Promise<ResponseLogin> => {
    return instance.post(AuthPaths.Login, data);
  },
};

export default authService;
