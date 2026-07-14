import { useNavigate } from "react-router-dom";
import { useReflection } from "../../context/ReflectionContext";

export default function ReflectionCard({ reflection }) {

  const navigate = useNavigate();
  const {
      setSelectedReflection,
      setAnalysis
  } = useReflection();

  function openReflection() {

    console.log("CARD CLICKED");
    console.log(reflection);

    setSelectedReflection(reflection);
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
      onClick={openReflection}
      className="
        bg-[#121a30]
        border
        border-slate-700
        rounded-xl
        p-5
        cursor-pointer
        hover:border-yellow-400
        transition
      "
    >

      <h3 className="text-xl font-semibold text-white">
        {reflection.title}
      </h3>

      <p className="text-slate-400 mt-2">
        {reflection.date}
      </p>

      <div className="flex justify-between mt-5">

        <span className="text-yellow-400">
          Reflection Score
        </span>

        <span className="text-green-400 font-bold">
          {reflection.score}
        </span>

      </div>

    </div>

  );

}