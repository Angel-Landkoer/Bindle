/* eslint-disable react/prop-types */
export function HomeCard({ i, data }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-start">
      <figure className="mobile:w-52 mobile:h-36 mobile:mb-2">
        <img
          className="mobile:w-full mobile:h-full rounded-xl"
          src={`${
            data.img ||
            "https://o.remove.bg/downloads/555b3c93-9e60-4c46-a63c-b43a58bc580f/images-removebg-preview.png"
          }`}
          alt={`Image to the ${data.title} version-${i}`}
        />
      </figure>
      <span className="mb-2 mobile:text-xs mobile:font-medium mobile:text-darkBlue">
        ⭐{data.stars}
      </span>
      <span className="mb-2 mobile:text-lg mobile:font-medium mobile:text-charcoal">
        {data.title}
      </span>
      <span className="mb-2 mobile:text-sm mobile:font-medium mobile:text-darkBlue">
        {data.title}|{data.city}
      </span>
      <span className="mb-2 mobile:text-lg mobile:font-bold decoration-solid underline mobile:text-blue">
        $ {data.price}/ night
      </span>
    </section>
  );
}
