import { NavLink } from "react-router-dom";

export function GetTTheBest({ context }) {
  const {
    title,
    listText: { oneItem, twoItem, threeItem },
  } = context;

  return (
    <>
      <section className="getTheBest flex flex-col items-center justify-center w-80 h-auto p-5 my-12 mx-auto text-center text-defaultColo bg-imgGetTheBest bg-no-repeat bg-cover lg:text-auto lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:w-896 lg:h-48 lg:rounded-2xl 2xl:w-[80.1rem] 2xl:h-[17rem]">
        <h2 className="p-3 text-inherit font-semibold text-xl text-center lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:p-8 lg:row-span-1 lg:text-left lg:font-bold lg:text-4xl 2xl:text-5xl">
          {title}
        </h2>
        <div className="text-inherit flex flex-col items-start p-5 lg:col-start-1 lg:col-span-3 lg:row-start-2 lg:row-span-1 lg:flex lg:flex-row lg:justify-evenly">
          <span className="p-1 font-medium text-xs 2xl:text-lg">
            <i className="fa-regular fa-circle-check text-lg mr-4 lg:mr-1.5 lg:text-lg text-colorBtn "></i>
            {oneItem}
          </span>
          <span className="p-1 font-medium text-xs 2xl:text-lg">
            <i className="fa-regular fa-circle-check text-lg mr-4 lg:mr-1.5 lg:text-lg text-colorBtn "></i>
            {twoItem}
          </span>
          <span className="p-1 font-medium text-xs 2xl:text-lg">
            <i className="fa-regular fa-circle-check text-lg mr-4 lg:mr-1.5 lg:text-lg text-colorBtn "></i>
            {threeItem}
          </span>
        </div>
        <NavLink
          className={`lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-2`}
          to={`signUp`}
        >
          <button className="py-2 px-4 text-xs font-bold text-center bg-colorBtn rounded-sm text-white lg:w-32 lg:h-11 2xl:w-[11.5rem] 2xl:h-[3.75rem] 2xl:text-lg 2xl:gap-2 2xl:rounded">
            Sign Up Now
          </button>
        </NavLink>
      </section>
    </>
  );
}
