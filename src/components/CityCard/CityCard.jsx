/* eslint-disable react/prop-types */
export function CityCard({ data }) {
  return (
    <section className="mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 mobile:w-56 mobile:h-24 mobile:items-center mobile:justify-items-center mobile:border mobile:rounded-2xl desktop:w-[312px] desktop:h-32">
      <img
        className="mobile:col-start-1 mobile:row-span-2 mobile:w-16 mobile:h-16 desktop:w-[92px] desktop:h-[92px]"
        src={
          data.img ||
          "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
        }
        alt={data.title}
      />
      <h6 className="mobile:text-xl mobile:font-semibold desktop:text-3xl desktop:font-bold">
        {data.title}
      </h6>
      <span className="mobile:col-start-2 mobile:row-start-2 mobile:text-xs mobile:font-medium desktop:text-lg">
        {data.text}
      </span>
    </section>
  );
}
