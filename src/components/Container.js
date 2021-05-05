import React from "react";
const styles = {
  img: {
    width: "400px",
    height: "auto",
  },
  container: {},
};
const Container = () => {
  return (
    <div
      className=" d-flex justify-content-between flex-wrap pb-5"
      style={styles.container}
    >
      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <img
          style={styles.img}
          className="image-fluid "
          src="./images/pervisions.png"
          alt=""
        />
      </div>
      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <img
          style={styles.img}
          className="image-fluid "
          src="./images/portfolio-2.png"
          alt=""
        />
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <img
          style={styles.img}
          className="image-fluid "
          src="./images/mushroom.png"
          alt=""
        />
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <img
          style={styles.img}
          className="image-fluid "
          src="./images/employee-dir.png"
          alt=""
        />
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <img
          style={styles.img}
          className="image-fluid "
          src="./images/quiz.png"
          alt=""
        />
      </div>

      <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
        <img
          style={styles.img}
          className="image-fluid "
          col-12
          src="./images/day-planner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Container;
