/* eslint-disable react/prop-types */
export function FeaturedHomes({ data, title, description, funcMap }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-between mobile:w-full mobile:h-[501px]">
      <section className="mobile:flex mobile:flex-col mobile:justify-start mobile:items-start mobile:w-80 mobile:h-24">
        <h6 className="mobile:w-64 mobile:h-14 mobile:mb-2 mobile:text-xl mobile:font-semibold mobile:text-charcoal">
          {title}
        </h6>
        <p className="mobile:mt-2 mobile:text-base mobile:font-medium mobile:text-darkBlue">
          {description}
        </p>
      </section>
      <section className="mobile:overflow-x-scroll mobile:flex mobile:items-center mobile:gap-y-5 mobile:gap-x-8 mobile:w-full">
        {data.map(funcMap)}
      </section>
    </section>
  );
}
