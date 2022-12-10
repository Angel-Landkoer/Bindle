export function ExploreMore({ children, context }) {
  return (
    <section className="exploreMore w-full h-screen pt-7 text-inherit lg:h-auto lg:mb-9 lg:p-0">
      <h4 className="text-xl font-semibold mb-3 lg:p-2 lg:font-bold lg:text-[2rem] lg:leading-10 lg:text-center 2xl:text-[2.5rem] 2xl:leading-[3rem]">
        {context}
      </h4>
      <section className="containerCardsHotels overflow-x-scroll flex flex-row py-5 mt-3 lg:overflow-hidden lg:flex lg:flex-row lg:flex-wrap lg:justify-center">
        {children}
      </section>
    </section>
  );
}
