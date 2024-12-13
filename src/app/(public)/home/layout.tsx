import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
