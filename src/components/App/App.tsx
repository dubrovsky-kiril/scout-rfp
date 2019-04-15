import "normalize.css";
import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";
import styles from "./App.scss";

const Graphics = React.lazy(() => import("components/Graphics/Graphics"));
const RegularForm = React.lazy(() =>
  import("components/RegularForm/RegularForm")
);

const App: React.FC = () => {
  return (
    <div className={styles.app}>
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

      <main className={styles.main}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/graphics" component={Graphics} />
            <Route exact path="/regular-form" component={RegularForm} />
          </Switch>
        </React.Suspense>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default App;
