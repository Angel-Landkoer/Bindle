/* eslint-disable react/prop-types */

export function ExploreBar({ data, funcMap, btnTitle }) {
  return (
    <section
      className="
      mobile:hidden 
      laptop:absolute top-2/3 left-11 laptop:flex laptop:justify-around laptop:items-center laptop:w-[550.327px] laptop:h-[75px] laptop:px-3 laptop:rounded-3xl laptop:bg-neutral laptop:shadow
      xl:w-[610px] xl:h-[85px] xl:px-4
      desktop:w-[776px] desktop:h-[105px] desktop:rounded-[30px]
      "
    >
      {data.map(funcMap)}
      <button className="laptop:w-32 laptop:py-5 laptop:text-xs laptop:font-bold laptop:rounded-2xl laptop:text-neutral laptop:bg-blue xl:text-sm desktop:w-44 desktop:py-6 desktop:px-8 desktop:text-lg">
        {btnTitle}
      </button>
    </section>
  );
}
