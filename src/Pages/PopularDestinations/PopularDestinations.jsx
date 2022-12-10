// imports React-router
import { Link } from "react-router-dom";

//  Components
import { SearchCity } from "../../Components/SearchCity/SearchCity";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Menu } from "../../Components/NavBar/Menu";

// Custom Hook
import { useMyHook } from "../../utils/useMyHook";
import { CardsHotels } from "../../Components/CardsHotels/CardsHotels";

export function PopularDestinations() {
  const { displayValue, resolveData, routes, toggleDisplay, styleInput } =
    useMyHook();

  const { popularPage } = styleInput;

  console.log("render");

  return (
    <>
      <header>
        <section className="header w-full h-screen bg-imgHeaderPopular bg-cover bg-no-repeat lg:bg-imgHeader">
          <NavBar>
            <Menu
              toggleDisplay={toggleDisplay}
              funDisplayValue={displayValue}
              routes={routes}
              renderList={(item, i) => (
                <Link
                  key={`navList${i}`}
                  to={`${item.links}`}
                  className="hover:bg-colorBtn hover:rounded-lg"
                >
                  <li className="p-4 hover:text-white">{item.nameList}</li>
                </Link>
              )}
            />
          </NavBar>
          <section className="contextInicial w-full p-3 text-white">
            <h1 className="text-3xl font-semibold text-center">
              PopularDestinations
            </h1>
            <p className="text-lg font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis rerum ea cupiditate?
            </p>
          </section>
          <SearchCity styleInput={popularPage} />
        </section>
      </header>
      <main>
        <section
          className={`main w-full ${
            resolveData.length
              ? "h-auto"
              : "h-screen bg-defaultColor border border-solid border-white"
          } h-auto text-black`}
        >
          <section className="flex flex-row flex-wrap justify-center items-center ">
            {resolveData.length ? (
              resolveData.map((item, i) => (
                <CardsHotels key={`Card-${i}`} dataAPI={item} />
              ))
            ) : (
              <h3 className="text-white">Wait Me Please</h3>
            )}
          </section>
        </section>
      </main>
    </>
  );
}
