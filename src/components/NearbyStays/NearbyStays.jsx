/* eslint-disable react/prop-types */

export function NearbyStays({ funcMap, data, title, description }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[60vh]">
      <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:gap-2 mobile:w-64 mobile:h-20">
        <h6 className="mobile:text-xl mobile:font-semibold mobile:text-charcoal">
          {title}
        </h6>
        <p className="mobile:text-base mobile:font-normal mobile:text-charcoal">
          {description}
        </p>
      </section>
      <section className="mobile:grid mobile:grid-cols-2 mobile:gap-3 mobile:w-full mobile:h-52 mobile:py-4 mobile:mt-4 mobile:border-4 mobile:overflow-scroll">
        {data.map(funcMap)}
      </section>
    </section>
  );
}
