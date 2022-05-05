import { VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { PageRoutes } from "./page_routes";

export const Router: VFC = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={({ match: { url } }) => (
            <Switch>
              {PageRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                ></Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </>
  );
};
