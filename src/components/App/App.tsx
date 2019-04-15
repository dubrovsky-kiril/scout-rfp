import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Graphics = React.lazy(() => import("components/Graphics/Graphics"));
const RegularForm = React.lazy(() =>
  import("components/RegularForm/RegularForm")
);

const App: React.FC = () => {
  const [isBundleFetched, setBundleFetchStatus] = React.useState(false);

  React.useEffect(() => {
    if (document.getElementById("loader")) {
      document.getElementById("loader").remove();
    }
    setBundleFetchStatus(true);
  }, []);

  if (!isBundleFetched) {
    return null;
  }

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
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/graphics" component={Graphics} />
            <Route exact path="/regular-form" component={RegularForm} />
          </Switch>
        </React.Suspense>
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default React.memo(App);
