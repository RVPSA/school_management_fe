import React from "react";
import { HeaderBar } from "./header";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <div>
        <div
          style={{
            backgroundColor: "#f9c365",
            minHeight: "100vh",
            paddingTop: 30,
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
