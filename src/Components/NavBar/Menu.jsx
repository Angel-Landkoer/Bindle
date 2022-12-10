export function Menu({
  toggleDisplay,
  setToggleDisplay,
  funDisplayValue,
  renderList,
  routes,
}) {
  const captureUser = JSON.parse(localStorage.getItem("user"));
  const handleCloseSession = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    setToggleDisplay(false);
    location.reload();
  };

  return (
    <section className="menu flex flex-row items-center justify-evenly z-40 ">
      <button
        className="flex flex-row justify-around items-center w-[4.3rem] h-[2.44rem] p-1.5 border border-solid border-white rounded-2xl lg:w-[5.7rem] lg:h-[3.3rem] lg:rounded-3xl"
        onClick={funDisplayValue}
      >
        <i className="fa-solid fa-bars text-base text-white lg:text-lg"></i>
        <img
          className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
          src={`${
            captureUser
              ? captureUser.avatar
              : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          }`}
          alt=""
        />
      </button>
      <section
        className={`displayMenu fixed bottom-0 left-[8rem] ${
          toggleDisplay ? "block" : "hidden"
        }  w-screen h-screen z-50 bg-defaultColor lg:left-[60%]`}
      >
        <button className="relative" onClick={funDisplayValue}>
          <i className="fa-solid fa-xmark fs5-icon fixed right-[10%] text-3xl text-white lg:right-[5%]"></i>
        </button>
        <ul className="listLinks flex flex-col items-start justify-center py-[10%] text-colorBtn lg:py-9">
          {routes.map(renderList)}
        </ul>
        <button
          className="mx-3 border p-2 border-solid rounded-full border-colorOptional hover:border-2"
          onClick={handleCloseSession}
        >
          Login out
        </button>
      </section>
    </section>
  );
}
