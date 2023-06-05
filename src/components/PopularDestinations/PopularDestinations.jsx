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
    <section className="mobile:flex mobile:flex-col mobile:justify-around mobile:w-full mobile:h-auto">
      <section className="mobile:flex mobile:justify-between mobile:items-center">
        <h6 className="mobile:text-xl mobile:font-semibold mobile:text-charcoal">
          {title}
        </h6>
        <button className="mobile:w-[86px] mobile:h-7 mobile:text-[10px] mobile:leading-3 mobile:font-medium mobile:border mobile:rounded mobile:text-blue mobile:border-blue">
          Explore All
        </button>
      </section>

      <section className="mobile:grid mobile:grid-cols-2 mobile:gap-3 mobile:my-10">
        <figure className="mobile:relative mobile:col-start-1 mobile:col-span-2 mobile:justify-self-center mobile:w-72 mobile:h-72">
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgFirst.img}
            alt={contentImgFirst.altImg}
          />
          <div className="mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2">
            <span className="mobile:text-sm mobile:font-semibold mobile:text-neutral">
              {contentImgFirst.city}, {contentImgFirst.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-neutral">
              {contentImgFirst.properties} properties
            </span>
          </div>
        </figure>

        <figure className="mobile:relative mobile:col-start-1 mobile:justify-self-end mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:w-40 mobile:h-40">
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgSecond.img}
            alt={contentImgSecond.altImg}
          />
          <div className="mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2 mobile:rounded-b-md mobile:bg-white/30 mobile:backdrop-blur-md">
            <span className="mobile:text-sm mobile:font-semibold mobile:text-neutral">
              {contentImgSecond.city}, {contentImgSecond.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-neutral">
              {contentImgSecond.properties} properties
            </span>
          </div>
        </figure>

        <figure className="mobile:relative mobile:col-start-2 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:w-40 mobile:h-40">
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgThird.img}
            alt={contentImgThird.altImg}
          />
          <div className="mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2 mobile:rounded-b-md mobile:bg-white/30 mobile:backdrop-blur-md">
            <span className="mobile:text-sm mobile:font-semibold mobile:text-neutral">
              {contentImgThird.city}, {contentImgThird.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-neutral">
              {contentImgThird.properties} properties
            </span>
          </div>
        </figure>

        <figure className="mobile:relative mobile:col-start-1 mobile:justify-self-center mobile:col-span-2 mobile:w-72 mobile:h-36">
          <img
            className="mobile:w-full mobile:h-full"
            src={contentImgFourth.img}
            alt={contentImgFourth.altImg}
          />
          <div className="mobile:absolute mobile:bottom-0 mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[50px] mobile:px-2 mobile:rounded-b-md mobile:bg-white/30 mobile:backdrop-blur-md">
            <span className="mobile:text-sm mobile:font-semibold mobile:text-neutral">
              {contentImgFourth.city}, {contentImgFourth.country}
            </span>
            <span className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-neutral">
              {contentImgFourth.properties} properties
            </span>
          </div>
        </figure>
      </section>
    </section>
  );
}
