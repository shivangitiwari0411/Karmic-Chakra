import { Lightbulb } from "lucide-react";

export default function Recommendation() {

  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <div className="flex items-center gap-3 mb-5">

        <Lightbulb className="text-yellow-400"/>

        <h2 className="text-xl font-semibold text-yellow-400">
          AI Recommendation
        </h2>

      </div>

      <ul className="space-y-4 text-slate-300">

        <li>✅ Listen calmly before reacting.</li>

        <li>✅ Speak honestly but respectfully.</li>

        <li>✅ Avoid making decisions while angry.</li>

        <li>✅ Focus on understanding instead of winning.</li>

      </ul>

    </div>
  );
}