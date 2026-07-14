import { UserCircle, Home, History, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
export default function DashboardNavbar() {
    const navigate = useNavigate();
    function handleLogout() {

        localStorage.removeItem("token");

        navigate("/login");

    }
  return (
    <nav className="bg-[#0b1022] border-b border-slate-700">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <h1 className="text-3xl font-bold text-yellow-400">
          Karmic Chakra
        </h1>

        <div className="flex items-center gap-8">

          <button className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition">
            <Home size={18} />
            Home
          </button>

          <button className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition">
            <History size={18} />
            <Link to="/history">
              History
            </Link>
          </button>

          <button className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition">
            <UserCircle size={18} />
            Profile
          </button>

          <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}