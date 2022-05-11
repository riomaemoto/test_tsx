import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../layout/header";
import { Contact } from "../components/contact";
import { Plan } from "../pages/plan/plan";
import { Home } from "../pages/home/home";
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
    children: <Plan />,
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
