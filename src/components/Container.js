import React from "react";
import Welcome from "./Welcome";
import Card from "./Card";
import LearningLog from "./LearningLog";

import { Element } from "react-scroll";

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

const Container = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Welcome />
      </div>
      <div></div>
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
        <Element id="learning-log" name="learning-log">
          <LearningLog />
        </Element>
      </div>
    </div>
  );
};

export default Container;
