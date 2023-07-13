/* eslint-disable react/prop-types */
import { useState } from "react";

export function TermAndGall({ title, videoComponent, phoneComponent }) {
  const [contentChange, setContentChange] = useState(false);

  const handleContentChange = () => setContentChange(!contentChange);
  return (
    <section
      className="
        mobile:flex mobile:flex-col mobile:justify-around mobile:items-start mobile:w-full mobile:h-auto mobile:mt-10
        sm:my-24
        md:my-28
        laptop:h-[446.067px]
        xl:w-full xl:pl-4
        desktop:h-[640px] desktop:mb-36
    "
    >
      <section className="">
        <h6 className="mobile:text-xl mobile:font-semibold mobile:text-charcoal sm:text-2xl xl:text-3xl desktop:text-[40px] desktop:leading-10 desktop:font-bold">
          {title}
        </h6>
      </section>
      <section className="mobile:flex mobile:flex-col mobile:w-8/12 laptop:w-40">
        <section className="mobile:flex mobile:justify-between mobile:w-full mobile:py-2 sm:py-3 md:py-4">
          <button
            className={`${
              !contentChange ? "mobile:text-charcoal" : "mobile:text-[#8F95B2]"
            } xl:text-lg`}
            onClick={handleContentChange}
          >
            Phone
          </button>
          <button
            className={`${
              contentChange ? "mobile:text-charcoal" : "mobile:text-[#8F95B2]"
            } xl:text-lg`}
            onClick={handleContentChange}
          >
            Video
          </button>
        </section>
        <section className="mobile:flex mobile:justify-between mobile:w-full mobile:h-2 mobile:rounded mobile:bg-[#D8DAE5] laptop:w-40">
          <div
            className={`mobile:w-2/4 mobile:h-full mobile:rounded-lg ${
              !contentChange && "mobile:bg-blue"
            } `}
          />
          <div
            className={`mobile:w-2/4 mobile:h-full mobile:rounded-lg ${
              contentChange && "mobile:bg-blue"
            }`}
          />
        </section>
      </section>
      <section className="mobile:w-full mobile:h-auto">
        {contentChange ? videoComponent : phoneComponent}
      </section>
    </section>
  );
}
