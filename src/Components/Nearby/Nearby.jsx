export function Nearby({ children, context }) {
  const { title, text } = context;

  return (
    <>
      <section className="nearby flex flex-col justify-start items-start w-full h-screen mt-24 2xl:h-auto 2xl:pb-20 2xl:pt-8 2xl:mt-20 2xl:mb-48">
        <h3 className="font-semibold text-xl lg:py-2 lg:text-2xl lg:font-bold 2xl:text-[2.5rem] 2xl:leading-[3rem]">
          {title}
        </h3>
        <p className="text-base lg:font-normal lg:pt-1 lg:pb-4 lg:mb-4 2xl:text-lg 2xl:font-medium ">
          {text}
        </p>
        <section className="galeryCity grid grid-cols-2 grid-rows-2 gap-y-32 gap-x-36 overflow-x-scroll w-full h-auto py-5 mt-5 mb-8 lg:overflow-hidden lg:grid-cols-3 lg:grid-row-2 lg:gap-1 justify-items-center 2xl:grid-cols-3 2xl:grid-rows-2 2xl:gap-0 2xl:p-0 2xl:m-0">
          {children}
        </section>
      </section>
    </>
  );
}
