import * as React from "react";
import {
  Route,
  Link,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./App.scss";

console.log("styles", styles);

const Graphics = React.lazy(() => import("components/Graphics/Graphics"));
const RegularForm = React.lazy(() =>
  import("components/RegularForm/RegularForm")
);

interface IApp extends RouteComponentProps {
  removeLoader: () => void | null;
}

const App: React.FC<IApp> = ({ location, removeLoader }) => {
  removeLoader();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/graphics">Graphics</Link>
            </li>
            <li>
              <Link to="/regular-form">Regular form</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <TransitionGroup>
          <CSSTransition classNames="swipe" key={location.key} timeout={500}>
            <div className={styles["swipe-container"]}>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component={() => <div>Home</div>} />
                  <Route exact path="/graphics" component={Graphics} />
                  <Route exact path="/regular-form" component={RegularForm} />
                </Switch>
              </React.Suspense>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default withRouter(React.memo(App));
