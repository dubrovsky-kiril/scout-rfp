import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Graphics = React.lazy(() => import("components/Graphics/Graphics"));
const RegularForm = React.lazy(() =>
  import("components/RegularForm/RegularForm")
);

interface IApp {
  removeLoader: () => void | null;
}

const App: React.FC<IApp> = ({ removeLoader }) => {
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
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route path="/graphics" component={Graphics} />
            <Route path="/regular-form" component={RegularForm} />
          </Switch>
        </React.Suspense>
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default App;
