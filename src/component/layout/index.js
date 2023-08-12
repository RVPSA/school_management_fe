import React from "react";
import { HeaderBar } from "./header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
