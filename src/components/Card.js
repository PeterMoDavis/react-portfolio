import React from "react";

const Card = (props) => {
  const styles = {
    img: {
      width: "400px",
      height: "auto",
    },
    small: {
      color: "rgb(245, 236, 140)",
      fontSize: "10px",
    },
    i: {
      color: "rgb(245, 236, 140)",
    },
    overlay: {
      position: "relative",
    },
  };
  return (
    <div className="mt-5 col-12 col-md-6 col-lg-4 text-center">
      <a href={props.href}>
        <img
          style={styles.img}
          className="image-fluid "
          src={props.src}
          alt={props.alt}
        />
      </a>
      <div id="overlay">
        <h2>Hello</h2>
      </div>
      <div>
        <small style={styles.small}>
          {props.description}{" "}
          <span>
            <a href={props.github}>
              <i style={styles.i} className="ml-2 fab fa-lg fa-github"></i>
            </a>
          </span>
        </small>
      </div>
    </div>
  );
};

export default Card;
