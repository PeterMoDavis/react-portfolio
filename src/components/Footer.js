import React from "react";

const Footer = () => {
  const styles = {
    footer: {},
    container: {
      lineHeight: "2",
      position: "realtive",
      bottom: "0",
      width: "100%",
      backgroundColor: "RGB(245, 151, 135)",
      fontFamily: "Playfair",
      color: "black",
    },
    a: {
      fontFamily: "Archivo",
      letterSpacing: "4px",
      color: "black",
      textDecoration: "none",
    },
  };
  return (
    <div
      className=" d-flex flex-column align-items-center pt-5 pb-4"
      style={styles.container}
    >
      <div className="border-top border-dark pt-3">
        <a className="footerA " style={styles.a} href="">
          GITHUB
        </a>
      </div>
      <div>
        <a className="footerA" style={styles.a} href="">
          LINKED IN
        </a>
      </div>

      <small className="mt-3">© 2021 Peter MoDavis All Rights Reserved </small>
    </div>
  );
};

export default Footer;
