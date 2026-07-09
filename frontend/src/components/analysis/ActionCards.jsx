export default function ActionCards() {
  return (

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-green-900/20 border border-green-600 rounded-2xl p-6">

        <h2 className="text-green-400 text-xl font-bold mb-4">
          Positive Outcomes
        </h2>

        <ul className="space-y-3 text-slate-300">

          <li>✔ Better relationships</li>

          <li>✔ Peace of mind</li>

          <li>✔ Improved communication</li>

        </ul>

      </div>

      <div className="bg-red-900/20 border border-red-600 rounded-2xl p-6">

        <h2 className="text-red-400 text-xl font-bold mb-4">
          Risks if Ignored
        </h2>

        <ul className="space-y-3 text-slate-300">

          <li>✖ Emotional stress</li>

          <li>✖ Misunderstandings</li>

          <li>✖ Damaged relationships</li>

        </ul>

      </div>

    </div>

  );
}