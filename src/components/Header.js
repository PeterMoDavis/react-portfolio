import React from "react";
import { Link } from "react-router-dom";
import LearningLog from "./LearningLog";

const styles = {
  header: {
    fontWeight: "400",
    letterSpacing: "4px",
    textDecoration: "none",
    color: "white",
  },

  h5: {
    letterSpacing: "20px",
    color: "rgb(245, 236, 140)",
  },
};
const Header = () => {
  return (
    <div>
      <div className="text-center container mt-5">
        <h5 style={styles.h5}>PETER MODAVIS</h5>
      </div>

      <div className="d-flex justify-content-between container mt-4">
        <Link style={{ textDecoration: "none" }} to="/">
          <a className="headerA text-center" style={styles.header} href="#">
            HOME
          </a>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <a className="headerA text-center" style={styles.header} href="#">
            ABOUT
          </a>
        </Link>

        <a
          className="headerA text-center"
          target="_blank"
          style={styles.header}
          href="https://docs.google.com/document/d/1moFOJg9zNPwFFnuYSDPCptRZ0bRQZEmRZi3yJaL18Mc/edit"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Header;
