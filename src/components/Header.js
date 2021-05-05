import React from "react";

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
      <a className="headerA" style={styles.header} href="#">
        ABOUT
      </a>
      <a className="headerA" style={styles.header} href="#">
        PETER MODAVIS
      </a>
      <a className="headerA" style={styles.header} href="#">
        CONTACT
      </a>
    </div>
  );
};

export default Header;
