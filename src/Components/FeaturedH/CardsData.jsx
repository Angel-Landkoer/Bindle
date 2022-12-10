import { NavLink } from "react-router-dom";

export function CardsData({ dataMore }) {
  const { price, pictureHotel, nameHotel, locationCityName, id } = dataMore;

  return (
    <section className="cardsData flex flex-col items-start mx-3 lg:p-3 lg:my-4">
      <figure className=" w-52 h-36 2xl:w-[17.5rem] 2xl:h-[13.13rem]">
        <img
          className="w-full h-full rounded-2xl 2xl:rounded-[1.3rem]"
          src={`${pictureHotel}`}
          alt=""
        />
      </figure>
      <h4 className="font-medium text-lg 2xl:text-2xl 2xl:font-bold">
        {nameHotel}
      </h4>
      <span className="font-medium text-sm my-3 lg:my-1 2xl:text-lg">{`Entire house | ${locationCityName}`}</span>
      <NavLink
        className={(isActive) => (isActive ? "text-black" : undefined)}
        to={`/featured/${id}`}
      >
        <span className="text-colorBtn text-lg font-bold 2xl:text-2xl">{`$${price}/ night`}</span>
      </NavLink>
    </section>
  );
}
