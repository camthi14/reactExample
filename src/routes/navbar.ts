export enum Paths {
  Home = "/",
  AddUser = "/add-user",
  Login = "/login",
}

const navConfig = [
  {
    name: "Add User",
    path: Paths.AddUser,
  },
  {
    name: "Home",
    path: Paths.Home,
  },
];

export default navConfig;
