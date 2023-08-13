import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";

export const HeaderBar = () => {
  // return <h4>School Management System</h4>;
  return (
    <Navbar color="secondary" light>
      <NavbarBrand>School Management System</NavbarBrand>
      <Nav>
        <Link to={"/student"} style={{ textDecoration: "none" }}>
          <NavItem style={{ margin: 10, color: "black" }}> Student</NavItem>
        </Link>
        <Link to={"/teacher"} style={{ textDecoration: "none" }}>
          <NavItem style={{ margin: 10, color: "black" }}>Teacher</NavItem>
        </Link>
        <Link to={"/teacher"} style={{ textDecoration: "none" }}>
          <NavItem style={{ margin: 10, color: "black" }}>Class</NavItem>
        </Link>
        <Link to={"/teacher"} style={{ textDecoration: "none" }}>
          <NavItem style={{ margin: 10, color: "black" }}> Subject</NavItem>
        </Link>
      </Nav>
    </Navbar>
  );
};
