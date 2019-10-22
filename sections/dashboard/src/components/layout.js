import React from "react";
import { Link } from "gatsby";
import "./layout.css";

import { IdentityContextProvider } from "react-netlify-identity-widget";

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider>
      <header>header</header>
      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;
