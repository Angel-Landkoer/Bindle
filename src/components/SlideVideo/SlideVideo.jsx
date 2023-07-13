/* eslint-disable react/prop-types */
export function SlideVideo({ data, funcMap }) {
  return (
    <section className="mobile:flex mobile:items-center mobile:gap-x-5 mobile:h-full mobile:w-full mobile:py-3 mobile:my-10 mobile:overflow-x-scroll laptop:overflow-visible laptop:justify-evenly laptop:gap-0 laptop:my-4">
      {data.map(funcMap)}
    </section>
  );
}
