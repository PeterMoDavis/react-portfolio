import React from "react";
import Welcome from "./Welcome";
import Card from "./Card";

const cards = [
  {
    href: "https://petermodavis.github.io/provisions/",
    src: "./images/pervisions.png",
    alt: "fireplace and menu",
    description: "Ingredients and Winepairing",
    github: "https://github.com/PeterMoDavis/provisions",
  },
  {
    href: "https://petermodavis.github.io/portfolio-2/",
    src: "./images/portfolio-2.png",
    alt: "beatiful plants portfolio",
    description: "Portfolio 2",
    github: "https://github.com/PeterMoDavis/portfolio-2",
  },
  {
    href: "https://fung-id-final.herokuapp.com/login",
    src: "./images/mushroom.png",
    alt: "mushroom website",
    description: "Mushroom Foraging Website",
    github: "https://github.com/PeterMoDavis/fung-id-1",
  },
  {
    href: "https://petermodavis.github.io/employee-directory/",
    src: "./images/employee-dir.png",
    alt: "list of employees website",
    description: "Employee Directory",
    github: "https://github.com/PeterMoDavis/employee-directory",
  },
  {
    href: "https://petermodavis.github.io/coding-quiz-challenge/",
    src: "./images/quiz.png",
    alt: "quiz app",
    description: "Web Development Quiz",
    github: "https://github.com/PeterMoDavis/coding-quiz-challenge",
  },
  {
    href: "https://petermodavis.github.io/work-day-scheduler/",
    src: "./images/day-planner.png",
    alt: "day planner app",
    description: "Day Planner",
    github: "https://github.com/PeterMoDavis/work-day-scheduler",
  },
];

const Container = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Welcome />
      </div>

      <div className=" d-flex justify-content-between flex-wrap pb-5">
        {cards.map((each, index) => {
          return (
            <Card
              key={index}
              href={each.href}
              src={each.src}
              alt={each.alt}
              description={each.description}
              github={each.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;
