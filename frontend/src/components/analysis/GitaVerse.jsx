import { BookOpen } from "lucide-react";

export default function GitaVerse({ verse }) {

  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <div className="flex items-center gap-3 mb-5">

        <BookOpen className="text-yellow-400" />

        <h2 className="text-xl font-semibold text-yellow-400">
          Bhagavad Gita Guidance
        </h2>

      </div>

      <div className="bg-slate-900 rounded-xl p-5">

        <p className="italic text-white leading-8">
          {verse}
        </p>

      </div>

    </div>
  );
}