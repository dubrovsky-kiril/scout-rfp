import * as React from "react";
import { Route, Link } from "react-router-dom";
import RegularForm from "./components/RegularForm/RegularForm";

const App: React.FunctionComponent = () => (
  <>
    <header>
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
    </header>

    <main>
      <Route
        path="/"
        exact
        render={() => (
          <RegularForm
            formId="productForm"
            inputId="productId"
            inputLabel="Product id"
            inputType="text"
            onSubmit={e => {
              e.preventDefault();

              console.log(e.target);
            }}
            buttonTxt="Submit"
            isInputRequired={true}
          />
        )}
      />
      <Route path="/about" render={() => <div>About Page</div>} />
      <Route path="/faq" render={() => <div>FAQ Page</div>} />
    </main>

    <footer>Footer</footer>
  </>
);

export default App;
