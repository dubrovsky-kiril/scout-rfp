import React from "react";
import App from "./App";

const AppContainer = () => {
  const [isBundleFetched, setBundleFetchStatus] = React.useState(false);

  React.useEffect(() => {
    if (document.getElementById("loader")) {
      document.getElementById("loader").remove();
    }
    setBundleFetchStatus(true);
  }, []);

  return isBundleFetched ? <App /> : <span>Loading..</span>;
};

export default AppContainer;
