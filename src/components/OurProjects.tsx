const OurProjects = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="wrapper">
        <h2 className="text-dark text-center font-semibold text-[1.5rem] leading-[130%] md:text-[2rem] mb-2 max-w-[584px] mx-auto">
          Our Projects
        </h2>
        <p className="text-dark text-center leading-[135%] max-w-[418px] mx-auto mb-10">
          Here are some of our projects
        </p>
        <div className="md:flex gap-x-2 justify-center mb-10">
          <div className="mb-4 flex-1 p-3 rounded-md bg-white box-shadow md:max-w-[275px] md:mb-0">
            <div className="relative mb-4">
              <img
                src="/images/antartica.png"
                alt=""
                width="100%"
                className="rounded-md"
              />
              <div className="grid place-items-center w-8 h-8 bg-white rounded-md absolute top-2 right-2">
                <img src="/images/like.svg" alt="" />
              </div>
            </div>
            <p className="leading-[138%] font-bold mb-3">
              Help Save the Ice Caps of Antarctica
            </p>
            <p className="project-name mb-4 text-dark font-semibold text-[0.75rem] leading-[138%]">
              NATGEO
            </p>
            <div className="mb-7">
              <div className="mb-2 w-full h-2 bg-[#f5f5f5] rounded-[100px]">
                <div className="bg-primary h-2 w-[80%] rounded-[100px]"></div>
              </div>
              <div className="flex justify-between items-center text-dark text-[0.75rem] leading-[138%]">
                <p>
                  Target:{" "}
                  <span className="font-semibold text-black">$41.3k</span>
                </p>
                <p className="font-semibold text-black">80%</p>
              </div>
            </div>
            <button className="btn-primary">Donate Now</button>
          </div>
          <div className="mb-4 flex-1 p-3 rounded-md bg-white box-shadow md:max-w-[275px] md:mb-0">
            <div className="relative mb-4">
              <img
                src="/images/congo.png"
                alt=""
                width="100%"
                className="rounded-md"
              />
              <div className="grid place-items-center w-8 h-8 bg-white rounded-md absolute top-2 right-2">
                <img src="/images/like.svg" alt="" />
              </div>
            </div>
            <p className="leading-[138%] font-bold mb-3">
              Help Save the Golden Lakes of Congo
            </p>
            <p className="project-name mb-4 text-dark font-semibold text-[0.75rem] leading-[138%]">
              NATGEO
            </p>
            <div className="mb-7">
              <div className="mb-2 w-full h-2 bg-[#f5f5f5] rounded-[100px]">
                <div className="bg-primary h-2 w-[40%] rounded-[100px]"></div>
              </div>
              <div className="flex justify-between items-center text-dark text-[0.75rem] leading-[138%]">
                <p>
                  Target:{" "}
                  <span className="font-semibold text-black">$33.3k</span>
                </p>
                <p className="font-semibold text-black">40%</p>
              </div>
            </div>
            <button className="btn-primary">Donate Now</button>
          </div>
          <div className="mb-4 flex-1 p-3 rounded-md bg-white box-shadow md:max-w-[275px] md:mb-0">
            <div className="relative mb-4">
              <img
                src="/images/china.png"
                alt=""
                width="100%"
                className="rounded-md"
              />
              <div className="grid place-items-center w-8 h-8 bg-white rounded-md absolute top-2 right-2">
                <img src="/images/like.svg" alt="" />
              </div>
            </div>
            <p className="leading-[138%] font-bold mb-3">
              Help Save the Grasslands of China
            </p>
            <p className="project-name mb-4 text-dark font-semibold text-[0.75rem] leading-[138%]">
              Project Gaia
            </p>
            <div className="mb-7">
              <div className="mb-2 w-full h-2 bg-[#f5f5f5] rounded-[100px]">
                <div className="bg-primary h-2 w-[90%] rounded-[100px]"></div>
              </div>
              <div className="flex justify-between items-center text-dark text-[0.75rem] leading-[138%]">
                <p>
                  Target:{" "}
                  <span className="font-semibold text-black">$120.3k</span>
                </p>
                <p className="font-semibold text-black">90%</p>
              </div>
            </div>
            <button className="btn-primary">Donate Now</button>
          </div>
          <div className="mb-4 flex-1 p-3 rounded-md bg-white box-shadow md:max-w-[275px] md:mb-0">
            <div className="relative mb-4">
              <img
                src="/images/argentina.png"
                alt=""
                width="100%"
                className="rounded-md"
              />
              <div className="grid place-items-center w-8 h-8 bg-white rounded-md absolute top-2 right-2">
                <img src="/images/like.svg" alt="" />
              </div>
            </div>
            <p className="leading-[138%] font-bold mb-3">
              Help Preserve the Lakes of Argentina
            </p>
            <p className="project-name mb-4 text-dark font-semibold text-[0.75rem] leading-[138%]">
              Project Gaia
            </p>
            <div className="mb-7">
              <div className="mb-2 w-full h-2 bg-[#f5f5f5] rounded-[100px]">
                <div className="bg-primary h-2 w-[72%] rounded-[100px]"></div>
              </div>
              <div className="flex justify-between items-center text-dark text-[0.75rem] leading-[138%]">
                <p>
                  Target:{" "}
                  <span className="font-semibold text-black">$90.3k</span>
                </p>
                <p className="font-semibold text-black">72%</p>
              </div>
            </div>
            <button className="btn-primary">Donate Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
