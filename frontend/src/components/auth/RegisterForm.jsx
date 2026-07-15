import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function RegisterForm() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await registerUser(
        form.fullName,
        form.email,
        form.password
      );

      console.log(response.data);

      if (response.data.success) {

        alert("Registration Successful");

        navigate("/login");

      } else {

        alert(response.data.message);

      }

    }

      catch (error) {

        console.error(error);

        console.log(error.response);

        console.log(error.response?.data);

        alert(error.response?.data?.message || "Registration Failed");

      }



  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-yellow-400"
        required
      />

      <button
        type="submit"
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