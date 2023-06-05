/* eslint-disable react/prop-types */
export function CityCard({ data }) {
  return (
    <section className="grid grid-cols-2 grid-rows-2 w-56 h-24 items-center justify-items-center border rounded-2xl">
      <img
        className="col-start-1 row-span-2 w-16 h-16"
        src={
          "https://static.wikia.nocookie.net/vsbattles/images/0/04/025Pikachu_XY_anime_4.png/revision/latest?cb=20180310153929"
        }
        alt={data.title}
      />
      <h6 className="text-xl font-semibold">{data.title}</h6>
      {/* className="col-start-2 col-span-2 row-start-1" */}
      <span className="col-start-2 row-start-2 text-xs font-medium">
        {data.text}
      </span>
      {/* className="col-start-3 row-start-2 text-xs font-medium" */}
    </section>
  );
}
