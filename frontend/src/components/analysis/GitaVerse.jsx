import { BookOpen } from "lucide-react";

export default function GitaVerse() {
  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <div className="flex items-center gap-3 mb-5">

        <BookOpen className="text-yellow-400" />

        <h2 className="text-xl font-semibold text-yellow-400">
          Bhagavad Gita Guidance
        </h2>

      </div>

      <div className="bg-slate-900 rounded-xl p-5">

        <p className="text-yellow-300 font-semibold mb-4">
          Chapter 2 • Verse 47
        </p>

        <p className="italic text-white leading-8">
          "You have a right to perform your prescribed duties,
          but you are not entitled to the fruits of your actions."
        </p>

      </div>

      <p className="mt-5 text-slate-300 leading-8">
        Focus on performing your duty sincerely without becoming
        attached to immediate outcomes. Acting with patience and
        clarity often leads to better long-term results.
      </p>

    </div>
  );
}