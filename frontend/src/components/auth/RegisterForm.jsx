import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <form className="space-y-5">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
      />

      <button
        className="w-full rounded-xl bg-yellow-400 py-3 font-bold text-black hover:bg-yellow-300"
      >
        Create Account
      </button>

      <p className="text-center text-slate-400">

        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-yellow-400"
        >
          Login
        </Link>

      </p>

    </form>
  );
}

export default RegisterForm;