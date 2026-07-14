export default function EmotionCard({ emotion }) {

  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <h2 className="text-xl font-semibold text-yellow-400 mb-5">
        Detected Emotion
      </h2>

      <div className="flex flex-wrap gap-3">

        <span className="px-4 py-2 rounded-full bg-slate-800 text-white">
          {emotion}
        </span>

      </div>

    </div>
  );
}