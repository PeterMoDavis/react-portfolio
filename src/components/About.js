import React from "react";
const styles = {
  img: {
    width: "700px",
  },
  p: {
    color: "black",
  },
  rainbow: {
    height: "40px",
    color: "black",
  },
  i: {
    fontSize: "35px",
  },
  h3: {
    color: "black",
    letterSpacing: "2px",
  },
};
const About = () => {
  return (
    <div
      style={{ background: "yellow" }}
      className="d-flex flex-md-row align-items-center flex-column-reverse mt-4"
    >
      <img style={styles.img} src="./images/peter-torso.png" alt="" />
      <div className="container mt-5 mb-0">
        <h3 style={styles.h3} className="text-center d-block d-md-none">
          PETER MODAVIS
        </h3>
        <h5 style={styles.h3} className="text-center d-block d-md-none">
          WEBDEV
        </h5>
        <p style={styles.p}>
          Former musician, stay-at-home dad and recent graduate of UPenn Full
          Stack Bootcamp. Proficient in HTML, CSS, Javascript, Git, Bootstrap,
          NodeJS, MySQL, Sequelize, Express, React, MongoDB, Logic Pro X,
          Pixelmator playing the banjo and much more. Self-learned front end web
          development for one year prior to bootcamp for a deeper understanding.
          Has bachelors in English from Temple University.
          <strong> Loves to learn!</strong>
          <span>
            <img id="heart" className="mx-2" src="./images/heart.png" alt="" />
          </span>
          <div className="mt-5 d-flex justify-content-around wrap">
            <i id="red" style={styles.i} className="fab fa-git"></i>
            <i id="orange" style={styles.i} className="fab fa-html5"></i>
            <i id="yellow" style={styles.i} className="fab fa-css3"></i>
            <i id="green" style={styles.i} className="fab fa-react"></i>
            <i id="blue" style={styles.i} className="fab fa-js"></i>
            <i id="purple" style={styles.i} className="fab fa-bootstrap"></i>
            <i id="indigo" style={styles.i} className="fab fa-node-js"></i>
            <i style={styles.i} className="fab fa-mdb"></i>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
