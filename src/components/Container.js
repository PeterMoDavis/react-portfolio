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
      <span className="ml-2">ex</span>,
    ],
    specialNote:
      '(just click on "Boilerplate" in the header to get to the dashboard.)',
    tools: "react, mongodb, express, node, bootstrap",
  },
  {
    status: "New!",
    title: "Bigfoot Encounters",
    href: "https://petermodavis.github.io/bigfoot/",
    src: "./images/bigfoot.png",
    alt: "a map of bigfoot sightings",
    description:
      "A simple and silly app showing the current position of the user and descriptions of surrounding bigfoot sightings.",
    github: "https://github.com/PeterMoDavis/bigfoot",
    technologies: [
      <i class="fab fa-html5 fa-md ml-2"></i>,
      <i class="fab fa-css3-alt fa-md ml-2"></i>,
      <i class="fab fa-js fa-md ml-2"></i>,
      <i className="fab fa-react fa-md ml-2"></i>,
      <i class="fab fa-bootstrap fa-md ml-2"></i>,
    ],
    tools: "react, bootstrap",
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
    tools: "react, bootstrap",
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
      <span className="ml-2">ex</span>,
    ],
    specialNote: "(Email: gary@email.com Password: garygary)",
    tools: "express, node, bootstrap",
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
    tools: "javascript",
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
    tools: "react, bootstrap",
  },
];

class Container extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.setState({ projects: cards });
  }

  filterReact() {
    this.setState({ projects: cards }, () => {
      this.setState({
        projects: this.state.projects.filter((each) => {
          return each.tools.match(/react/gi);
        }),
      });
    });
  }

  filterMongo() {
    this.setState({ projects: cards }, () => {
      this.setState({
        projects: this.state.projects.filter((each) => {
          return each.tools.match(/mongo/gi);
        }),
      });
    });
  }

  filterExpress() {
    this.setState({ projects: cards }, () => {
      this.setState({
        projects: this.state.projects.filter((each) => {
          return each.tools.match(/express/gi);
        }),
      });
    });
  }

  filterNode() {
    this.setState({ projects: cards }, () => {
      this.setState({
        projects: this.state.projects.filter((each) => {
          return each.tools.match(/node/gi);
        }),
      });
    });
  }

  filterBootstrap() {
    this.setState({ projects: cards }, () => {
      this.setState({
        projects: this.state.projects.filter((each) => {
          return each.tools.match(/bootstrap/gi);
        }),
      });
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-3">
          <Welcome />
        </div>
        <div className="d-flex justify-content-around container filter-container mt-3">
          <i
            onClick={() => this.filterReact()}
            className="filterIcon fab fa-react fa-2x"
            style={{ color: "RGB(255, 103, 92)" }}
          ></i>
          <i
            onClick={() => this.filterMongo()}
            className="filterIcon fab fa-mdb fa-2x"
            style={{ color: "RGB(252, 186, 3)" }}
          ></i>
          <span
            className="filterIcon"
            onClick={() => this.filterExpress()}
            style={{ fontSize: "24px", color: "RGB(252, 244, 3)" }}
          >
            ex
          </span>
          <i
            onClick={() => this.filterNode()}
            className="filterIcon fab fa-node fa-2x"
            style={{ color: "RGB(78, 252, 3)" }}
          ></i>
          <i
            onClick={() => this.filterBootstrap()}
            className="filterIcon fab fa-bootstrap fa-2x"
            style={{ color: "rgb(0, 255, 234)" }}
          ></i>
        </div>
        <div className="card-container d-flex justify-content-between align-content-baseline flex-wrap pb-5">
          {this.state.projects.map((each, index) => {
            return (
              <Card
                key={index}
                status={each.status}
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
