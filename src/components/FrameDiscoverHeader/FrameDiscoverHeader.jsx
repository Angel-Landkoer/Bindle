/* eslint-disable react/prop-types */
export function FrameDiscoverHeader({ title, description }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-evenly mobile:items-center mobile:w-80 mobile:h-60 mobile:my-8">
      <h3 className="mobile:text-4xl mobile:font-bold mobile:text-center mobile:text-neutral">
        {title}
      </h3>
      <p className="mobile:text-base mobile:font-normal mobile:text-center mobile:text-neutral">
        {description}
      </p>
      <form
        className="mobile:w-80 mobile:h-11 mobile:bg-neutral mobile:rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="mobile:w-full mobile:h-full" htmlFor="search">
          <input
            className=" mobile:w-full mobile:h-full mobile:p-4 mobile:rounded-xl mobile:placeholder:pl-5 mobile:placeholder:font-normal mobile:placeholder:text-xs mobile:placeholder:text-[#C1C4D6]"
            type="search"
            name="search"
            placeholder="Where are you going?"
          />
        </label>
      </form>
    </section>
  );
}
