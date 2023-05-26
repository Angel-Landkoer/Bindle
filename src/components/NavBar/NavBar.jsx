export function NavBar() {
  return (
    <nav className="navBar mobile:flex justify-between mobile:items-center">
      <figure className="mobile:w-20 mobile:h-20">
        <img
          className="mobile:w-full mobile:h-full"
          src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/a770cd1a6d9526ef1ed2d13c423f6a30112da8eb/bindle/logos/Group.svg"
          alt="logo in the website"
        />
      </figure>
      <section className="configNav">
        <section className="mobile:hidden"></section>
        <section className="user mobile:flex mobile:flex-row mobile:justify-evenly mobile:items-center mobile:w-16 mobile:h-10 mobile:rounded-3xl mobile:border mobile:border-neutral">
          <span>.</span>
          <img
            className="mobile:w-6 mobile:h-6"
            src="https://sandstormit.com/wp-content/uploads/2021/06/incognito-2231825_960_720-1.png"
            alt="image the a person"
          />
        </section>
      </section>
    </nav>
  );
}
