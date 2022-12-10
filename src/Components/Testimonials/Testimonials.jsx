export function Testimonials({ changeValue, toggle, context, componentPhone, componentVideo }) {
  return (
    <>
      <section className="testimaials w-full h-auto py-5">
        <h5 className="font-semibold text-xl lg:text-2xl lg:font-bold 2xl:text-[2.5rem] 2xl:leading-[3rem]">
          {context}
        </h5>
        <div className="slider w-2/4 py-5 flex flex-row items-center justify-around">
          <span
            className={`mx-2 ${
              !toggle ? "border-b-2 border-solid border-colorBtn" : ""
            }`}
            onClick={changeValue}
          >
            Foto
          </span>
          <span
            className={`mx-2 ${
              toggle ? "border-b-2 border-solid border-colorBtn" : ""
            }`}
            onClick={changeValue}
          >
            Video
          </span>
        </div>
        {!toggle && componentPhone}
        {toggle && componentVideo}
      </section>
    </>
  );
}
