import React from "react";

const Footer = () => {
  const styles = {
    footer: {},
    container: {
      lineHeight: "2",
      position: "relative",
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
      className=" d-flex flex-column align-items-center pt-4 pb-4"
      style={styles.container}
    >
      <div style={styles.a}>CONTACT</div>
      <div className="border-top border-dark pt-3">
        <a
          className="footerA "
          target="_blank"
          style={styles.a}
          href="https://github.com/PeterMoDavis"
        >
          GITHUB
        </a>
      </div>
      <div>
        <a
          className="footerA"
          target="_blank"
          style={styles.a}
          href="https://www.linkedin.com/in/peter-modavis-76346b204/"
        >
          LINKED IN
        </a>
      </div>
      <div style={styles.a}>215-758-1982</div>
      <div style={styles.a}>
        {" "}
        <a style={styles.a} href="mailto:email">
          pmodavis.webdev@gmail.com
        </a>{" "}
      </div>

      <small className="mt-3">© 2021 Peter MoDavis All Rights Reserved </small>
    </div>
  );
};

export default Footer;
