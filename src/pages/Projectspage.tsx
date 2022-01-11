import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project, { IProject } from "../components/Project";

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
  const [projectsAPI, setProjectsAPI] = useState<IProject[]>();
  const [projects, setProjects] = useState<IProject[]>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === "") {
      setProjects(projectsAPI);
    } else {
      setProjects(() =>
        projectsAPI?.filter((project) =>
          project.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://ga-ia.herokuapp.com/project");
        setProjects(res.data.data);
        setProjectsAPI(res.data.data);
        setLoading(false);
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
    <>
      <Header setSearch={setSearch} search={search} projects />
      <section className="py-8">
        <div className="wrapper">
          <h2 className="text-dark text-center font-semibold text-[1.5rem] leading-[130%] md:text-[2rem] mb-2 max-w-[584px] mx-auto">
            Our Projects
          </h2>
          <p className="text-dark text-center leading-[135%] max-w-[418px] mx-auto mb-10">
            Here are some of our projects
          </p>
          {!loading ? (
            <div className="md:grid gap-x-3 gap-y-8 grid-cols-12 place-items-center mb-10">
              {projects?.map((project) => (
                <Project
                  key={project._id}
                  _id={project._id}
                  name={project.name}
                  image_url={project.image_url}
                  project_url={project.project_url}
                  paypal_url={project.paypal_url}
                  // org={project.org}
                  // target={project.target}
                  // progress={project.progress}
                />
              ))}
            </div>
          ) : (
            <section className="flex justify-center">
              <HashLoader color="#00995f" />
            </section>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
