import * as React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./Main.scss";

interface IMain {
  routes: Array<{
    path: string;
    component: any; // TODO: Type is for lazy component?
  }>;
}

const Main: React.FC<IMain> = ({ routes }) => {
  return (
    <main className={styles.main}>
      <React.Suspense fallback={<div>Loading...</div>}>
        hohohoh
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </React.Suspense>
    </main>
  );
};

export default React.memo(Main);
