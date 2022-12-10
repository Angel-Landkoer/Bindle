import { NavLink } from "react-router-dom";

export function BntExploreAll({ route, include }) {
  return (
    <NavLink
      to={route}
      className={`${
        include ? "block" : "hidden"
      } lg:block lg:w-28 lg:h-9 2xl:h-12 lg:justify-self-end`}
    >
      <button className="gap-1.5 w-[5.4rem] h-[1.82rem] font-medium text-[0.62rem] leading-[0.85rem] border-colorBtn border-solid border rounded-sm text-colorBtn lg:gap-2 lg:w-[6.5rem] lg:h-[2.20rem] lg:text-xs 2xl:w-[6.9rem] 2xl:h-12 2xl:p-4 2xl:gap-[0.5rem]">
        Explore All
        <i className=" fa-solid fa-right-long w-1.5 h-1.5 ml-1 text-[0.62rem] text-colorBtn"></i>
      </button>
    </NavLink>
  );
}
