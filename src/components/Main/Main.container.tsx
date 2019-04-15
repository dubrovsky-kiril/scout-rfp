import * as React from "react";
import Main from "./Main";

const Button = React.lazy(() => import("components/Button/Button"));
const Graphics = React.lazy(() => import("components/Graphics/Graphics"));
const RegularForm = React.lazy(() =>
  import("components/RegularForm/RegularForm")
);

const routes = [
  { path: "/", component: Button },
  { path: "/graphics", component: Graphics },
  { path: "/regular-form", component: RegularForm }
];

const MainContainer = () => {
  return <Main routes={routes} />;
};

export default MainContainer;
