import AnalysisHeader from "../components/analysis/AnalysisHeader";
import SituationCard from "../components/analysis/SituationCard";
import EmotionCard from "../components/analysis/EmotionCard";
import GitaVerse from "../components/analysis/GitaVerse";
import KarmaScore from "../components/analysis/KarmaScore";
import Recommendation from "../components/analysis/Recommendation";
import ActionCards from "../components/analysis/ActionCards";
import { useReflection } from "../context/ReflectionContext";

export default function Analysis() {
  const { situation } = useReflection();
  console.log("Analysis Situation:", situation);
  return (
    <div className="min-h-screen bg-[#060b1f]">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <AnalysisHeader />

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">

            <SituationCard situation={situation} />

            <EmotionCard />

            <GitaVerse />

            <Recommendation />

          </div>

          {/* Right Side */}
          <div className="space-y-8">

            <KarmaScore />

            <ActionCards />

          </div>

        </div>

      </div>

    </div>
  );
}