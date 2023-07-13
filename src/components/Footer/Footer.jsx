export function Footer() {
  return (
    <footer>
      <section
        className="
          footer mobile:flex mobile:flex-col mobile:justify-between mobile:py-5 mobile:px-9 mobile:w-full mobile:h-[705px] mobile:bg-charcoal mobile:text-neutral
          sm:py-6
          md:py-7
          laptop:grid laptop:grid-col-3 laptop:grid-rows-3 laptop:h-80
          xl:px-11
          desktop:grid-col-5 desktop:grid-row-3 desktop:p-4
        "
      >
        <section className="
        mobile:flex mobile:flex-col mobile:justify-evenly mobile:items-center mobile:self-center mobile:w-96 mobile:h-48 
        laptop:col-start-1 laptop:col-span-2 laptop:row-start-1 laptop:row-span-2 laptop:w-[358px] xl:w-5/6">
          <figure className="mobile:w-20 mobile:h-7 sm:w-24 sm:h-9 md:w-28 md:h-10 laptop:hidden">
            <img
              className="mobile:w-full mobile:h-full"
              src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/58696af2a1823ecfc31b3b9f8de6d5b6e9d1bd02/bindle/logos/Group.svg"
              alt="Logo in the website"
            />
          </figure>
          <section className="
          mobile:flex mobile:flex-col mobile:justify-around mobile:self-center mobile:w-[306px] mobile:h-[128px] mobile:text-center 
          laptop:w-full laptop:text-start
          ">
            <h6 className="mobile:text-inherit mobile:text-xl mobile:font-semibold laptop:text-2xl xl:text-3xl desktop:text-[32px] desktop:leading-9">
              Explore the world with Bindle!
            </h6>
            <p className="mobile:text-inherit mobile:text-sm mobile:font-medium xl:w-96">
              We offer tailored services for all your traveling needs. Our host
              are wonderful, ready to accommodate your stay as you enjoy your
              vacation without worries.
            </p>
          </section>
        </section>
        <div className="mobile:w-full mobile:h-0.5 mobile:rounded-full mobile:bg-neutral laptop:hidden" />
        <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:self-center mobile:w-80 mobile:h-52 mobile:py-2 laptop:col-start-3 laptop:col-span-3 laptop:row-start-1 laptop:row-span-1 laptop:w-full">
          <ul className="mobile:flex mobile:flex-col mobile:justify-evenly mobile:h-full laptop:flex-row laptop:justify-around laptop:items-center laptop:w-full xl:w-5/6">
            <li className="mobile: laptop:px-1 laptop:mx-2">Home</li>
            <li className="mobile: laptop:px-1 laptop:mx-2">Blog</li>
            <li className="mobile: laptop:px-1 laptop:mx-2">Help center</li>
            <li className="mobile: laptop:px-1 laptop:mx-2">Privacy policy</li>
            <li className="mobile: laptop:px-1 laptop:mx-2">Contact Us</li>
          </ul>
        </section>
        <div className="mobile:w-full mobile:h-0.5 mobile:rounded-full mobile:bg-neutral laptop:hidden" />
        <section className="mobile:flex mobile:flex-col mobile:justify-around mobile:items-center mobile:w-full mobile:h-28 mobile:text-neutral laptop:col-start-4 laptop:col-span-2 laptop:row-start-2">
          <span className="mobile:inline laptop:hidden">
            Subscribe to our newsletter
          </span>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mobile:relative mobile:w-80 mobile:h-11 laptop:w-[405px] laptop:h-14"
          >
            <label
              className="mobile:relative mobile:w-full mobile:h-full"
              htmlFor="search"
            >
              <input
                type="search"
                id="search"
                placeholder="Enter your email address"
                className="mobile:w-full mobile:h-full mobile:rounded-md mobile:px-3 mobile:text-neutral mobile:bg-[#F6F6F6] mobile:opacity-20 mobile:placeholder:pl-2 mobile:placeholder:text-[10px] mobile:placeholder:opacity-0 mobile:placeholder:text-neutral"
              />
            </label>
            <button className="mobile:absolute mobile:right-4 mobile:top-2 mobile:w-[66.81px] mobile:h-[27.64px] mobile:px-3 mobile:py-1.5 mobile:text-[0.63rem] mobile:rounded mobile:bg-orange laptop:w-20 laptop:h-9 laptop:py-2 laptop:px-4 laptop:text-sm">
              Send
            </button>
          </form>
        </section>
        <section className="mobile:flex mobile:flex-col mobile:justify-between mobile:items-center mobile:h-20 laptop:col-start-1 laptop:col-span-5 laptop:row-start-3 laptop:flex-row-reverse laptop:justify-between laptop:w-full">
          <section className="mobile:flex mobile:justify-evenly mobile:w-3/6 laptop:w-3/12">
            <div className="mobile:flex mobile:justify-center mobile:items-center mobile:w-8 mobile:h-8 mobile:rounded-full mobile:bg-neutral laptop:w-12 laptop:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.45em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ff6647"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </div>
            <div className="mobile:flex mobile:justify-center mobile:items-center mobile:w-8 mobile:h-8 mobile:rounded-full mobile:bg-neutral laptop:w-12 laptop:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.45em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ff6647"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </svg>
            </div>
            <div className="mobile:flex mobile:justify-center mobile:items-center mobile:w-8 mobile:h-8 mobile:rounded-full mobile:bg-neutral laptop:w-12 laptop:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.45em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ff6647"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </div>
          </section>
          <span className="mobile:text-xs mobile:font-medium md:text-sm">
            © 2021 Bindle.
          </span>
        </section>
      </section>
    </footer>
  );
}
