export interface IProject {
  _id: string;
  name: string;
  image_url: string;
  project_url: string;
  paypal_url: string;
  project_headline: string;
}

const Project = ({
  _id,
  image_url,
  name,
  paypal_url,
  project_url,
  project_headline,
}: IProject) => {
  return (
    <div className="mb-4 flex-1 p-3 rounded-md bg-white box-shadow md:max-w-[275px] md:mb-0">
      <a href={project_url}>
        <div className="relative mb-4">
          <img src={image_url} alt="" width="100%" className="rounded-md" />
          {/* <div className="grid place-items-center w-8 h-8 bg-white rounded-md absolute top-2 right-2">
          <img src="/images/like.svg" alt="" />
        </div> */}
        </div>
        <p className="md:line-clamp-5 leading-[138%] font-bold mb-3">
          {project_headline}
        </p>
      </a>
      <p className="project-name mb-4 text-dark font-semibold text-[0.75rem] leading-[138%]">
        {name}
      </p>
      {/* <div className="mb-7">
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
      </div> */}
      <a href={paypal_url}>
        <button className="btn-primary">Donate Now</button>
      </a>
    </div>
  );
};

export default Project;
