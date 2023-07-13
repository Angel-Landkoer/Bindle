/* eslint-disable react/prop-types */
export function HotelCard({ data }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:mx-5 mobile:w-48 mobile:h-64 laptop:mx-3 xl:mx-5 xl:my-3 desktop:w-[280px] desktop:h-auto ">
      <figure className="mobile:w-48 mobile:h-48 desktop:w-[280px] desktop:h-[280px]">
        <img
          className="mobile:w-full h-full mobile:rounded-2xl"
          src={
            data.img ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQQM5ci9CV05nRR8rP9ZypzdzUThIe_IH2g&usqp=CAU"
          }
          alt={`Image to the hotel ${data.title}`}
        />
      </figure>
      <span className="mobile:font-bold mobile:text-base mobile:text-charcoal desktop:text-2xl">
        {data.title}
      </span>
      <span className="mobile:font-medium mobile:text-xs mobile:text-charcoal desktop:text-lg">
        {data.text}
      </span>
    </section>
  );
}
