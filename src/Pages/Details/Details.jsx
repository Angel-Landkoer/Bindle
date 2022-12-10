import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAdmission } from "../../utils/useAdmission";

export function Details() {
  const { idHotels, idCity, idHotelsPrice } = useParams();

  const navigate = useNavigate();

  const [dataID, setDataID] = useState({});

  const [redirect, setRedirect] = useState({
    confirm: false,
    redirectHome: false,
  });

  const { storageState } = useAdmission();

  const { confirm, redirectHome } = redirect;

  useEffect(() => {
    async function apiID() {
      try {
        const response = await fetch(
          `https://633c5fc1f11701a65f752782.mockapi.io/newhotles/${
            idHotels || idCity || idHotelsPrice
          }`
        );
        const data = await response.json();
        setDataID(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    if (idCity || idHotels || idHotelsPrice) {
      apiID();
    }

    if (confirm) {
      navigate(`/login`);
    }

    if (redirectHome) {
      navigate("/hotelreservations");
    }
  }, [idHotels, idCity, idHotelsPrice, redirect]);

  const { nameHotel, locationCity, pictureHotel, price } = dataID;

  const { local, session } = storageState;

  const redirectionDetail = () => {
    if (!local && !session) {
      setRedirect({ ...redirect, confirm: true, redirectHome: false });
    }

    if (local && session) {
      setRedirect({ ...redirect, confirm: false, redirectHome: true });
    }
  };

  return (
    <>
      <section className="details flex flex-col items-center justify-center w-full lg:flex-row lg:items-center lg:justify-around lg:flex-wrap lg:h-screen">
        <figure className="w-80 h-60 my-0 mx-auto lg:w-[34.4rem] lg:h-[25.9rem]">
          <img
            className="w-full h-full rounded-lg lg:rounded-xl"
            src={pictureHotel}
            alt=""
          />
        </figure>

        <section className="contextDetails">
          <section className="titles p-5">
            <h3 className="text-xl font-bold lg:p-2 lg:text-2xl 2xl:text-4xl 2xl:p-4">
              {nameHotel}
            </h3>
            <h5 className="text-lg font-bold lg:p-2 lg:text-xl 2xl:text-2xl 2xl:p-4">
              {locationCity}
            </h5>
          </section>
          <section className="flex flex-col items-center justify-center w-full p-4 lg:w-[40rem] lg:flex-row lg:flex-wrap lg:justify-center lg:p-16 2xl:w-[40rem]">
            <p className="font-normal text-[1rem] leading-6 mb-2 lg:text-xl lg:p-5 2xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              rem tempore dolorem.
            </p>
            <span className="font-semibold text-lg mt-2 lg:text-xl 2xl:text-4xl">{`$${price}`}</span>
          </section>
          <section className="flex flex-row items-center justify-evenly my-5 lg:flex-row lg:items-center lg:justify-around 2xl:flex-row">
            <button
              onClick={redirectionDetail}
              className="p-3 text-sm font-medium text-littleWhite bg-colorBtn rounded hover:bg-opacity-70 hover:bg-colorBtn hover:drop-shadow-2xl hover:text-colorOptional lg:w-28 lg:h-16 lg:text-lg lg:font-semibold lg:rounded-md 2xl:w-32 2xl:h-20 2xl:text-xl 2xl:font-semibold 2xl:rounded-lg"
            >
              Reserve
            </button>
            <button className="p-3 text-sm font-medium text-littleWhite bg-colorBtn rounded hover:bg-opacity-70 hover:bg-colorBtn hover: hover:text-colorOptional lg:w-28 lg:h-16 lg:text-lg lg:font-semibold lg:rounded-md 2xl:w-32 2xl:h-20 2xl:text-xl 2xl:font-semibold 2xl:rounded-lg">
              Save View
            </button>
          </section>
        </section>
      </section>
    </>
  );
}
