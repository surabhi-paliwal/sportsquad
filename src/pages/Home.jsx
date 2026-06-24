import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-orange-100">
      <Navbar />
      <Hero />

    </div>
  );
}

export default Home;