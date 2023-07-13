export function NavBar() {
  return (
    <nav className="navBar mobile:flex justify-between mobile:items-center laptop:w-full laptop:h-[52px] xl:h-[60px] desktop:h-[66px]">
      <figure className="mobile:w-20 mobile:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 laptop:w-[123px] laptop:h-11 xl:w-[130px] xl:h-12 desktop:w-[150px] desktop:h-14">
        <img
          className="mobile:w-full mobile:h-full"
          src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/a770cd1a6d9526ef1ed2d13c423f6a30112da8eb/bindle/logos/Group.svg"
          alt="logo in the website"
        />
      </figure>
      <section className="configNav laptop:flex laptop:justify-evenly laptop:items-center laptop:w-1/5 xl:w-2/6">
        <section className="mobile:hidden laptop:flex laptop:justify-center laptop:items-center laptop:gap-2 laptop:text-neutral xl:gap-4">
          <span className="laptop:hidden xl:inline desktop:text-sm">
            Text Text Text
          </span>
          <span className="laptop:text-inherit text-xs">Icon</span>
          <span className="laptop:text-inherit desktop:text-xs desktop:font-bold">
            EN
          </span>
        </section>
        <section
          className="
         user mobile:flex mobile:flex-row mobile:justify-evenly mobile:items-center mobile:w-16 mobile:h-10 mobile:rounded-3xl mobile:border mobile:border-neutral
         sm:w-20 sm:h-11
         laptop:w-[91px] laptop:h-[52px]
         "
        >
          <span>.</span>
          <img
            className="mobile:w-6 mobile:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            src="https://sandstormit.com/wp-content/uploads/2021/06/incognito-2231825_960_720-1.png"
            alt="image the a person"
          />
        </section>
      </section>
    </nav>
  );
}
