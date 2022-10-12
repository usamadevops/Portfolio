import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Usama Altaf",
  avatarImage: "/images/usama.png",
  content:
    "I am Usama Altaf, UI/UX Designer & React Native Developer from Taxila, Pakistan. I have insoluble solution to problems and likes to solve them no matter the time it takes to do it.",
};

const progressData = [
  {
    id: 1,
    title: "React & Native Development",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Design",
    percantage: 100,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Project Management",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 21,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of Tea's",
    count: 1800,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 15,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Courses Completed",
    count: 3,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} style={{width:150,height:150}} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://drive.google.com/file/d/1tGHmKkJCNTlVioWEfk3GJ7FOZzNzPrUm/view" className="btn btn-default">
                      Preview Resume
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
