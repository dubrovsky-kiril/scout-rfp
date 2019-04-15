import * as React from "react";
import { NavLink } from "react-router-dom";

interface IHeader {
  links: Array<{
    title: string;
    to: string;
  }>;
}

const Header: React.FC<IHeader> = ({ links }) => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink to={link.to}>{link.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
