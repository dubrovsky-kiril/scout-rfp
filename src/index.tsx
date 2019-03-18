import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const render = Component => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) module.hot.accept(() => render(App));
