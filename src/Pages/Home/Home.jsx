// React - Router
import { NavLink } from "react-router-dom";

// Components
import { DiscoverNewH } from "../../Components/DiscoverNewH/DiscoverNewH";
import { BackgroundImagesH } from "../../Components/BackgroundImagesH/BackgroundImagesH";

import { NavBar } from "../../Components/NavBar/NavBar";
import { Menu } from "../../Components/NavBar/Menu";

import { Nearby } from "../../Components/Nearby/Nearby";
import { MiniCardsCity } from "../../Components/Nearby/MiniCardsCity";

import { ExploreMore } from "../../Components/ExploreMore/ExploreMore";
import { CardsHotels } from "../../Components/ExploreMore/CardsHotels";

import { PopularD } from "../../Components/PopularD/PopularD";

import { FeaturedH } from "../../Components/FeaturedH/FeaturedH";
import { CardsData } from "../../Components/FeaturedH/CardsData";

import { Testimonials } from "../../Components/Testimonials/Testimonials";
import { DataPhoto } from "../../Components/Testimonials/DataPhoto";
import { DataVideo } from "../../Components/Testimonials/DataVideo";

import { GetTTheBest } from "../../Components/GetTheBest/GetTTheBest";

import { SearchCity } from "../../Components/SearchCity/SearchCity";
import { HeaderBar } from "../../Components/HeaderBar/HeaderBar";

// Custom Hook
import { useFetchData } from "../../utils/useFetchData";
import { useToggle } from "../../utils/useToggle";

import { allExport } from "../../utils/utils";

export function Home() {
  const { setToggleDisplay, toggleDisplay, toggle, changeValue, displayValue } =
    useToggle();

  const {
    backGroundImgHeader,
    picturesMainPopularD,
    videos,
    routes,
    stylesSearch,
    contextDicoverH,
    contextNearby,
    popularTitle,
    contextFeatured,
    exploreTitle,
    testimonialsTitle,
    contextGetTheBest,
    contextContainer,
  } = allExport;

  const { fetchData } = useFetchData();

  return (
    <>
      <header>
        <section className="header w-full h-screen text-white font-fontFamilyDefault bg-imgHeader bg-no-repeat bg-cover lg:grid lg:grid-cols-8 lg:grid-rows-6 lg:h-screen lg:px-12 lg:bg-imgHeaderBig">
          <NavBar>
            <Menu
              toggleDisplay={toggleDisplay}
              setToggleDisplay={setToggleDisplay}
              funDisplayValue={displayValue}
              routes={routes}
              renderList={(item, i) => (
                <NavLink
                  className={(isActive) =>
                    isActive ? `hover:bg-colorBtn hover:rounded-lg` : undefined
                  }
                  to={`${item.links}`}
                  key={`navList${i}`}
                >
                  <li className="p-4 hover:text-white">{item.nameList}</li>
                </NavLink>
              )}
            />
          </NavBar>
          <DiscoverNewH context={contextDicoverH}>
            <SearchCity stylesSearch={stylesSearch} />
          </DiscoverNewH>
          <HeaderBar />
          <BackgroundImagesH backGroundImgHeader={backGroundImgHeader} />
        </section>
      </header>
      <main>
        <section className="main w-full flex flex-col px-8 font-fontFamilyDefault text-defaultColor lg:px-12">
          <Nearby context={contextNearby}>
            {fetchData.length ? (
              fetchData
                .splice(1, 6)
                .map((item, i) => (
                  <MiniCardsCity key={item.id} dataMiniCards={item} />
                ))
            ) : (
              <span>Loading...</span>
            )}
          </Nearby>
          <ExploreMore context={exploreTitle}>
            {fetchData.length ? (
              fetchData.splice(5, 9).map((item, i) => (
                <NavLink
                  key={`explireMoreLink${i}`}
                  to={`/explore/${item.id}`}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  <CardsHotels dataHotel={item} />
                </NavLink>
              ))
            ) : (
              <span>Loading..</span>
            )}
          </ExploreMore>
          <PopularD
            context={popularTitle}
            picturesMainPopularD={picturesMainPopularD}
          />
          <FeaturedH context={contextFeatured}>
            {fetchData.length ? (
              fetchData
                .splice(3, 8)
                .map((item) => <CardsData key={item.id} dataMore={item} />)
            ) : (
              <span>Loading..</span>
            )}
          </FeaturedH>
          <Testimonials
            context={testimonialsTitle}
            toggle={toggle}
            changeValue={changeValue}
            componentPhone={<DataPhoto />}
            componentVideo={<DataVideo videos={videos} />}
          />
          <GetTTheBest context={contextGetTheBest} />
        </section>
      </main>
    </>
  );
}
