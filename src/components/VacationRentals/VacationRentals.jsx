/* eslint-disable react/prop-types */
export function VacationRentals({ data, funcMap, title }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:w-full mobile:h-[75vh] mobile:mt-10">
      <section className="mobile:flex mobile:justify-start mobile:items-center mobile:w-48 mobile:h-12">
        <h6 className=" mobile:font-semibold mobile:text-xl mobile:text-charcoal">
          {title}
        </h6>
      </section>
      <section className="mobile:flex mobile:items-center mobile:w-full mobile:h-3/5 overflow-x-scroll">
        {data.map(funcMap)}
      </section>
    </section>
  );
}
