import * as React from "react";
import Header from "./Header";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/graphics",
    title: "Graphics"
  },
  {
    to: "/regular-form",
    title: "Regular form"
  }
];

const HeaderContainer: React.FC = () => {
  return <Header links={links} />;
};

export default HeaderContainer;
