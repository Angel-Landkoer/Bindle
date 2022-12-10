export function CardsHotels({ dataHotel }) {
  const { nameHotel, pictureHotel, price } = dataHotel;

  return (
    <section className="cardsHotels border-transparent mx-4 text-inherit flex flex-col items-center lg:p-2 lg:m-2">
      <figure className="w-52 h-52 mb-1 2xl:w-[17.5rem] 2xl:h-[17.5rem]">
        <img className="rounded-xl w-full h-full 2xl:rounded-[1.25rem]" src={`${pictureHotel}`} alt="" />
      </figure>
      <h4 className="font-bold text-base my-1 2xl:text-2xl">{nameHotel}</h4>
      <span className="text-sm font-medium 2xl:text-lg">{`$${price}`}</span>
    </section>
  );
}
