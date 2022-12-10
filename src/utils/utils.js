export const routes = [
  { nameList: "About", links: "/About" },
  { nameList: "Blog", links: "/Blog" },
  { nameList: "Help Center", links: "/HelpCenter" },
  { nameList: "Privacy Policy", links: "/PrivacyPolicy" },
  { nameList: "Contact Us", links: "/ContactUs" },
];


// context - title & text

// Component DiscoverH
export const contextDicoverH = {
  title: "Discover New Destination",
  text: "This modern trend looks nice and all, but we fell into the same trap again."
}

// component NearbyS
export const contextNearby = {
  title: "Nearby stays",
  text: "Because you viewed vacation homes in this city"
}

// componet ExploreM
export const exploreTitle = "Explore more travel vacation rentals"

// component PopularD
export const popularTitle = "Popular Destinations"

// component Featured
export const contextFeatured = {
  title: "Featured homes recommended for you",
  text: "Because you viewed vacation homes in this city"
}

// title Testimonials & Gallery
export const testimonialsTitle = "Testimonials & Gallery"

// component GetTTheBest
export const contextGetTheBest = {
  title: "Get the best discounts for your family vacation.",
  listText: {
    oneItem: "Best discounts ever",
    twoItem: "Free offers",
    threeItem: "Fast & secure payments"
  }
}

// Component Footer - ContainerContext
export const contextContainer = {
  title: "Explore the world with Bindle!",
  text: "We offer tailored services for all your traveling needs. Our host are wonderful, ready to accommodate your stay as you enjoy your vacation without worries."
}
//

// Component BackgroundImageH
export const backGroundImgHeader = {
  backGroundImgFirst:
    "https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle2.svg",
  backGroundImgSecond:
    "https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle4.svg",
  backGroundImgThird:
    "https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/09c985569f98a5308c371880650f2cff17e4c608/bindle/imgStatic/Rectangle3.svg",
};


// Component PopularD
export const picturesMainPopularD = {
  pictureFirstPopularD:
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/68777124.jpg?k=464f8f423126a88efb7c642a4e7912130b0e7a8907ab7c55f79e5245dac00728&o=&hp=1",
  pictureSecondPopularD:
    "https://media-cdn.tripadvisor.com/media/photo-s/21/5f/dc/8b/exterior-view.jpg",
  pictureThirdPopularD:
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164125773.jpg?k=e8f95c24677104135121de711f0a74914b698c14cf670d0cd9f2438a36b27081&o=&hp=1",
  pictureFourthPopularD:
    "https://www.thesafaricollection.com/wp-content/uploads/2018/12/The-Safari-Collection-ariel-shot-of-giraffe-manor.jpg",
};

// Component testimonials & gallery
// videos
export const videos = [
  "https://www.youtube.com/watch?v=kXYiU_JCYtU",
  "https://www.youtube.com/watch?v=eVTXPUF4Oz4",
];

// Component ContainerIcons
export const icons = [
  { link: 'https://twitter.com/', type: 'fa-brands fa-twitter' },
  { link: 'https://www.facebook.com/', type: 'fa-brands fa-facebook' },
  { link: 'https://www.instagram.com/', type: 'fa-brands fa-instagram' }
]

// styles

// Components search
export const stylesSearch = {
  discover: {
    input:
      "w-[19.44rem] h-[2.63rem] rounded-xl text-xs text-defaultColor p-4 placeholder:text-xs placeholder:font-normal placeholder:text-neutral_n500",
    placeHolder: "Where are you going",
  },
  popularPage: {
    input:
      "w-60 h-8 p-3 my-3 font-medium text-xs bg-colorBgInput border-none rounded-md placeholder:px-4",
    placeHolder: "Search the City",
  },
};

export const allExport = {
  contextDicoverH,
  contextNearby,
  popularTitle,
  contextFeatured,
  exploreTitle,
  testimonialsTitle,
  contextGetTheBest,
  contextContainer,
  stylesSearch,
  picturesMainPopularD,
  backGroundImgHeader,
  videos,
  routes,
  icons
}