import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-7 md:mt-12">
      <div className="wrapper">
        <div className="grid grid-cols-12 gap-y-4 md:flex justify-between">
          <p className="leading-[135%] col-span-6 order-2 md:order-1">
            Privacy Policy
          </p>
          <div className="col-span-12 order-1 md:order-2 justify-self-center">
            <Link to="/">
              <img src="/images/gaia.svg" alt="Project Gaia Logo" />
            </Link>
          </div>
          <p className="leading-[135%] col-span-6 order-3 text-right">
            Terms and Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
