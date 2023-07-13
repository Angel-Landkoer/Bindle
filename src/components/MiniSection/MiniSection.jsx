/* eslint-disable react/prop-types */
export function MiniSection({ data }) {
  return (
    <section className="laptop:relative laptop:flex laptop:flex-col laptop:justify-center laptop:w-[180px] laptop:h-10 desktop:px-2 desktop:py-5">
      <span className="laptop:text-sm laptop:text-start laptop:font-bold desktop:text-lg">
        {data.title}
      </span>
      <span className="laptop:text-xs laptop:text-start laptop:font-bold laptop:text-[#696F8C] desktop:text-lg desktop:font-medium">
        {data.subTitle}
      </span>
      <span className="laptop:absolute laptop:top-0 laptop:right-5 laptop:font-semibold laptop:text-red-700">
        V
      </span>
    </section>
  );
}
