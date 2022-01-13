import axios from "axios";
import { useEffect, useState } from "react";
import Project, { IProject } from "./Project";
import toast from "react-hot-toast";

const OurProjects = () => {
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://ga-ia.herokuapp.com/project");
        console.log(res.data.data);
        setProjects(res.data.data.slice(0, 4));
      } catch (e) {
        toast.error("Error fetching projects", {
          duration: 5000,
          style: { backgroundColor: "#f44336dd", color: "#eeeeee" },
        });
      }
    };
    fetchProjects();
  }, []);

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
          {projects?.map((project) => (
            <Project
              key={project._id}
              _id={project._id}
              name={project.name}
              project_headline={project.project_headline}
              image_url={project.image_url}
              project_url={project.project_url}
              paypal_url={project.paypal_url}
              // org={project.org}
              // target={project.target}
              // progress={project.progress}
            />
          ))}
        </div>
        <div className="mb-10"></div>
      </div>
    </section>
  );
};

export default OurProjects;
