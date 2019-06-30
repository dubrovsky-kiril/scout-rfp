import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/App.container";

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept(() => render(App));
}
