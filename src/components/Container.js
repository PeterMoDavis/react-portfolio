import React, { Component } from "react";
import Welcome from "./Welcome";
import Card from "./Card";
import LearningLog from "./LearningLog";

const cards = [
  {
    title: "Boilerplate",
    href: "https://boilerplate-petermodavis.herokuapp.com/",
    src: "./images/boilerplate.png",
    alt: "Boilerplate App",
    description:
      "Save, find, and filter your coding boilerplate all in one convenient place.",
    github: "https://github.com/PeterMoDavis/boilerplate",
    technologies: [
      <i class="fab fa-html5 fa-md ml-2"></i>,
      <i class="fab fa-css3-alt fa-md ml-2"></i>,
      <i class="fab fa-js fa-md ml-2"></i>,
      <i className="fab fa-react fa-md ml-2"></i>,
      <i class="fab fa-bootstrap fa-md ml-2"></i>,
      <i class="fab fa-node-js fa-md ml-2"></i>,
      <i class="fab fa-mdb fa-md ml-2"></i>,
    ],
    specialNote:
      '(just click on "Boilerplate" in the header to get to the dashboard.)',
  },

  {
    title: "Portfolio 2",
    href: "https://petermodavis.github.io/portfolio-2/",
    src: "./images/portfolio-2.png",
    alt: "beatiful plants portfolio",
    description:
      "A beautifully green portfolio complete with light-mode and dark-mode.",
    github: "https://github.com/PeterMoDavis/portfolio-2",
    technologies: [
      <i class="fab fa-html5 fa-md ml-2"></i>,
      <i class="fab fa-css3-alt fa-md ml-2"></i>,
      <i class="fab fa-js fa-md ml-2"></i>,
      <i class="fab fa-bootstrap fa-md ml-2"></i>,
    ],
  },
  {
    title: "FUNG-ID",
    href: "https://fung-id-final.herokuapp.com/login",
    src: "./images/mushroom.png",
    alt: "mushroom website",
    description:
      "Save a mushroom pic with title and description and it's coordinates are shown on the map.",
    github: "https://github.com/PeterMoDavis/fung-id-1",
    technologies: [
      <i class="fab fa-html5 fa-md ml-2"></i>,
      <i class="fab fa-css3-alt fa-md ml-2"></i>,
      <i class="fab fa-js fa-md ml-2"></i>,
      <i class="fab fa-bootstrap fa-md ml-2"></i>,
      <i class="fab fa-node-js fa-md ml-2"></i>,
      <span className="ml-2">mySQL</span>,
    ],
    specialNote: "(Email: gary@email.com Password: garygary)",
  },
  {
    title: "Provisions",
    href: "https://petermodavis.github.io/provisions/",
    src: "./images/pervisions.png",
    alt: "fireplace and menu",
    description:
      "Enter your ingredients and with the help of a 3rd party API we'll give you a recipe and wine-pairing.",
    github: "https://github.com/PeterMoDavis/provisions",
    technologies: [
      <i class="fab fa-html5 fa-md ml-2"></i>,
      <i class="fab fa-css3-alt fa-md ml-2"></i>,
      <i class="fab fa-js fa-md ml-2"></i>,
    ],
  },

  {
    title: "Employee Directory",
    href: "https://petermodavis.github.io/employee-directory/",
    src: "./images/employee-dir.png",
    alt: "list of employees website",
    description:
      "An Employee Directory shows all employees in the 'API'. Filter by first name, last name, DOB or phone number.",
    github: "https://github.com/PeterMoDavis/employee-directory",
    technologies: [
      <i class="fab fa-html5 fa-md ml-2"></i>,
      <i class="fab fa-css3-alt fa-md ml-2"></i>,
      <i class="fab fa-js fa-md ml-2"></i>,
      <i className="fab fa-react fa-md ml-2"></i>,
      <i class="fab fa-bootstrap fa-md ml-2"></i>,
    ],
  },
];

class Container extends Component {
  state = {
    projects: cards,
  };

  componentDidMount() {
    console.log(this.state.projects);
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-3">
          <Welcome />
        </div>
        <div
          className="d-flex justify-content-around container  mt-3"
          style={{ color: "blue" }}
        >
          <i
            className="fab fa-react fa-2x"
            style={{ color: "RGB(255, 103, 92)" }}
          ></i>
          <i
            className="fab fa-mdb fa-2x"
            style={{ color: "RGB(252, 186, 3)" }}
          ></i>
          <span style={{ fontSize: "24px", color: "RGB(252, 244, 3)" }}>
            ex
          </span>
          <i
            className="fab fa-node fa-2x"
            style={{ color: "RGB(78, 252, 3)" }}
          ></i>
        </div>
        <div className="card-container d-flex justify-content-between align-content-baseline flex-wrap pb-5">
          {cards.map((each, index) => {
            return (
              <Card
                key={index}
                title={each.title}
                href={each.href}
                src={each.src}
                alt={each.alt}
                description={each.description}
                github={each.github}
                technologies={each.technologies}
                specialNote={each.specialNote}
              />
            );
          })}
        </div>
        <div>
          <LearningLog />
        </div>
      </div>
    );
  }
}

export default Container;
