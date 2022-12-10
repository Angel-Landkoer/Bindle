import { BntExploreAll } from "../BntExploreAll/BntExploreAll";

export function FeaturedH({ children, context }) {
  const { title, text } = context;

  return (
    <>
      <section className="featuredH w-full h-screen pt-7 pb-8 mt-[2.5rem] lg:h-auto">
        <section className="blck lg:grid lg:grid-cols-2 lg:grid-row-2 lg:items-center 2xl:gap-2">
          <h6 className="font-semibold text-xl mb-3 lg:col-start-1 lg:col-span-1 lg:font-bold lg:text-3xl 2xl:text-[2.5rem] 2xl:leading-[3rem]">
            {title}
          </h6>
          <p className="text-sm font-medium lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 lg:text-sm lg:font-medium 2xl:text-base 2xl:leading-6 2xl:font-normal">
            {text}
          </p>
          <BntExploreAll route={"/"} include={0} />
        </section>
        <section className="galeryCardData flex flex-row overflow-x-scroll my-5 lg:overflow-hidden lg:grid lg: grid-cols-4 lg:grid-rows-2 lg:justify-items-center">
          {children}
        </section>
      </section>
    </>
  );
}
