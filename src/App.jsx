// React Route
import { Routes, Route } from "react-router-dom";

// Pages
import { HotelReservations } from "./Pages/HotelReservations/HotelReservations";
import { Details } from "./Pages/Details/Details";
import { Popular } from "./Pages/Popular/Popular";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Error } from "./Pages/Error/Error";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
// import { PopularDestinations } from "./Pages/PopularDestinations/PopularDestinations";

// Componentes

import { Footer } from "./Components/Footer/Footer";

// ProtectedRoute
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <ProtectedRoute>
              <h1>About</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="blog"
          element={
            <ProtectedRoute>
              <h1>Blog</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="helpCenter"
          element={
            <ProtectedRoute>
              <h1>Help Center</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="privacyPolicy"
          element={
            <ProtectedRoute>
              <h1>Privacy Policy</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="contactUs"
          element={
            <ProtectedRoute>
              <h1>Contact Us</h1>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="popularD"
          element={
            <ProtectedRoute>
              <PopularDestinations />
            </ProtectedRoute>
          } 
        /> */}
        <Route
          path="/nearby/:idCity"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore/:idHotels"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/populard"
          element={
            <ProtectedRoute>
              <Popular />
            </ProtectedRoute>
          }
        />
        <Route
          path="/featured/:idHotelsPrice"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="hotelreservations"
          element={
            <ProtectedRoute>
              <HotelReservations />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
