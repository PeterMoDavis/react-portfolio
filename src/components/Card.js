import React from "react";

const Card = (props) => {
  const styles = {
    paragraph: {
      color: "rgb(245, 236, 140)",
      fontSize: "16px",
      margin: "0px 0px",
    },
    i: {
      color: "rgb(245, 236, 140)",
      margin: "0",
    },
    github: {
      color: "#33fff1",
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
    a: {
      textDecoration: "none",
    },
    small: {
      position: "relative",
      bottom: "10px",
    },
  };
  return (
    <div
      style={styles.cardBody}
      className=" mt-5 main-container col-12 col-lg-6 col-xxl-4 text-center align-items-center d-flex justify-content-center container"
    >
      <div className="thumbnail " style={styles.thumbnail}>
        <h3 style={styles.title}>{props.title}</h3>
        <a href={props.href}>
          <img
            style={styles.img}
            className="image-fluid project-image"
            src={props.src}
            alt={props.alt}
          />
        </a>
      </div>

      <div className="overlay container" style={styles.overlay}>
        <a style={styles.a} href={props.href}>
          <p style={styles.paragraph}>
            {props.description}
            <span>
              <a href={props.github}>
                <i
                  style={styles.github}
                  className="ml-2 fab fa-lg fa-github"
                ></i>
              </a>
            </span>
          </p>

          <p style={styles.i} className="mb-0">
            {props.technologies}
          </p>
          <small
            className="d-block"
            style={{
              color: "white",
              fontSize: "10px",
            }}
          >
            {props.specialNote}
          </small>
        </a>
      </div>
    </div>
  );
};

export default Card;
