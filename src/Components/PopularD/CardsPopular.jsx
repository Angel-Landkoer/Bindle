export function CardsPopular({ dataPopular, classNameA }) {
  const { pictureHotel, price, nameHotel } = dataPopular;

  return (
    <section className={classNameA}>
      <div className="relative w-full">
        <figure className="w-52 h-52">
          <img
            className="w-full h-full rounded-lg"
            src={`${pictureHotel}`}
            alt={`img-${nameHotel}`}
          />
        </figure>
      </div>
    </section>
  );
}
