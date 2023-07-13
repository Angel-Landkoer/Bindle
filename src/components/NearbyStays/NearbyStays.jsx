/* eslint-disable react/prop-types */

export function NearbyStays({ funcMap, data, title, description }) {
  return (
    <section
      className="
        mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-auto
        laptop:h-[305.737px] laptop:my-3
        xl:h-[315px] xl:my-5
        desktop:h-[462px] desktop:my-8
     "
    >
      <section
        className="
          mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:gap-2 mobile:w-64 mobile:h-20
          sm:gap-3 sm:w-64 sm:h-24
          md:gap-4 md:w-72 md:h-28
          laptop:w-96
       "
      >
        <h6 className="mobile:text-xl mobile:font-semibold mobile:text-charcoal xl:text-3xl desktop:text-4xl">
          {title}
        </h6>
        <p className="mobile:text-base mobile:font-normal mobile:text-charcoal xl:text-lg">
          {description}
        </p>
      </section>
      <section
        className="
          mobile:grid mobile:grid-cols-3 mobile:gap-x-[244px] mobile:gap-y-3 mobile:w-full mobile:h-auto mobile:py-4 mobile:mt-4 mobile:border-4 mobile:overflow-scroll
          sm:py-5 sm:mt-5
          md:py-6 md:mt-6
          laptop:border-0 laptop:overflow-visible laptop:p-2 laptop:m-3 laptop:gap-x-0 laptop:gap-y-4
          xl:w-full xl:p-3 xl:m-4
       "
      >
        {data.map(funcMap)}
      </section>
    </section>
  );
}
