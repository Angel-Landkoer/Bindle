/* eslint-disable react/prop-types */
export function GetDiscount({ title }) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-evenly mobile:items-center mobile:gap-2 mobile:w-80 mobile:h-[230px] mobile:bg-mainMobileImgDiscount mobile:bg-no-repeat">
      <h6 className="mobile:text-xl mobile:text-center mobile:font-semibold mobile:text-charcoal">
        {title}
      </h6>
      <ul className="mobile:flex mobile:flex-col mobile:justify-evenly mobile:items-start mobile:h-1/3 mobile:text-charcoal">
        <li className="mobile:text-xs mobile:font-medium mobile:text-inherit">
          Best discounts ever
        </li>
        <li className="mobile:text-xs mobile:font-medium mobile:text-inherit">
          Free offers
        </li>
        <li className="mobile:text-xs mobile:font-medium mobile:text-inherit">
          Fast & secure payments
        </li>
      </ul>
      <button className="mobile:w-[131px] mobile:h-9 mobile:py-2 mobile:px-4 mobile:text-xs mobile:font-bold mobile:rounded-sm mobile:text-neutral mobile:bg-blue">
        Sign Up Now
      </button>
    </section>
  );
}
