function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-8 max-w-7xl mx-auto">
      <div className="text-2xl font-black tracking-tight">
        SPORTSQUAD
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className="font-medium hover:text-purple-600 transition">
          How It Works
        </a>

        <a href="#" className="font-medium hover:text-purple-600 transition">
          Host Game
        </a>

        <button className="font-medium hover:text-purple-600 transition">
          Login
        </button>

        <button className="bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;