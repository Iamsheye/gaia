const HeroSection = () => {
  return (
    <section className="wrapper py-8">
      <div className="flex justify-between">
        <div className="hero-text">
          <h1 className="font-bold text-[2.5rem] leading-[55px] mb-2">
            Together we can make our world beautiful. Together, with{" "}
            <span className="text-primary">Gaia</span>
          </h1>
          <p className="text-dark leading-[22px]">
            We have made it easier for you to donate to your favourite causes
            and we will send you emails on their progress to show you our
            transperency with your money
          </p>
          <div className="flex items-center gap-x-8 mt-8">
            <button className="font-semibold bg-primary text-white rounded-md py-5 px-8">
              Donate Now
            </button>
            <div className="flex items-center gap-x-4 cursor-pointer">
              <img src="/images/learn-more.svg" alt="Learn More SVG" />
              <p className="font-semibold text-dark leading-[22px]">
                Learn More
              </p>
            </div>
          </div>
          <div className="mt-20">
            <img src="/images/protected.svg" alt="Protected By Logo" />
            <div className="flex items-center gap-x-8 mt-8">
              <img src="/images/stripe.svg" alt="Stripe Logo" />
              <img src="/images/flw.svg" alt="Flutterwave Logo" />
            </div>
          </div>
        </div>
        <div className="self-center hero-img">
          <img src="/images/hero-image.png" alt="" width="100%" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
