/* eslint-disable react/prop-types */
export function GetDiscount({ title }) {
  return (
    <section
      className="
    mobile:flex mobile:flex-col mobile:justify-evenly mobile:items-center mobile:self-center mobile:gap-2 mobile:w-80 mobile:h-[230px] mobile:bg-mainMobileImgDiscount mobile:rounded-r-lg mobile:bg-cover mobile:bg-no-repeat
    sm:gap-3 sm:w-96 sm:h-72
    md:gap-4
    laptop:grid laptop:grid-cols-4 laptop:grid-rows-2 laptop:w-[896px] laptop:h-[193px] laptop:p-4 laptop:rounded-2xl
    xl:p-7
    desktop:w-full desktop:h-[272px] desktop:rounded-3xl
    "
    >
      <h6
        className="
      mobile:text-xl mobile:text-center mobile:font-semibold mobile:text-charcoal
      sm:text-2xl
      laptop:col-start-1 laptop:col-span-3 laptop:row-start-1 laptop:w-[474.248px] laptop:h-[79.634px] laptop:text-3xl laptop:text-start
      desktop:w-5/6 desktop:text-5xl desktop:font-bold 
      ">
        {title}
      </h6>
      <ul
        className="
       mobile:flex mobile:flex-col mobile:justify-evenly mobile:items-start mobile:h-1/3 mobile:text-sm mobile:font-medium  mobile:text-charcoal
       laptop:col-start-1 laptop:col-span-3 laptop:row-start-2 laptop:flex-row laptop:justify-around laptop:items-center laptop:text-xs
       xl:text-sm
       desktop:text-lg
       "
      >
        <li className="mobile:text-inherit">Best discounts ever</li>
        <li className="mobile:text-inherit">Free offers</li>
        <li className="mobile:text-inherit">Fast & secure payments</li>
      </ul>
      <button
        className="
      mobile:w-[131px] mobile:h-9 mobile:py-2 mobile:px-4 mobile:text-xs mobile:font-bold mobile:rounded-sm mobile:text-neutral mobile:bg-blue
      sm:w-36 sm:h-10 sm:text-sm
      laptop:col-start-4 laptop:row-start-1 laptop:row-span-2 laptop:text-xs
      xl:rounded
      desktop:w-[183px] desktop:h-14 desktop:text-lg
      ">
        Sign Up Now
      </button>
    </section>
  );
}
