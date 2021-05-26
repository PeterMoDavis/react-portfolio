import React from "react";

const Card = (props) => {
  const styles = {
    img: {
      width: "400px",
      height: "auto",
    },
    paragraph: {
      color: "rgb(245, 236, 140)",
      fontSize: "12px",
      margin: "0px 0px",
    },
    i: {
      color: "rgb(245, 236, 140)",
      margin: "0",
    },
    title: {
      color: "RGB(255, 103, 92)",
      fontWeight: "700",
    },
    overlay: {
      position: "absolute",
      top: "50%",
    },
    thumbnail: {
      position: "relative",
    },
  };
  return (
    <div className="mt-5 main-container col-12 col-md-6 col-lg-4 text-center align-items-center d-flex justify-content-center container">
      <div className="thumbnail " style={styles.thumbnail}>
        <h3 style={styles.title}>{props.title}</h3>
        <a href={props.href}>
          <img
            style={styles.img}
            className="image-fluid "
            src={props.src}
            alt={props.alt}
          />
        </a>
      </div>

      <div className="overlay container" style={styles.overlay}>
        <p style={styles.paragraph} className="mt-2">
          {props.description}
          <span>
            <a href={props.github}>
              <i style={styles.i} className="ml-2 fab fa-lg fa-github"></i>
            </a>
          </span>
        </p>

        <p style={styles.i} className="mb-0">
          {props.technologies}
        </p>
        <small className="d-block" style={{ color: "white", fontSize: "10px" }}>
          {props.specialNote}
        </small>
      </div>
    </div>
  );
};

export default Card;
