export function HotelCard(props) {
  return (
    <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:mx-5 mobile:w-48 mobile:h-64">
      <figure className="mobile:w-48 mobile:h-48">
        <img
          className="mobile:w-full h-full mobile:rounded-2xl"
          src={props.item.img ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQQM5ci9CV05nRR8rP9ZypzdzUThIe_IH2g&usqp=CAU"}
          alt={`Image to the hotel ${props.item.title}`} />
      </figure>
      <span className="mobile:font-bold mobile:text-base mobile:text-charcoal">
        {props.item.title}
      </span>
      <span className="mobile:font-medium mobile:text-xs mobile:text-charcoal">
        {props.item.text}
      </span>
    </section>
  );
}
