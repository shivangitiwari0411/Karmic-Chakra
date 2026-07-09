function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#030817] flex items-center justify-center px-4">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#06142f] to-black opacity-80"></div>

      <div className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/90 backdrop-blur-xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-yellow-400">
          Karmic Chakra
        </h1>

        <h2 className="mt-8 text-2xl font-semibold text-center text-white">
          {title}
        </h2>

        <p className="text-center text-slate-400 mt-2">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AuthLayout;