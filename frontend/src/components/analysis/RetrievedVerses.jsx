
export default function RetrievedVerses({ verses }) {

  if (!verses || verses.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#121a30] border border-slate-700 rounded-3xl p-6">

      <h2 className="text-xl font-bold text-yellow-400 mb-5">
        Relevant Bhagavad Gita Verses
      </h2>

      <div className="space-y-4">

        {verses.map((verse, index) => (

          <div
            key={index}
            className="bg-[#1a2440] border border-slate-600 rounded-2xl p-4"
          >
            <p className="text-slate-200 leading-7">
              📖 {verse}
            </p>
          </div>

        ))}

      </div>

    </div>
  );
}