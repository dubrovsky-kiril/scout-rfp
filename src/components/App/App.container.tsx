import * as React from "react";
import App from "./App";

const AppContainer: React.FC = () => {
  const [isBundleFetched, setBundleFetchStatus] = React.useState(false);

  React.useEffect(() => {
    if (document.getElementById("loader")) {
      document.getElementById("loader").remove();
    }
    setBundleFetchStatus(true);
  }, []);

  return isBundleFetched ? <App /> : null;
};

export default AppContainer;
