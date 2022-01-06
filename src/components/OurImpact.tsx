const OurImpact = () => {
  return (
    <section className="pt-16 md:pb-16 our-impact">
      <div className="wrapper">
        <h2 className="text-dark text-center font-semibold text-[1.5rem] leading-[130%] md:text-[2rem] mb-2 max-w-[584px] mx-auto">
          Our Impact in Numbers
        </h2>
        <p className="text-dark text-center leading-[135%] max-w-[418px] mx-auto mb-10">
          We have helped on numerous projects and here is the summary of it all
        </p>
        <div className="md:flex gap-x-5 justify-center">
          <div className="impact rounded-md pt-6 px-5 pb-8 md:max-w-[373px]">
            <p className="mb-4 text-dark font-semibold text-center md:text-left">
              Number of Projects
            </p>
            <p className="font-bold text-[2rem] leading-[138%] text-center mb-8 md:mb-12 md:text-left md:text-[2.5rem]">
              4130
            </p>
            <div className="flex justify-center md:block">
              <div className="bg-[#00a3651f] w-[56px] h-[56px] grid place-items-center rounded-md md:w-[92px] md:h-[92px]">
                <img
                  src="/images/globe.svg"
                  alt=""
                  className="w-[28px] md:w-auto"
                />
              </div>
            </div>
          </div>
          <div className="impact rounded-md pt-6 px-5 pb-8 md:max-w-[373px]">
            <p className="mb-4 text-dark font-semibold text-center md:text-left">
              Number of Donors
            </p>
            <p className="font-bold text-[2rem] leading-[138%] text-center mb-8 md:mb-12 md:text-left md:text-[2.5rem]">
              123,440
            </p>
            <div className="flex justify-center md:block">
              <div className="bg-[#1DA1F21F] w-[56px] h-[56px] grid place-items-center rounded-md md:w-[92px] md:h-[92px]">
                <img
                  src="/images/profile.svg"
                  alt=""
                  className="w-[28px] md:w-auto"
                />
              </div>
            </div>
          </div>
          <div className="impact rounded-md pt-6 px-5 pb-8 md:max-w-[373px]">
            <p className="mb-4 text-dark font-semibold text-center md:text-left">
              Amount Raised
            </p>
            <p className="font-bold text-[2rem] leading-[138%] text-center mb-8 md:mb-12 md:text-left md:text-[2.5rem]">
              $41,500,012
            </p>
            <div className="flex justify-center md:block">
              <div className="bg-[#FDD83C1f] w-[56px] h-[56px] grid place-items-center rounded-md md:w-[92px] md:h-[92px]">
                <img
                  src="/images/dollar.svg"
                  alt=""
                  className="w-[28px] md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
