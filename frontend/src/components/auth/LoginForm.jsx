import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Backend integration later
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}

      <div className="relative">

        <Mail
          size={18}
          className="absolute left-4 top-4 text-slate-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none focus:border-yellow-400"
          required
        />

      </div>

      {/* Password */}

      <div className="relative">

        <Lock
          size={18}
          className="absolute left-4 top-4 text-slate-400"
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-12 text-white outline-none focus:border-yellow-400"
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-3 text-slate-400"
        >
          {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
        </button>

      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
      >
        Login
      </button>

      <p className="text-center text-slate-400">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="font-semibold text-yellow-400"
        >
          Register
        </Link>

      </p>

    </form>
  );
}

export default LoginForm;