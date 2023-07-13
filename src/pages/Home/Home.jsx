import { NavBar } from "../../components/NavBar/NavBar";
import { FrameDiscoverHeader } from "../../components/FrameDiscoverHeader/FrameDiscoverHeader";
import { NearbyStays } from "../../components/NearbyStays/NearbyStays";
import { CityCard } from "../../components/CityCard/CityCard";
import { VacationRentals } from "../../components/VacationRentals/VacationRentals";
import { HotelCard } from "../../components/HotelCard/HotelCard";
import { FeaturedHomes } from "../../components/FeaturedHomes/FeaturedHomes";
import { HomeCard } from "../../components/HomeCard/HomeCard";
import { PopularDestinations } from "../../components/PopularDestinations/PopularDestinations";
import { TermAndGall } from "../../components/TermAndGall/TermAndGall";
import { SlidePhone } from "../../components/SlidePhone/SlidePhone";
import { SlideVideo } from "../../components/SlideVideo/SlideVideo";
import { GetDiscount } from "../../components/GetDiscount/GetDiscount";
import { Footer } from "../../components/Footer/Footer";
import { ExploreBar } from "../../components/ExploreBar/ExploreBar";
import { MiniSection } from "../../components/MiniSection/MiniSection";

export function Home() {
  const cityList = [
    {
      img: "",
      title: "1",
      text: "Lorem ipsum dolor sit.",
    },
    {
      img: "",
      title: "2",
      text: "Lorem ipsum dolor sit.",
    },
    {
      img: "",
      title: "3",
      text: "Lorem ipsum dolor sit.",
    },
    {
      img: "",
      title: "4",
      text: "Lorem ipsum dolor sit.",
    },
    {
      img: "",
      title: "5",
      text: "Lorem ipsum dolor sit.",
    },
    {
      img: "",
      title: "6",
      text: "Lorem ipsum dolor sit.",
    },
  ];

  const hotelList = [
    {
      img: "",
      title: "Entire homes",
      text: "156,786 properties",
    },
    {
      img: "",
      title: "Cabins and cottages",
      text: "156,786 properties",
    },
    {
      img: "",
      title: "Unique stays",
      text: "156,786 properties",
    },
    {
      img: "",
      title: "Pets welcome",
      text: "156,786 properties",
    },
  ];

  const featuresHome = [
    {
      title: "Luxury 3 Bedroom Apartment at Epicentral",
      stars: "4.60 (280)",
      img: "",
      price: 350,
      typeHome: "Entire house",
      city: "Florida",
    },
    {
      title: "Luxury 3 Bedroom Apartment at Epicentral",
      stars: "4.60 (280)",
      img: "",
      price: 350,
      typeHome: "Entire house",
      city: "Florida",
    },
    {
      title: "Luxury 3 Bedroom Apartment at Epicentral",
      stars: "4.60 (280)",
      img: "",
      price: 350,
      typeHome: "Entire house",
      city: "Florida",
    },
    {
      title: "Luxury 3 Bedroom Apartment at Epicentral",
      stars: "4.60 (280)",
      img: "",
      price: 350,
      typeHome: "Entire house",
      city: "Florida",
    },
  ];

  const propertiesVideo = [
    {
      src: "https://youtu.be/BVKEhdw8twI?list=RDMMz0gU4SGX0pc",
      poster:
        "https://animeandgameembroidery.com/wp-content/uploads/2020/11/escanor-symbol.jpg",
      loop: false,
      preload: "Loading...",
      with: "200px",
      height: "200px",
    },
    {
      src: "https://youtu.be/BVKEhdw8twI?list=RDMMz0gU4SGX0pc",
      poster:
        "https://animeandgameembroidery.com/wp-content/uploads/2020/11/escanor-symbol.jpg",
      loop: false,
      preload: "Loading...",
      with: "200px",
      height: "200px",
    },
    {
      src: "https://youtu.be/BVKEhdw8twI?list=RDMMz0gU4SGX0pc",
      poster:
        "https://animeandgameembroidery.com/wp-content/uploads/2020/11/escanor-symbol.jpg",
      loop: false,
      preload: "Loading...",
      with: "200px",
      height: "200px",
    },
    {
      src: "https://youtu.be/BVKEhdw8twI?list=RDMMz0gU4SGX0pc",
      poster:
        "https://animeandgameembroidery.com/wp-content/uploads/2020/11/escanor-symbol.jpg",
      loop: false,
      preload: "Loading...",
      with: "200px",
      height: "200px",
    },
  ];

  const miniSections = [
    {
      title: "Location",
      subTitle: "Your destination",
    },
    {
      title: "Date",
      subTitle: "When does it start?",
    },
    {
      title: "People",
      subTitle: "How many people?",
    },
  ];

  return (
    <>
      <header>
        <section
          className="
            header mobile:flex mobile:flex-col mobile:py-5 mobile:px-10 mobile:w-full mobile:h-auto mobile:bg-headerMobileImgCenter mobile:bg-no-repeat mobile:bg-cover
            sm:py-6 sm:px-11
            md:py-7 md:px-12
            laptop:relative laptop:h-[584.456px]
            xl:h-[610px]
            desktop:h-[822px] desktop:px-20 desktop:py-8
         "
        >
          <NavBar />
          <FrameDiscoverHeader
            title={"Discover New Destination"}
            description={
              "This modern trend looks nice and all, but we fell into the same trap again."
            }
          />
          <section
            className="
            mobile:hidden 
            laptop:absolute laptop:right-0 laptop:bottom-14 laptop:grid laptop:grid-cols-2 laptop:grid-rows-2 laptop:gap-4 laptop:w-[544.731px] laptop:h-[416.656px] 
            xl:bottom-8 xl:right-5 xl:gap-6
            desktop:w-[738px] desktop:h-[586px] desktop:bottom-20 desktop:right-8
            "
          >
            <figure className="laptop:col-start-1 laptop:row-start-1 laptop:w-[270.897px] laptop:h-[140.07px] xl:w-[276px] xl:h-[146px] desktop:w-[381px] desktop:h-[197px]">
              <img
                className="laptop:w-full laptop:h-full"
                src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/58696af2a1823ecfc31b3b9f8de6d5b6e9d1bd02/bindle/imgStatic/headerImg/Rectangle2.svg"
                alt=""
              />
            </figure>
            <figure className="laptop:col-start-1 laptop:row-start-2 laptop:w-[270.897px] laptop:h-[218.282px] xl:w-[276px] xl:h-[202px] desktop:w-[381px] desktop:h-[307px]">
              <img
                className="laptop:w-full laptop:h-full"
                src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/58696af2a1823ecfc31b3b9f8de6d5b6e9d1bd02/bindle/imgStatic/headerImg/Rectangle4.svg  "
                alt=""
              />
            </figure>
            <figure className="laptop:col-start-2 laptop:row-start-1 laptop:row-span-2 laptop:self-center laptop:w-[231.081px] laptop:h-[368.307px] xl:w-[239px] xl:h-[373px] desktop:w-[381px] desktop:h-[518px]">
              <img
                className="laptop:w-full laptop:h-full"
                src="https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/58696af2a1823ecfc31b3b9f8de6d5b6e9d1bd02/bindle/imgStatic/headerImg/Rectangle3.svg"
                alt=""
              />
            </figure>
          </section>
          <ExploreBar
            data={miniSections}
            funcMap={(item) => (
              <MiniSection key={`miniSection-${item.title}`} data={item} />
            )}
            btnTitle={`Explore Now`}
          />
        </section>
      </header>
      <main>
        <section className="main mobile:flex mobile:flex-col mobile:w-full mobile:py-5 mobile:px-7 sm:py-6 sm:px-8 md:py-7 md:px-10 desktop:px-20 desktop:py-8">
          <NearbyStays
            funcMap={(item) => (
              <CityCard key={`titleCard-${item.title}`} data={item} />
            )}
            data={cityList}
            title={`Nearby stays`}
            description={`Because you viewed vacation homes in this city`}
          />
          <VacationRentals
            data={hotelList}
            funcMap={(item, i) => (
              <HotelCard key={`HotelCard-${i}`} data={item} />
            )}
            title={`Explore more travel vacation rentals`}
          />
          <PopularDestinations
            title={`Popular Destinations`}
            contentImgFirst={{
              img: "https://github.com/Angel-Landkoer/The-pictures/blob/master/bindle/imgStatic/sectionPopDes/Rectangle%2022.png?raw=true",
              altImg: "Image the a Hotel",
              city: "East Coast",
              country: "America",
              properties: 146.786,
            }}
            contentImgSecond={{
              img: "https://github.com/Angel-Landkoer/The-pictures/blob/master/bindle/imgStatic/sectionPopDes/Rectangle%209.png?raw=true",
              altImg: "Image in the city and beach",
              city: "Chicago",
              country: "America",
              properties: 129.786,
            }}
            contentImgThird={{
              img: "https://github.com/Angel-Landkoer/The-pictures/blob/master/bindle/imgStatic/sectionPopDes/Rectangle%2017.png?raw=true",
              altImg: "Image the center city",
              city: "Florida",
              country: "America",
              properties: 136.786,
            }}
            contentImgFourth={{
              img: "https://github.com/Angel-Landkoer/The-pictures/blob/master/bindle/imgStatic/sectionPopDes/Rectangle%2030.png?raw=true",
              altImg: "Image the Navigating on a river surrounded by mountains",
              city: "Florida",
              country: "America",
              properties: 186.786,
            }}
          />
          <FeaturedHomes
            data={featuresHome}
            title={`Featured homes recommended for you`}
            description={`Because you viewed vacation homes in this city`}
            funcMap={(item, i) => (
              <HomeCard key={`homeCard-${i}`} data={item} i={i} />
            )}
          />
          <TermAndGall
            title={`Testimonials & Gallery`}
            phoneComponent={<SlidePhone />}
            videoComponent={
              <SlideVideo
                data={propertiesVideo}
                funcMap={(item, i) => (
                  <video
                    key={`video-${i}`}
                    src={item.src}
                    controls
                    loop={item.loop}
                    poster={item.poster}
                    preload={item.poster}
                    width={item.with}
                    height={item.height}
                  />
                )}
              />
            }
          />
          <GetDiscount
            title={`Get the best discounts for your family vacation.`}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
