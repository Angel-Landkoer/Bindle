import { BntExploreAll } from "../BntExploreAll/BntExploreAll";
import { LinksPopular } from "./LinksPopular";

export function PopularD({ picturesMainPopularD, context }) {
  const {
    pictureFirstPopularD,
    pictureSecondPopularD,
    pictureThirdPopularD,
    pictureFourthPopularD,
  } = picturesMainPopularD;


  return (
    <>
      <section className="popularD w-full py-7 text-white">
        <section className="popularDHeader w-full my-8 flex flex-row justify-between">
          <h2 className="mr-2 text-xl text-defaultColor font-semibold lg:text-2xl lg:font-bold 2xl:text-[2.5rem] 2xl:leading-[3rem]">
            {context}
          </h2>
          <BntExploreAll route={"popularD"} include={1} />
        </section>
        <section className="popularDBody grid grid-cols-2 grid-rows-4 gap-3 w-full h-auto lg:grid-cols-4 lg:grid-rows-2 lg:gap-0 lg:place-content-center">
          <section className="relative col-start-1 col-span-2 row-start-1 row-span-2 justify-self-center rounded-b-lg lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2">
            <img
              className="w-72 h-[18.8rem] rounded-lg  lg:w-412 lg:h-410 lg:rounded-2xl 2xl:w-[37rem] 2xl:h-[36.9rem]"
              src={pictureFirstPopularD}
              alt=""
            />
            <div className="absolute bottom-0 flex flex-col justify-center items-start w-full h-16 px-3 rounded-b-lg bg-colorOposityB backdrop-blur-[36.4865px]">
              <LinksPopular>
                <span className="mx-2 font-semibold text-sm hover:underline">
                  Caguas, Svalbard & Jan Mayen Islands
                </span>
                <span className="mx-2 font-normal text-[0.625rem] leading-[0.875rem]">
                  $255.00
                </span>
              </LinksPopular>
            </div>
          </section>

          <section className="relative col-start-1 col-span-2 row-start-3 row-span-1 justify-self-center rounded-b-lg mr-[9.4rem] lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1">
            <img
              className="w-[8.7rem] h-36 lg:w-48 lg:h-48 rounded-lg  lg:rounded-2xl 2xl:w-[17.5rem] 2xl:h-[17.5rem]"
              src={pictureSecondPopularD}
              alt=""
            />
            <div className="absolute bottom-0 flex flex-col justify-center items-start w-full h-12 px-3 rounded-b-lg bg-colorOposityB backdrop-blur-[36.4865px]">
              <LinksPopular>
                <span className="mx-2 font-semibold text-sm hover:underline">
                  Hayesborough, Italy
                </span>
                <span className="mx-2 font-normal text-[0.625rem] leading-[0.875rem]">
                  $242.00
                </span>
              </LinksPopular>
            </div>
          </section>

          <section className="relative col-start-2 col-span-1 row-start-3 row-span-1 justify-self-start rounded-b-lg lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-1">
            <img
              className="w-[8.7rem] h-36 lg:w-48 rounded-lg lg:h-48 lg:rounded-2xl 2xl:w-[17.5rem] 2xl:h-[17.5rem]"
              src={pictureThirdPopularD}
              alt=""
            />
            <div className="absolute bottom-0 right-[-0.40px] flex flex-col justify-center items-start w-full h-14 px-3 rounded-b-lg bg-colorOposityB backdrop-blur-[36.4865px]">
              <LinksPopular>
                <span className="mx-2 font-semibold text-sm hover:underline">
                  Delray Beach, Zimbabwe
                </span>
                <span className="mx-2 font-normal text-[0.625rem] leading-[0.875rem]">
                  $353.00
                </span>
              </LinksPopular>
            </div>
          </section>

          <section className="relative col-start-1 col-span-2 row-start-4 row-span-1 justify-self-center rounded-b-lg lg:col-start-3 lg:col-span-2 lg:row-start-2 lg:row-span-1">
            <img
              className=" w-[17.85rem] h-36 rounded-lg lg:w-412 lg:h-48 lg:rounded-2xl 2xl:w-[37rem] 2xl:h-[17.5rem]"
              src={pictureFourthPopularD}
              alt=""
            />
            <div className="absolute bottom-0 flex flex-col justify-center items-start w-full h-12 px-3 rounded-b-lg bg-colorOposityB backdrop-blur-[36.4865px]">
              <LinksPopular>
                <span className="mx-2 font-semibold text-sm hover:underline">
                  West Fredamouth, Portugal
                </span>
                <span className="mx-2 font-normal text-[0.625rem] leading-[0.875rem]">
                  $195.00
                </span>
              </LinksPopular>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
