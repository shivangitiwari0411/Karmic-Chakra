function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-yellow-400">
          Karmic Chakra
        </h1>

        <div className="flex gap-6 items-center">

          <button className="text-white hover:text-yellow-300">
            Login
          </button>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Register
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;