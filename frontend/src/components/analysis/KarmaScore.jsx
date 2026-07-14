import { TrendingUp } from "lucide-react";

export default function KarmaScore({ score }) {

  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6 text-center">

      <TrendingUp
        size={35}
        className="mx-auto text-yellow-400 mb-4"
      />

      <h2 className="text-xl font-semibold text-yellow-400 mb-6">
        Karma Score
      </h2>

      <div className="w-40 h-40 rounded-full border-[10px] border-yellow-400 mx-auto flex items-center justify-center">

        <div>

          <h1 className="text-5xl font-bold text-white">
            {score}
          </h1>

          <p className="text-slate-400">/100</p>

        </div>

      </div>

    </div>
  );
}