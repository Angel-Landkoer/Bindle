export function DiscoverNewH({ children, context }) {

  const {title, text} = context

  return (
    <>
      <section className="discoverNewH flex justify-center items-center flex-col w-full my-14 lg:z-30 lg:col-start-1 lg:col-span-4 lg:row-start-2 lg:row-span-2 lg:w-72 lg:h-40 lg:my-11 lg:flex lg:flex-col lg:items-start 2xl:w-[25.5rem] 2xl:h-[14.4rem]">
        <h1 className="text-[2.50rem] leading-[3rem] font-bold text-center lg:pb-4 lg:text-[2.50rem] lg:leading-[3rem] lg:font-normal lg:text-start 2xl:text-[4rem] 2xl:leading-[4.5rem]">
          {title}
        </h1>
        <p className="text-base font-normal text-center p-6 lg:text-base lg:text-start lg:font-bold lg:p-0 2xl:font-medium 2xl:text-lg">
          {text}
        </p>
        {children}
      </section>
    </>
  );
}
