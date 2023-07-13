export interface LoginInput {
  email: string;
  password: string;
}

export enum AuthPaths {
  Login = "api/login",
}

export interface ResponseLogin {
  token: string;
}
