import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import useLockBody from "../hooks/useLockBody";

const Header = () => {
  const [menu, setMenu] = useState(false);
  useLockBody(menu);

  const showMenu = menu ? "translateX(0)" : "";

  return (
    <header>
      <nav className="wrapper flex justify-between items-center py-6">
        <div>
          <img src="/images/gaia.svg" alt="Project Gaia Logo" />
        </div>
        <div>
          <ul
            className="nav flex justify-between items-center gap-x-7"
            style={{ transform: showMenu }}
          >
            <li className="font-semibold">
              <a href="#">About</a>
            </li>
            <li className="font-semibold">
              <a href="#">Projects</a>
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
