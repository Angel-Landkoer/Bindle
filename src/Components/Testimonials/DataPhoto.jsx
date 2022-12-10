import React from "react";

export function DataPhoto() {
  return (
    <section className="galeryPhoneAndVideo overflow-x-scroll w-full gap-x-3 grid grid-cols-7 grid-rows-2 justify-items-center items-center lg:overflow-hidden lg:grid lg:grid-cols-6 lg:grid-rows-2 lg:justify-items-center lg:items-center">
      <div className="relative col-start-1 col-span-3 row-start-1 row-span-2  lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 2xl:w-[32.65rem] 2xl:h-[24.9rem]">
        <img
          className="w-full h-full lg:w-full lg:h-full 2xl:rounded-[1.25rem]"
          src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/2c40b075118045280db92b8a7c597a6ce4315bb2/bindle/imgStatic/Rectangle%20222.svg"
          alt=""
        />
        {/* <span className="absolute bottom-[-1rem] right-[9%] block w-5/6 h-[2.9rem] text-center text-[0.63rem] leading-[0.9rem] font-normal rounded-lg opacity-80 bg-colorOptional lg:absolute lg:top-3/4 lg:left-[20%] lg:w-56 lg:h-28 lg:font-medium lg:text-base lg:text-center lg:backdrop-blur-opacityCard lg:bg-colorOposityB lg:rounded-xl 2xl:w-[20.32rem] 2xl:h-[10.57rem] 2xl:text-lg">
         I’ve spent a wonderful time here. Will come back for sure next
         year together with my family and friends.
       </span> */}
      </div>
      <div className="relative col-start-4 col-span-2 row-start-1 row-span-2  lg:w-56 lg:h-72 lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2 2xl:w-[20.32rem] 2xl:h-[24.88rem]">
        <img
          className="w-full h-full 2xl:rounded-[1.25rem]"
          src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/2c40b075118045280db92b8a7c597a6ce4315bb2/bindle/imgStatic/Rectangle%20223.svg"
          alt=""
        />
        {/* <span className="absolute bottom-[-1rem] left-[16%] block w-4/6 h-14 text-center text-[0.63rem] leading-[0.9rem] font-normal rounded-lg opacity-70 bg-colorOptional lg:top-3/4 lg:left-[14%] lg:w-40 lg:h-28 lg:font-medium lg:text-base lg:text-center lg:backdrop-blur-opacityCard lg:bg-colorOposityB lg:rounded-xl 2xl:w-[14.82rem] 2xl:h-[10.57rem] 2xl:text-lg">
         I absolutely love the beach and water here. Everything was
         wonderful.
       </span> */}
      </div>

      <div className="col-start-6 col-span-2 row-start-1 row-span-1  lg:w-72 lg:h-32 lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-1 lg:relative 2xl:w-[24.63rem] 2xl:h-[11.82rem]">
        <img
          className="w-full h-full lg:w-full lg:h-full 2xl:rounded-[1.25rem]"
          src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/2c40b075118045280db92b8a7c597a6ce4315bb2/bindle/imgStatic/Rectangle%20224.svg"
          alt=""
        />
      </div>
      <div className="col-start-6 col-span-2 row-start-2 row-span-1  lg:w-72 lg:h-32 lg:col-start-5 lg:col-span-2 lg:row-start-2 lg:row-span-1 lg:relative 2xl:w-[24.63rem] 2xl:h-[11.82rem]">
        <img
          className="w-full h-full lg:w-full lg:h-full 2xl:rounded-[1.25rem]"
          src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/2c40b075118045280db92b8a7c597a6ce4315bb2/bindle/imgStatic/Rectangle%20225.svg"
          alt=""
        />
      </div>
    </section>
  );
}
