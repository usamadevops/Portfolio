import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor's Degree",
    years: "2017 - 2021",
    content:
      "Graduated from one of the fine universities in Pakistan in Computer Science",
  },
  {
    id: 2,
    title: "College Degree",
    years: "2015 - 2017",
    content:
      "Started to develop a mindset at this stage of my life to be a Solver.",
  },
  {
    id: 3,
    title: "High School",
    years: "2012 - 2015",
    content:
      "Learned to Discipline my habits of life to bring change for the future.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Project Manager",
    years: "2022 - Present",
    content:
      "Got an opportunity to Lead a large scale project in terms of Development ",
  },
  {
    id: 2,
    title: "React Native Developer / UI",
    years: "2020 - Present",
    content:
      "Polished my UI UX skills with React Native development by working with clients.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    years: "2020 - Present",
    content:
      "Analyzed my interests and user needs and set myself on a career path of UI/UX.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
