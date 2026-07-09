export default function ReflectionCard({
  title,
  score,
  date,
}) {
  return (
    <div className="bg-[#121a30] border border-slate-700 rounded-xl p-5 hover:border-yellow-400 transition">

      <h3 className="text-white text-xl font-semibold">
        {title}
      </h3>

      <p className="text-slate-400 mt-2">
        {date}
      </p>

      <div className="flex justify-between mt-5">

        <span className="text-yellow-400">
          Reflection Score
        </span>

        <span className="text-green-400 font-bold">
          {score}
        </span>

      </div>

    </div>
  );
}