import React from "react";
const styles = {
  welcome: {
    fontFamily: "Rubik",
    fontSize: "100px",
    fontWeight: "900",
    zIndex: "3",
    top: "40%",
    position: "relative",
    letterSpacing: "3px",
    transition: "all 1s",

    height: "100%",
    width: "fit-content",
  },
  img: {
    width: "100px",
  },
};
const Welcome = () => {
  return (
    <h1 className="welcome text-center    col" style={styles.welcome}>
      works.
    </h1>
  );
};

export default Welcome;
