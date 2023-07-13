/* eslint-disable react/prop-types */
export function HomeCard({ i, data }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-start desktop:mt-5">
      <figure className="mobile:w-52 mobile:h-36 mobile:mb-2 desktop:w-[288px] desktop:h-[210px]">
        <img
          className="mobile:w-full mobile:h-full rounded-xl"
          src={`${
            data.img ||
            "https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg"
          }`}
          alt={`Image to the ${data.title} version-${i}`}
        />
      </figure>
      <span className="mb-2 mobile:text-xs mobile:font-medium mobile:text-darkBlue desktop:text-sm">
        ⭐{data.stars}
      </span>
      <span className="mb-2 mobile:text-lg mobile:font-medium mobile:text-charcoal desktop:text-xl desktop:font-bold">
        {data.title}
      </span>
      <span className="mb-2 mobile:text-sm mobile:font-medium mobile:text-darkBlue desktop:text-lg">
        {data.title}|{data.city}
      </span>
      <span className="mb-2 mobile:text-lg mobile:font-bold decoration-solid underline mobile:text-blue desktop:text-2xl">
        $ {data.price}/ night
      </span>
    </section>
  );
}
