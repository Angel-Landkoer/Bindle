import { Link } from "react-router-dom";

export function NavBar({ children }) {
  return (
    <>
      <nav className="flex flex-row justify-between items-center p-4 lg:col-start-1 lg:col-span-8 lg:row-start-1 lg:row-span-1">
        <Link to="/">
          <figure className="w-[5.13rem] h-[1.85rem] lg:w-[7.70rem] lg:h-[2.73rem] 2xl:w-[9.4rem] 2xl:h-[3.62rem]">
            <img
              className="w-full h-full"
              src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/fc2522dccf9c8bd673f6d40c0f0e8affde6e9c35/bindle/logos/Group.svg"
              alt=""
            />
          </figure>
        </Link>
        {children}
      </nav>
    </>
  );
}
