import AnalysisHeader from "../components/analysis/AnalysisHeader";
import SituationCard from "../components/analysis/SituationCard";
import EmotionCard from "../components/analysis/EmotionCard";
import GitaVerse from "../components/analysis/GitaVerse";
import KarmaScore from "../components/analysis/KarmaScore";
import Recommendation from "../components/analysis/Recommendation";
import ActionCards from "../components/analysis/ActionCards";
import RetrievedVerses from "../components/analysis/RetrievedVerses";


import { useReflection } from "../context/ReflectionContext";

export default function Analysis() {

  const { situation, analysis } = useReflection();

  if (!analysis) {
    return (
      <div className="text-white text-center mt-20">
        No analysis found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060b1f]">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <AnalysisHeader />

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">

            <SituationCard situation={situation} />

            <EmotionCard emotion={analysis.emotion} />

            <GitaVerse verse={analysis.gitaVerse} />

            <RetrievedVerses
                verses={analysis.retrievedVerses}
            />

            <Recommendation
                explanation={analysis.explanation}
                recommendation={analysis.recommendation}
            />

          </div>

          <div className="space-y-8">

            <KarmaScore score={analysis.karmaScore} />

            <ActionCards />

          </div>

        </div>

      </div>

    </div>
  );
}