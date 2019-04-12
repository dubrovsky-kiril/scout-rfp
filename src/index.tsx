import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "components/App/App";

const removeLoader = () => {
  const [isMainBundleFetched, setMainBundleFetchStatus] = React.useState(false);

  React.useEffect(() => {
    if (document.getElementById("loader")) {
      document.getElementById("loader").remove();
    }
    setMainBundleFetchStatus(true);
  }, []);

  if (!isMainBundleFetched) {
    return null;
  }
};

const render = Component => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <BrowserRouter>
      <Component removeLoader={removeLoader} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept(() => render(App));
}
