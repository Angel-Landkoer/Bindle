export function ContainerLinksF({ children }) {
  return (
    <>
      <section className="containerLinksF flex flex-col items-center justify-center w-full text-white lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-span-1 lg:flex lg:flex-row lg:justify-end">
        <ul className="flex flex-col items-start justify-evenly p-5 lg:flex lg:flex-row lg:justify-between lg:p-0">
          {children}
        </ul>
      </section>
    </>
  );
}
