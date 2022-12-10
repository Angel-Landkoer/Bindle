export function DataVideo({ videos }) {
  return (
    <section className="flex flex-row justify-evenly flex-wrap w-full lg:justify-center lg:items-center">
      {videos.map((item, i) => (
        <video
          key={`video${i}`}
          className="block w-60 h-60 m-2 lg:w-96 lg:h-80 2xl:w-[28.8rem] 2xl:h-[28.8rem]"
          controls
          autoPlay
          poster="https://www.incimages.com/uploaded_files/image/1920x1080/code-pano_22148.jpg"
          src={`${item}`}
        ></video>
      ))}
    </section>
  );
}
