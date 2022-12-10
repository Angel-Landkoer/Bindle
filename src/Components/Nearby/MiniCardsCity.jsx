export function MiniCardsCity({ dataMiniCards }) {
  const { pictureCity, price, locationCityName } = dataMiniCards;

  return (
    <section
      className={`miniCardsCity flex flex-row items-center w-56 h-24 mx-6 border-[0.044rem] rounded-[0.90rem] border-solid border-neutral_n500 bg-neutral_n75 lg:my-2 2xl:w-[19.5rem] 2xl:h-32 2xl:rounded-[1.25rem]`}
    >
      <figure className="w-16 h-16 mx-2 2xl:w-24 2xl:h-24">
        <img
          className="w-full h-full rounded-lg 2xl:rounded-[1.25rem]"
          src={pictureCity}
          alt={`img-${locationCityName}`}
        />
      </figure>
      <div className="contextMiniCards flex items-center flex-col justify-center ml-2">
        <h4 className="text-xl font-semibold 2xl:text-[2rem] 2xl:leading-10 2xl:font-bold">
          {locationCityName}
        </h4>
        <span className="text-xs font-medium 2xl:text-lg">{`${price}$`}</span>
      </div>
    </section>
  );
}
