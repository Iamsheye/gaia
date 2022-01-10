interface IProject {
  image: string;
  title: string;
  org: string;
  target: string;
  progress: number;
}

const Project = ({ image, title, org, target, progress }: IProject) => {
  return (
    <div className="mb-4 flex-1 p-3 rounded-md bg-white box-shadow md:max-w-[275px] md:mb-0">
      <div className="relative mb-4">
        <img
          src={`/images/${image}.png`}
          alt=""
          width="100%"
          className="rounded-md"
        />
        <div className="grid place-items-center w-8 h-8 bg-white rounded-md absolute top-2 right-2">
          <img src="/images/like.svg" alt="" />
        </div>
      </div>
      <p className="leading-[138%] font-bold mb-3">{title}</p>
      <p className="project-name mb-4 text-dark font-semibold text-[0.75rem] leading-[138%]">
        {org}
      </p>
      <div className="mb-7">
        <div className="mb-2 w-full h-2 bg-[#f5f5f5] rounded-[100px]">
          <div
            className="bg-primary h-2 rounded-[100px]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center text-dark text-[0.75rem] leading-[138%]">
          <p>
            Target:{" "}
            <span className="font-semibold text-black">{`$${target}`}</span>
          </p>
          <p className="font-semibold text-black">{progress}%</p>
        </div>
      </div>
      <button className="btn-primary">Donate Now</button>
    </div>
  );
};

export default Project;
