import { useReflection } from "../../context/ReflectionContext";

export default function SituationCard() {
  const { situation } = useReflection();

  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <h2 className="text-xl font-semibold text-yellow-400 mb-4">
        Your Situation
      </h2>

      <p className="text-slate-300 leading-8">
        {situation || "No situation provided."}
      </p>

    </div>
  );
}