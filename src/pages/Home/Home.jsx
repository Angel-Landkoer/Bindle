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
      img: "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/13846-pikachu-con-pokebola-png.png?fit=500%2C500&ssl=1",
      price: 350,
      typeHome: "Entire house",
      city: "Florida",
    },
    {
      title: "Luxury 3 Bedroom Apartment at Epicentral",
      stars: "4.60 (280)",
      img: "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/13846-pikachu-con-pokebola-png.png?fit=500%2C500&ssl=1",
      price: 350,
      typeHome: "Entire house",
      city: "Florida",
    },
    {
      title: "Luxury 3 Bedroom Apartment at Epicentral",
      stars: "4.60 (280)",
      img: "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/13846-pikachu-con-pokebola-png.png?fit=500%2C500&ssl=1",
      price: 350,
      typeHome: "Entire house",
      city: "Florida",
    },
    {
      title: "Luxury 3 Bedroom Apartment at Epicentral",
      stars: "4.60 (280)",
      img: "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/13846-pikachu-con-pokebola-png.png?fit=500%2C500&ssl=1",
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

  return (
    <>
      <header>
        <section className="header mobile:py-5 mobile:px-10 mobile:bg-headerMobileImgCenter mobile:bg-no-repeat">
          <NavBar />
          <FrameDiscoverHeader
            title={"Discover New Destination"}
            description={
              "This modern trend looks nice and all, but we fell into the same trap again."
            }
          />
        </section>
      </header>
      <main>
        <section className="main mobile:w-full mobile:py-5 mobile:px-10">
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
              <HotelCard key={`HotelCard-${i}`} item={item} />
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
              <HomeCard key={`homeCard-${i}`} data={item} i={i}></HomeCard>
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
      <footer>
        <section className="footer"></section>
      </footer>
    </>
  );
}
