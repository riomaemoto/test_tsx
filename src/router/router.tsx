import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/header";
import { Profile } from "../pages/profile";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Pictures } from "../pages/pictures";

const PageRoutes = [
  {
    path: "",
    exact: true,
    children: <Home />,
  },
  {
    path: "pictures",
    exact: false,
    children: <Pictures />,
  },
  {
    path: "profile",
    exact: false,
    children: <Profile />,
  },
  {
    path: "contact",
    exact: false,
    children: <Contact />,
  },
];

export const Router: FC = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          render={({ match: { url } }) => (
            <Switch>
              {PageRoutes.map((item) => (
                <Route
                  key={item.path}
                  exact={item.exact}
                  path={`${url}${item.path}`}
                >
                  <Header />
                  {item.children}
                </Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </>
  );
};
