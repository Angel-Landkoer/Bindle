/* eslint-disable react/prop-types */
export function VacationRentals({ data, funcMap, title }) {
  return (
    <section
      className="
        mobile:flex mobile:flex-col mobile:justify-around mobile:items-start mobile:w-full mobile:h-[344px] mobile:my-10
        sm:h-[380px] sm:my-11
        md:h-[433px] md:my-12
        laptop:items-center laptop:h-[328.49px] laptop:my-6
        desktop:mt-36 desktop:mb-16
    "
    >
      <section className="mobile:flex mobile:justify-start mobile:items-center mobile:w-48 mobile:h-12 sm:w-52 sm:h-14 md:w-56 md:h-16 laptop:justify-center laptop:w-full">
        <h6 className="mobile:font-semibold mobile:text-xl mobile:text-charcoal laptop:text-4xl laptop:font-bold desktop:text-[40px] desktop:leading-10">
          {title}
        </h6>
      </section>
      <section
        className="
        mobile:flex mobile:items-center mobile:w-full mobile:h-auto mobile:overflow-x-scroll 
        laptop:justify-around laptop:h-[328.49px] laptop:my-5 laptop:overflow-visible
        xl:justify-center xl:my-6
        desktop:h-96
        "
      >
        {data.map(funcMap)}
      </section>
    </section>
  );
}
