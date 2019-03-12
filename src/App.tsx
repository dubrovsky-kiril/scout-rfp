import * as React from "react";
import { Route, Link } from "react-router-dom";
import ProductIdForm from "./components/ProductIdForm";

const App: React.FunctionComponent = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">Users</Link>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={ProductIdForm} />
    <Route path="/about" component={() => <div>About Page</div>} />
    <Route path="/faq" component={() => <div>FAQ Page</div>} />
  </div>
);

export default App;
