import "normalize.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "components/App/App.container";

const render = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept(() => render(App));
}
