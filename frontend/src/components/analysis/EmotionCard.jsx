export default function EmotionCard() {
  const emotions = [
    "Duty",
    "Compassion",
    "Anger",
    "Attachment",
  ];

  return (
    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <h2 className="text-xl font-semibold text-yellow-400 mb-5">
        Detected Values
      </h2>

      <div className="flex flex-wrap gap-3">

        {emotions.map((emotion) => (
          <span
            key={emotion}
            className="px-4 py-2 rounded-full bg-slate-800 text-white"
          >
            {emotion}
          </span>
        ))}

      </div>

    </div>
  );
}