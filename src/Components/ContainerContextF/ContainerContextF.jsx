// React-router
import { NavLink } from "react-router-dom";

export function ContainerContextF({ context }) {
  const { title, text } = context;

  return (
    <>
      <section className="containerContextF flex flex-col items-center justify-center py-5 text-white lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-2 2xl:justify-self-start">
        <NavLink
          className={(isActive) =>
            isActive ? "mb-3 lg:hidden 2xl:hidden" : undefined
          }
          to="/"
        >
          <figure className="w-[5.13rem] h-[1.82rem]">
            <img
              className="w-full h-full"
              src={`https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/fc2522dccf9c8bd673f6d40c0f0e8affde6e9c35/bindle/logos/Group.svg`}
              alt="logo"
            />
          </figure>
        </NavLink>
        <div className="block w-full h-32 lg:text-start 2xl:w-[26.95rem] 2xl:h-[8.8rem]">
          <h5 className="mb-2 py-3 text-xl font-semibold text-center lg:font-bold lg:text-2xl lg:text-start 2xl:text-[2rem] 2xl:leading-[2.5rem]">
            {title}
          </h5>
          <p className="text-sm font-medium text-center lg:text-start">
            {text}
          </p>
        </div>
      </section>
    </>
  );
}
