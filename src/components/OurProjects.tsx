import { useState } from "react";
import Project from "./Project";

const OurProjects = () => {
  const [projects, setProjects] = useState([
    {
      image: "antartica",
      title: "Help Save the Ice Caps of Antarctica",
      org: "NATGEO",
      target: "41.3k",
      progress: 80,
    },
    {
      image: "congo",
      title: "Help Save the Golden Lakes of Congo",
      org: "NATGEO",
      target: "33.3k",
      progress: 40,
    },
    {
      image: "china",
      title: "Help Save the Grasslands of China",
      org: "Project Gaia",
      target: "120.3k",
      progress: 90,
    },
    {
      image: "argentina",
      title: "Help Preserve the Lakes of Argentina",
      org: "Project Gaia",
      target: "90.3k",
      progress: 50,
    },
  ]);

  return (
    <section className="pt-16 bg-white">
      <div className="wrapper">
        <h2 className="text-dark text-center font-semibold text-[1.5rem] leading-[130%] md:text-[2rem] mb-2 max-w-[584px] mx-auto">
          Our Projects
        </h2>
        <p className="text-dark text-center leading-[135%] max-w-[418px] mx-auto mb-10">
          Here are some of our projects
        </p>
        <div className="md:flex gap-x-3 justify-center mb-10">
          {projects.map((project) => (
            <Project
              image={project.image}
              title={project.title}
              org={project.org}
              target={project.target}
              progress={project.progress}
            />
          ))}
        </div>
        <div className="mb-10"></div>
      </div>
    </section>
  );
};

export default OurProjects;
