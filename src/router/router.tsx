import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../layout/header";
import { Profile } from "../pages/profile";
import { Contact } from "../pages/contact";
import { Slider } from "../pages/slider";
import { Pictures } from "../pages/pictures";
import { Home } from "../pages/home";
import { Footer } from "../layout/footer";

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
                  <Slider />
                  {item.children}
                  <Footer />
                </Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </>
  );
};
