import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AnalysisHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-10">

      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <h1 className="text-3xl font-bold text-yellow-400">
        Karmic Chakra
      </h1>

      <div className="w-16"></div>

    </div>
  );
}