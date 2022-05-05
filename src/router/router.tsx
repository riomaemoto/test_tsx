import { VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/header";

import { PageRoutes } from "./page_routes";

export const Router: VFC = () => {
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
                  <Header>{item.children}</Header>
                </Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </>
  );
};
