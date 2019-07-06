import React from "react";
import App from "./App";

const AppContainer = () => {
  const [isBundleFetching, toggleBundleFetchStatus] = React.useState(true);

  React.useEffect(() => {
    const loaderElement = document.getElementById("loader-container");

    if (loaderElement) {
      loaderElement.className = "hide";
      // loaderElement.remove();
    }

    toggleBundleFetchStatus(!isBundleFetching);
  }, []);

  return isBundleFetching ? <span>Loading..</span> : <App />;
};

export default AppContainer;
