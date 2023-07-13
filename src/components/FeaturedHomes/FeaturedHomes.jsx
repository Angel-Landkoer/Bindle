/* eslint-disable react/prop-types */
export function FeaturedHomes({ data, title, description, funcMap }) {
  return (
    <section
      className="
      mobile:flex mobile:flex-col mobile:justify-between mobile:w-full mobile:h-auto mobile:my-5
      xl:px-5 
      desktop:h-auto desktop:my-5
      "
    >
      <section className="mobile:block laptop:w-full laptop:flex laptop:justify-between laptop:items-center">
        <section
          className="
          mobile:flex mobile:flex-col mobile:justify-start mobile:items-start mobile:w-80 mobile:h-auto
          sm:w-96 sm:h-28 sm:mb-3
          laptop:w-[555.125px] laptop:h-[67.651px]
          desktop:w-[715px] desktop:h-[78px]
      "
        >
          <h6
            className="
             mobile:w-64 mobile:h-14 mobile:mb-2 mobile:text-xl mobile:font-semibold mobile:text-charcoal
             sm:w-72 sm:h-16 sm:mb-3 sm:text-2xl
             md:w-80 md:h-20 md:mb-4
             laptop:w-full laptop:text-3xl
             xl:my-1
             desktop:text-[40px] desktop:leading-10
         "
          >
            {title}
          </h6>
          <p
            className="
            mobile:text-base mobile:font-medium mobile:text-darkBlue
            sm:text-lg
            laptop:text-sm
            xl:text-base xl:my-1
            desktop:text-base desktop:font-normal
         "
          >
            {description}
          </p>
        </section>
        <button className="mobile:hidden laptop:block laptop:w-[104px] laptop:h-9 laptop:border laptop:text-xs laptop:font-medium laptop:text-blue laptop:border-blue laptop:rounded desktop:w-[78px]">
          Explore All
        </button>
      </section>
      <section
        className="
         mobile:overflow-x-scroll mobile:flex mobile:items-center mobile:gap-y-5 mobile:gap-x-8 mobile:w-full mobile:h-auto mobile:mt-5
         sm:gap-y-6 sm:gap-x-9
         md:gap-y-7 md:gap-x-10
         laptop:overflow-visible
       "
      >
        {data.map(funcMap)}
      </section>
    </section>
  );
}
