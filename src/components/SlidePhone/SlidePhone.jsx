export function SlidePhone() {
  return (
    <section className="mobile:grid mobile:grid-cols-3 mobile:grid-rows-2 mobile:w-full mobile:h-full mobile:my-10 mobile:py-3 mobile:overflow-x-scroll">
      <section className="mobile:relative mobile:col-start-1 mobile:row-start-1 mobile:row-span-2 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
        <figure className="mobile:w-56 mobile:h-[170px]">
          <img
            src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/d86d5f1f242389263f872686cce3b11b6b62c837/bindle/imgStatic/sectionTerAndGall/Rectangle222.svg"
            alt=""
            className="mobile:w-full mobile:h-full mobile:rounded-lg" />
        </figure>
        <section className="mobile:absolute mobile:bottom-[-35px] mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:w-44 mobile:h-20 mobile:px-2  mobile:rounded-lg mobile:bg-white/30 mobile:backdrop-blur-lg">
          <figure className="mobile:absolute mobile:top-[-14px] mobile:w-7 mobile:h-7 ">
            <img
              src="https://github.com/Angel-Landkoer/The-pictures/blob/master/bindle/icons/iconTerm&Gall.png?raw=true"
              alt=""
              className="mobile:w-full mobile:h-full mobile:rounded-full" />
          </figure>
          <p className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-center mobile:text-charcoal">
            I’ve spent a wonderful time here. Will come back for sure next year
            together with my family and friends.
          </p>
        </section>
      </section>

      <section className="mobile:relative mobile:col-start-2 mobile:row-start-1 mobile:row-span-2 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
        <figure className="mobile:w-[139px] mobile:h-[170px]">
          <img
            src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/89aa843d8c73362d1b0f8859b6068c1c1861877f/bindle/imgStatic/sectionTerAndGall/Rectangle223.svg"
            alt=""
            className="mobile:w-full mobile:h-full mobile:rounded-lg" />
        </figure>
        <section className="mobile:absolute mobile:bottom-[-35px] mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:w-28 mobile:h-24 mobile:px-2  mobile:rounded-lg mobile:bg-white/30 mobile:backdrop-blur-lg">
          <figure className="mobile:absolute mobile:top-[-14px] mobile:w-7 mobile:h-7 ">
            <img
              src="https://github.com/Angel-Landkoer/The-pictures/blob/master/bindle/icons/iconTerm&Gall.png?raw=true"
              alt=""
              className="mobile:w-full mobile:h-full mobile:rounded-full" />
          </figure>
          <p className="mobile:text-[10px] mobile:leading-3 mobile:font-normal mobile:text-center mobile:text-charcoal">
            I absolutely love the beach and water here. Everything was
            wonderful.
          </p>
        </section>
      </section>
      <section className="mobile:w-[168px] mobile:h-20">
        <figure className="mobile:w-full mobile:h-full">
          <img
            src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/89aa843d8c73362d1b0f8859b6068c1c1861877f/bindle/imgStatic/sectionTerAndGall/Rectangle224.svg"
            alt=""
            className="mobile:w-full mobile:h-full" />
        </figure>
      </section>
      <section className="mobile:w-[168px] mobile:h-20">
        <figure className="mobile:w-full mobile:h-full">
          <img
            src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/89aa843d8c73362d1b0f8859b6068c1c1861877f/bindle/imgStatic/sectionTerAndGall/Rectangle225.svg"
            alt=""
            className="mobile:w-full mobile:h-full" />
        </figure>
      </section>
    </section>
  );
}
