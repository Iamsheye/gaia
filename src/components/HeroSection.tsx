import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="wrapper py-8">
      <div className="md:flex justify-between">
        <div className="hero-text">
          <h1 className="mb-2 font-bold text-center text-[2rem] leading-[42px] md:text-[2.5rem] md:leading-[55px] md:text-left">
            Together we can make our world beautiful. Together, with{" "}
            <span className="text-primary">Gaia</span>
          </h1>
          <p className="text-dark leading-[22px] text-center md:text-left">
            We have made it easier for you to donate to your favourite causes
            and we will send you emails on their progress to show you our
            transperency with your money
          </p>
          <div className="mx-auto w-fit items-center gap-x-8 mt-8 md:flex md:mx-0">
            <Link to="/projects">
              <button className="font-semibold bg-primary text-white rounded-md py-5 px-8 mb-10 md:mb-0 w-[300px] md:w-fit">
                Donate Now
              </button>
            </Link>
            <div className="flex items-center gap-x-4 cursor-pointer w-fit mx-auto md:mx-0">
              <img src="/images/learn-more.svg" alt="Learn More SVG" />
              <p className="font-semibold text-dark leading-[22px]">
                Learn More
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-20">
            <img
              src="/images/protected.svg"
              alt="Protected By Logo"
              className="mx-auto md:mx-0"
            />
            <div className="flex items-center gap-x-8 mt-5 justify-center md:mt-8 md:justify-start">
              <img src="/images/stripe.svg" alt="Stripe Logo" />
              <img src="/images/flw.svg" alt="Flutterwave Logo" />
            </div>
          </div>
        </div>
        <div className="self-center hero-img mt-7 md:mt-0">
          <img
            src="/images/hero-image.png"
            alt=""
            width="100%"
            className="hidden md:block"
          />
          <img
            src="/images/hero-image-mobile.png"
            alt=""
            width="100%"
            className="block md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
