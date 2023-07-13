/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function PopularDestinations({
  title,
  contentImgFirst,
  contentImgSecond,
  contentImgThird,
  contentImgFourth,
}) {
  return (
    <section
      className="
      mobile:flex mobile:flex-col mobile:justify-around mobile:w-full mobile:h-auto 
      laptop:h-[535.372px] laptop:p-3 laptop:my-5 laptop:rounded laptop:bg-[#F6F6F6]
      xl:w-full xl:h-auto xl:rounded-lg
      "
    >
      <section className="mobile:flex mobile:justify-between mobile:items-center">
        <h6 className="mobile:text-xl mobile:font-semibold mobile:text-charcoal sm:text-2xl desktop:text-[40px] desktop:leading-10 desktop:font-bold">
          {title}
        </h6>
        <button
          className="
         mobile:w-[86px] mobile:h-7 mobile:text-[10px] mobile:leading-3 mobile:font-medium mobile:border mobile:rounded mobile:text-blue mobile:border-bl
         sm:w-[90px] sm:h-8 sm:text-xs sm:border-2 sm:border-blue sm:border-opacity-70
         md:w-28 md:h-9 md:text-sm
         desktop:gap-2 desktop:w-[78px] desktop:text-xs
        "
        >
          Explore All
        </button>
      </section>

      <section
        className="
        mobile:grid mobile:grid-cols-2 mobile:gap-3 mobile:my-10 
        sm:gap-4 sm:my-11 
        md:gap-5 md:my-12 
        laptop:grid-cols-4 laptop:grid-rows-2
        
        "
      >
        <figure
          className="
        mobile:relative mobile:col-start-1 mobile:col-span-2 mobile:justify-self-center mobile:w-72 mobile:h-72
        sm:w-80 sm:h-80
        md:w-96 md:h-96
        laptop:col-start-1 laptop:col-span-2 laptop:row-start-1 laptop:row-span-2
        desktop:w-[592px] desktop:h-[590px] 
         "
        >
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgFirst.img}
            alt={contentImgFirst.altImg}
          />
          <div
            className="
          mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2 mobile:text-neutral
          sm:px-3
          md:px-4
          laptop:mobile:bg-white/30 mobile:backdrop-blur-md
          desktop:w-[592px] desktop:h-[100px]
          "
          >
            <span className="mobile:text-sm mobile:font-semibold mobile:text-inherit sm:text-base desktop:text-3xl">
              {contentImgFirst.city}, {contentImgFirst.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-inherit sm:text-xs desktop:text-base">
              {contentImgFirst.properties} properties
            </span>
          </div>
        </figure>

        <figure
          className="
        mobile:relative mobile:col-start-1 mobile:justify-self-end mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:w-[139px] mobile:h-[139px]>
        sm:w-44 sm:h-44
        md:w-48 md:h-48
        laptop:col-start-3 laptop:row-start-1
        desktop:w-[280px] desktop:h-[280px]
        "
        >
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgSecond.img}
            alt={contentImgSecond.altImg}
          />
          <div className="mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2 mobile:rounded-b-md mobile:text-neutral mobile:bg-white/30 mobile:backdrop-blur-md desktop:w-[280px] desktop:h-[100px]">
            <span className="mobile:text-sm mobile:font-semibold mobile:text-inherit sm:text-base desktop:text-3xl">
              {contentImgSecond.city}, {contentImgSecond.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-inherit sm:text-xs desktop:text-base">
              {contentImgSecond.properties} properties
            </span>
          </div>
        </figure>

        <figure
          className="
        mobile:relative mobile:col-start-2 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:w-[139px] mobile:h-[139px]>
        sm:w-44 sm:h-44
        md:w-48 md:h-48
        laptop:col-start-4 laptop:row-start-1
        desktop:w-[280px] desktop:h-[280px]
        "
        >
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgThird.img}
            alt={contentImgThird.altImg}
          />
          <div className="mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2 mobile:rounded-b-md mobile:text-neutral mobile:bg-white/30 mobile:backdrop-blur-md desktop:w-[280px] desktop:h-[100px]">
            <span className="mobile:text-sm mobile:font-semibold mobile:text-inherit sm:text-base desktop:text-3xl">
              {contentImgThird.city}, {contentImgThird.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-inherit sm:text-xs desktop:text-base">
              {contentImgThird.properties} properties
            </span>
          </div>
        </figure>

        <figure
          className="
        mobile:relative mobile:col-start-1 mobile:justify-self-center mobile:col-span-2 mobile:w-72 mobile:h-36 
        sm:w-80 sm:h-40 
        md:w-96 md:h-44 
        laptop:col-start-3 laptop:col-span-2 laptop:row-start-2
        desktop:w-[592px] desktop:h-[280px]
        "
        >
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgFourth.img}
            alt={contentImgFourth.altImg}
          />
          <div className="mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2 mobile:rounded-b-md mobile:text-neutral mobile:bg-white/30 mobile:backdrop-blur-md desktop:w-[592px] desktop:h-[100px]">
            <span className="mobile:text-sm mobile:font-semibold mobile:text-inherit sm:text-base desktop:text-3xl">
              {contentImgFourth.city}, {contentImgFourth.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-inherit sm:text-xs desktop:text-base">
              {contentImgFourth.properties} properties
            </span>
          </div>
        </figure>
      </section>
    </section>
  );
}
