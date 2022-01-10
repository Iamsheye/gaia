import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import useLockBody from "../hooks/useLockBody";
import { Link } from "react-router-dom";

interface IHeader {
  projects?: boolean;
  search?: string;
  setSearch?: any;
}

const Header = ({ projects, search, setSearch }: IHeader) => {
  const [menu, setMenu] = useState(false);
  useLockBody(menu);

  const showMenu = menu ? "translateX(0)" : "";
  const nav = "wrapper flex justify-between items-center py-6";

  return (
    <header>
      <nav className={projects ? `${nav} nav-projects` : nav}>
        <div>
          <Link to="/">
            <img src="/images/gaia.svg" alt="Project Gaia Logo" />
          </Link>
        </div>
        {projects && (
          <div>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search for projects"
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
              className="search rounded-md py-3 pl-6 bg-[#f7f7f7] w-[225px] lg:w-[402px]"
            />
          </div>
        )}
        <div>
          <ul
            className="nav flex justify-between items-center gap-x-7"
            style={{ transform: showMenu }}
          >
            <li className="font-semibold">
              <a href="#">About</a>
            </li>
            <li className="font-semibold">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="font-semibold text-primary">
              <a href="#">Sign In</a>
            </li>
            <li>
              <button className="font-semibold bg-primary text-white rounded-md py-5 px-8">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <Hamburger
            rounded
            toggled={menu}
            toggle={setMenu}
            distance="sm"
            size={36}
            color="#00995F"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
