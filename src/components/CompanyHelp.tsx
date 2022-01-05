const CompanyHelp = () => {
  return (
    <section className="bg-[#f7f7f7] pt-16">
      <div className="wrapper">
        <h2 className="text-dark text-center font-semibold text-[1.5rem] leading-[130%] md:text-[2rem] mb-2 max-w-[584px] mx-auto">
          Companies who want to help us in our goals
        </h2>
        <p className="text-dark text-center leading-[135%] max-w-[418px] mx-auto mb-10">
          Here are some amazing firms we are patnering with to help the corners
          of the earth become better
        </p>
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 pb-10 md:flex md:gap-x-4 md:items-center md:justify-between">
          <div className="col-span-6">
            <img
              src="/images/mongodb.svg"
              alt="Mongo DB Logo"
              className="mx-auto"
            />
          </div>
          <div className="col-span-6">
            <img
              src="/images/dailymotion.svg"
              alt="Daily Motion Logo"
              className="mx-auto"
            />
          </div>
          <div className="col-span-6">
            <img
              src="/images/verizon.svg"
              alt="Verizon Logo"
              className="mx-auto"
            />
          </div>
          <div className="col-span-6">
            <img src="/images/nirex.svg" alt="Nirex Logo" className="mx-auto" />
          </div>
          <div className="col-span-6">
            <img
              src="/images/netflix.svg"
              alt="Netflix Logo"
              className="mx-auto"
            />
          </div>
          <div className="col-span-6">
            <img
              src="/images/google.svg"
              alt="Google Logo"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHelp;
