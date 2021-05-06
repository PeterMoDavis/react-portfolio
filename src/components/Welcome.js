import React from "react";
const styles = {
  welcome: {
    fontFamily: "Rubik",
    fontSize: "200px",
    fontWeight: "900",
    zIndex: "3",
    top: "40%",
    position: "absolute",
    color: "RGB(255, 103, 92)",
    textShadow: "0px 0px 10px RGB(255, 103, 92)",
    letterSpacing: "3px",
    transition: "all 1s",
  },
  img: {
    width: "100px",
  },
};
const Welcome = () => {
  return (
    <div
      className="d-flex justify-content-center fadeOut align-items-center"
      style={styles.div}
    >
      <h1 className="welcome text-center    col" style={styles.welcome}>
        work.
      </h1>
    </div>
  );
};

export default Welcome;
