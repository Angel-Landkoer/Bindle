/* eslint-disable react/prop-types */
export function FrameDiscoverHeader({ title, description }) {
  return (
    <section
      className="
     mobile:flex mobile:flex-col mobile:justify-evenly mobile:items-center mobile:self-center mobile:w-80 mobile:h-60 mobile:my-8
     sm:w-96 sm:h-64
     md:h-72
     laptop:self-start laptop:w-80 laptop:h-[166px] laptop:gap-4 laptop:mt-12 laptop:pt-5
     xl:w-96 xl:h-44 xl:pt-6 xl:gap-5
     desktop:justify-between desktop:w-[420px] desktop:h-[265px]
     "
    >
      <h3 className="mobile:text-4xl mobile:font-bold mobile:text-center mobile:text-neutral laptop:text-[40px] laptop:leading-10 laptop:font-normal laptop:text-start xl:text-[44px] desktop:w-full desktop:text-[64px] desktop:leading-[72px] desktop:font-bold">
        {title}
      </h3>
      <p className="mobile:text-base mobile:font-normal mobile:text-center mobile:text-neutral laptop:text-base laptop:font-bold laptop:text-start xl:text-lg xl:font-medium">
        {description}
      </p>
      <form
        className="mobile:w-80 mobile:h-11 mobile:bg-neutral mobile:rounded-xl sm:w-96 sm:h-12 laptop:hidden"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="mobile:w-full mobile:h-full" htmlFor="search">
          <input
            className="
            mobile:w-full mobile:h-full mobile:p-4 mobile:rounded-xl mobile:placeholder:pl-5 mobile:placeholder:font-normal mobile:placeholder:text-xs mobile:placeholder:text-[#C1C4D6]
            sm:p-5 sm:placeholder:pl-6 sm:placeholder:text-sm
            md:p-6 md:placeholder:pl-6 md:placeholder:text-base
            "
            type="search"
            name="search"
            placeholder="Where are you going?"
          />
        </label>
      </form>
    </section>
  );
}
