import Home from "../pages/Home";
import User from "../pages/User";

export const ROUTES = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/user/:id",
    component: <User />,
  }
];
