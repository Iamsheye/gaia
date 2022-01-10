import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const projectsArr = [
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
];

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState<typeof projectsArr>(projectsArr);

  useEffect(() => {
    if (search === "") {
      setProjects(projectsArr);
    } else {
      setProjects((elem) =>
        elem.filter((project) => project.title.toLowerCase().includes(search))
      );
    }

    console.log(
      projects.filter((project) => project.title.toLowerCase().includes(search))
    );
    console.log(search);
  }, [search]);

  return (
    <>
      <Header setSearch={setSearch} search={search} projects />
      <section className="py-16">
        <div className="wrapper">
          <h2 className="text-dark text-center font-semibold text-[1.5rem] leading-[130%] md:text-[2rem] mb-2 max-w-[584px] mx-auto">
            Our Projects
          </h2>
          <p className="text-dark text-center leading-[135%] max-w-[418px] mx-auto mb-10">
            Here are some of our projects
          </p>
          <div className="md:grid gap-x-3 gap-y-8 grid-cols-12 place-items-center mb-10">
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
