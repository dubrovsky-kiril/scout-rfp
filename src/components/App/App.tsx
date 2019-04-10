import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Graphics = React.lazy(() => import("components/Graphics/Graphics"));

const App: React.FunctionComponent = () => (
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
        </ul>
      </nav>
    </header>

    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={() => <div>Home</div>} />
          <Route path="/graphics" component={Graphics} />
        </Switch>
      </React.Suspense>
    </main>

    <footer>Footer</footer>
  </>
);

export default App;
