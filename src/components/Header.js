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
      <a style={styles.header} href="#">
        ABOUT
      </a>
      <a style={styles.header} href="#">
        CONTACT
      </a>
    </div>
  );
};

export default Header;
