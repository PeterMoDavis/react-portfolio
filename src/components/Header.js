import React from "react";
import { Link } from "react-router-dom";

const styles = {
  header: {
    fontWeight: "400",
    letterSpacing: "4px",
    textDecoration: "none",
    color: "white",
  },
};
const Header = () => {
  return (
    <div className="d-flex justify-content-between container mt-4">
      <Link style={{ textDecoration: "none" }} to="/about">
        <a className="headerA" style={styles.header} href="#">
          ABOUT
        </a>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/">
        <a className="headerA" style={styles.header} href="#">
          PETER MODAVIS
        </a>
      </Link>

      <a
        className="headerA"
        target="_blank"
        style={styles.header}
        href="https://docs.google.com/document/d/1moFOJg9zNPwFFnuYSDPCptRZ0bRQZEmRZi3yJaL18Mc/edit"
      >
        RESUME
      </a>
    </div>
  );
};

export default Header;
