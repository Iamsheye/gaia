const Header = () => {
  return (
    <header>
      <nav className="wrapper flex justify-between items-center py-6">
        <div>
          <img src="/images/gaia.svg" alt="Project Gaia Logo" />
        </div>
        <div>
          <ul className="flex justify-between items-center gap-x-7">
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
      </nav>
    </header>
  );
};

export default Header;
