import React from "react";
const styles = {
  img: {
    width: "400px",
    height: "auto",
  },
  small: {
    color: "rgb(245, 236, 140)",
    fontSize: "10px",
  },
};
const Container = () => {
  return (
    <div
      className=" d-flex justify-content-between flex-wrap pb-5"
      style={styles.container}
    >
      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <a href="https://petermodavis.github.io/provisions/">
          <img
            style={styles.img}
            className="image-fluid "
            src="./images/pervisions.png"
            alt="fireplace and menu"
          />
        </a>
        <div>
          <small style={styles.small}>Ingredients and Winepairing</small>
        </div>
      </div>
      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <a href="https://petermodavis.github.io/portfolio-2/">
          <img
            style={styles.img}
            className="image-fluid "
            src="./images/portfolio-2.png"
            alt="beatiful plants portfolio"
          />
        </a>
        <div>
          <small style={styles.small}>Portfolio 2</small>
        </div>
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <a href="https://fung-id-final.herokuapp.com/login">
          <img
            style={styles.img}
            className="image-fluid "
            src="./images/mushroom.png"
            alt="mushroom website"
          />
        </a>
        <div>
          <small style={styles.small}>Mushroom Foraging Website</small>
        </div>
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <a href="https://petermodavis.github.io/employee-directory/">
          <img
            style={styles.img}
            className="image-fluid "
            src="./images/employee-dir.png"
            alt="list of employees website"
          />
        </a>
        <div>
          <small style={styles.small}>Employee Directory</small>
        </div>
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <a href="https://petermodavis.github.io/coding-quiz-challenge/">
          <img
            style={styles.img}
            className="image-fluid "
            src="./images/quiz.png"
            alt="quiz app"
          />
        </a>
        <div>
          <small style={styles.small}>Web Development Quiz</small>
        </div>
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <a href="https://petermodavis.github.io/work-day-scheduler/">
          <img
            style={styles.img}
            className="image-fluid "
            col-12
            src="./images/day-planner.png"
            alt="day planner app"
          />
        </a>
        <div>
          <small style={styles.small}>Day Planner</small>
        </div>
      </div>
    </div>
  );
};

export default Container;
