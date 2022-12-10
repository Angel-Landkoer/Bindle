export function BackgroundImagesH({ backGroundImgHeader }) {
  const { backGroundImgFirst, backGroundImgSecond, backGroundImgThird } =
    backGroundImgHeader;

  return (
    <section className="hidden lg:z-20 lg:grid lg:col-start-5 lg:col-span-4 lg:row-start-2 lg:row-span-3 lg:grid-cols-2 lg:grid-rows-4 gap-4 lg:content-center lg:items-baseline lg:justify-items-center p-2 2xl:gap-4">
      <img
        className="lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:self-center lg:w-72 lg:h-48 2xl:w-[23.8rem] 2xl:h-[12.3rem]"
        src={backGroundImgFirst}
        alt=""
      />
      <img
        className="lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-2 lg:w-72 lg:h-52 2xl:w-[23.8rem] 2xl:h-[19.2rem]"
        src={backGroundImgSecond}
        alt=""
      />
      <img
        className="lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-4 lg:w-56 lg:h-96 2xl:w-[20.3rem] 2xl:h-[32.4rem]"
        src={backGroundImgThird}
        alt=""
      />
    </section>
  );
}
