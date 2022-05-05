import { Profile } from "../pages/profile";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Pictures } from "../pages/pictures";

export const PageRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/pictures",
    exact: false,
    children: <Pictures />,
  },
  {
    path: "/profile",
    exact: false,
    children: <Profile />,
  },
  {
    path: "/contact",
    exact: false,
    children: <Contact />,
  },
];
