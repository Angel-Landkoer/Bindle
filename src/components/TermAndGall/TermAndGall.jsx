/* eslint-disable react/prop-types */
import { useState } from "react";

export function TermAndGall({ title, videoComponent, phoneComponent }) {
  const [contentChange, setContentChange] = useState(false);

  const handleContentChange = () => setContentChange(!contentChange);
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-around mobile:items-start mobile:w-full mobile:h-auto mobile:my-20">
      <section className="">
        <h6 className="mobile:text-xl mobile:font-semibold mobile:text-charcoal">
          {title}
        </h6>
      </section>
      <section className="mobile:flex mobile:flex-col mobile:w-8/12">
        <section className="mobile:flex mobile:justify-between mobile:w-full mobile:py-2">
          <button
            className={`${
              !contentChange ? "mobile:text-charcoal" : "mobile:text-[#8F95B2]"
            }`}
            onClick={handleContentChange}
          >
            Phone
          </button>
          <button
            className={`${
              contentChange ? "mobile:text-charcoal" : "mobile:text-[#8F95B2]"
            }`}
            onClick={handleContentChange}
          >
            Video
          </button>
        </section>
        <section className="mobile:flex mobile:justify-between mobile:w-full mobile:h-2 mobile:rounded mobile:bg-[#D8DAE5]">
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
      <section className="mobile:w-full mobile:h-56">
        {contentChange ? videoComponent : phoneComponent}
      </section>
    </section>
  );
}
