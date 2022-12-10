export function HeaderBar() {
  return (
    <>
      <section className="headerBar hidden lg:z-30 lg:col-start-1 lg:col-span-4 lg:row-start-4 lg:row-span-2 self-center lg:w-[34.40rem] lg:h-[4.65rem] lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:bg-white lg:rounded-[1.33rem] lg:shadow-[0px_8.5322px_9.95424px_rgba(67, 83, 138, 0.06);] 2xl:w-[48.4rem] 2xl:h-[6.5rem] 2xl:self-center">
        <section className="location lg:flex lg:flex-col ">
          <section className="titleSection lg:flex lg:flex-row lg:justify-center">
            <h3 className="lg:inline lg:text-sm lg:font-medium lg:pr-1 lg:text-defaultColor 2xl:text-xl 2xl:font-semibold">
              Location
            </h3>
            {false ? (
              <i className="fa-solid fa-angle-up lg:text-lg lg:font-medium lg:text-colorOptional"></i>
            ) : (
              <i className="fa-solid fa-angle-down lg:text-lg lg:font-medium lg:text-colorOptional"></i>
            )}
          </section>
          {true && (
            <section className="lg:">
              <span className="lg:text-xs lg:font-medium lg:text-colorBgInput 2xl:text-lg">
                Your destination
              </span>
            </section>
          )}
        </section>

        <section className="date lg:flex lg:flex-col ">
          <section className="titleSection lg:flex lg:flex-row lg:justify-center">
            <h3 className="lg:inline lg:text-sm lg:font-medium lg:pr-1 lg:text-defaultColor 2xl:text-xl 2xl:font-semibold">
              Date
            </h3>
            {false ? (
              <i className="fa-solid fa-angle-up lg:text-lg lg:font-medium lg:text-colorOptional"></i>
            ) : (
              <i className="fa-solid fa-angle-down lg:text-lg lg:font-medium lg:text-colorOptional"></i>
            )}
          </section>
          {true && (
            <section className="lg:">
              <span className="lg:text-xs lg:font-medium lg:text-colorBgInput 2xl:text-lg">
                When does it start?
              </span>
            </section>
          )}
        </section>

        <section className="people lg:flex lg:flex-col ">
          <section className="titleSection lg:flex lg:flex-row lg:justify-center">
            <h3 className="lg:inline lg:text-sm lg:font-medium lg:pr-1 lg:text-defaultColor 2xl:text-xl 2xl:font-semibold">
              People
            </h3>
            {false ? (
              <i className="fa-solid fa-angle-up lg:text-lg lg:font-medium lg:text-colorOptional"></i>
            ) : (
              <i className="fa-solid fa-angle-down lg:text-lg lg:font-medium lg:text-colorOptional"></i>
            )}
          </section>
          {true && (
            <section className="lg:">
              <span className="lg:text-xs lg:font-medium lg:text-colorBgInput 2xl:text-lg">
                How many people?
              </span>
            </section>
          )}
        </section>
        <button className="w-40 h-14 text-xs font-medium text-white bg-colorBtn rounded-xl 2xl:w-44 2xl:h-[4.5rem] 2xl:text-lg 2xl:font-bold 2xl:rounded-2xl 2xl:gap-3">
          Explore Now
        </button>
      </section>
    </>
  );
}
