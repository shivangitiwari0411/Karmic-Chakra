import { useNavigate } from "react-router-dom";
import { useReflection } from "../../context/ReflectionContext";
export default function HistoryCard({ reflection }) {

  const navigate = useNavigate();

  const {
    setSituation,
    setAnalysis,
    setSelectedReflection,
  } = useReflection();

  function openAnalysis() {

    // Store situation
    setSituation(reflection.situation);

    // Store selected reflection
    setSelectedReflection(reflection);

    // Store analysis data
    setAnalysis({
      emotion: reflection.emotion,
      karmaScore: reflection.karmaScore,
      gitaVerse: reflection.gitaVerse,
      explanation: reflection.explanation,
      recommendation: reflection.recommendation,
    });

    navigate("/analysis");
  }

  return (

    <div
      onClick={openAnalysis}
      className="
        bg-[#121a30]
        rounded-2xl
        border
        border-slate-700
        p-6
        hover:scale-[1.01]
        hover:border-yellow-400
        transition
        cursor-pointer
      "
    >

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">

            {reflection.emotion}

          </h2>

          <p className="text-slate-400 mt-2">

            {reflection.situation}

          </p>

        </div>

        <div className="text-right">

          <h1 className="text-4xl text-yellow-400 font-bold">

            {reflection.karmaScore}

          </h1>

          <p className="text-slate-400">

            Karma

          </p>

        </div>

      </div>

      <hr className="border-slate-700 my-5"/>

      <p className="text-yellow-400">

        {reflection.gitaVerse}

      </p>

      <p className="text-slate-300 mt-4">

        {reflection.recommendation}

      </p>

      <p className="text-slate-500 mt-5 text-sm">

        {reflection.createdAt}

      </p>

    </div>

  );

}