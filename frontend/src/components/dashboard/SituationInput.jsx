import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useReflection } from "../../context/ReflectionContext";
import { analyzeReflection } from "../../services/reflectionService";
export default function SituationInput() {
  const navigate = useNavigate();

  const {
    situation,
    setSituation,
    setAnalysis,
  } = useReflection();
  console.log(situation);

  async function handleAnalyze() {

    if (!situation.trim()) {

      alert("Please describe your situation first.");

      return;

    }
console.log("Analyze button clicked");
navigate("/loading");

  }

  return (
    <div className="bg-[#121a30] rounded-3xl border border-slate-700 p-8">

      <textarea
        rows={8}
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        placeholder="Describe your situation in detail..."
        className="
          w-full
          bg-transparent
          resize-none
          outline-none
          text-white
          text-lg
          placeholder:text-slate-500
        "
      />

      <div className="flex justify-end mt-6">

        <button
          onClick={handleAnalyze}
          className="
            flex
            items-center
            gap-2
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            px-8
            py-3
            rounded-xl
            font-semibold
            transition
          "
        >
          <Sparkles size={18} />
          Analyze My Karma
        </button>

      </div>

    </div>
  );
}