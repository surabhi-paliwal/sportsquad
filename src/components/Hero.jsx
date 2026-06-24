import SearchBox from "./SearchBox";

function Hero() {
  return (
   <section className="flex flex-col items-center justify-center text-center px-6 mt-24">
      <h1 className="text-5xl md:text-7xl font-black leading-none max-w-4xl">
        Find players.
        <br />
        Join games.
        <br />
        Play today.
      </h1>

      <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
        Join nearby sports games and meet people without
        needing your own team.
      </p>
      <div className="mt-10">
  <SearchBox />
</div>
    </section>
  );
}

export default Hero;