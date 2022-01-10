import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default ProjectsPage;
