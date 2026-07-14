import { Lightbulb } from "lucide-react";

export default function Recommendation({
  explanation,
  recommendation,
}) {

  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <div className="flex items-center gap-3 mb-5">

        <Lightbulb className="text-yellow-400"/>

        <h2 className="text-xl font-semibold text-yellow-400">
          AI Recommendation
        </h2>

      </div>

      <div className="space-y-6">

        <div>

          <h3 className="text-yellow-300 font-semibold mb-2">
            Explanation
          </h3>

          <p className="text-slate-300 leading-7">
            {explanation}
          </p>

        </div>

        <div>

          <h3 className="text-yellow-300 font-semibold mb-2">
            Recommendation
          </h3>

          <p className="text-slate-300 leading-7">
            {recommendation}
          </p>

        </div>

      </div>

    </div>
  );
}