import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { isVisible, onClickSignUp } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Home Page</Link>
        <Link to="/signup" onClick={onClickSignUp}>
          Sign Up
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
