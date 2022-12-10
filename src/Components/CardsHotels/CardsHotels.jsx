export function CardsHotels({ dataAPI }) {
  const { nameHotel, pictureHotel, price } = dataAPI;

  return (
    <>
      <section className="cardsHotels w-80 h-auto m-2.5 border border-solid border-colorBtn text-defaultColor">
        <figure className="w-80 h-64">
          <img className="w-full h-full" src={`${pictureHotel}`} alt="" />
        </figure>
        <section className="containerData w-full">
          <h3 className="text-xl font-semibold text-center">{nameHotel}</h3>
          <span className="block text-center text-lg font-normal hover:bg-colorOptional hover:text-white">{`$${price}`}</span>
        </section>
      </section>
    </>
  );
}
