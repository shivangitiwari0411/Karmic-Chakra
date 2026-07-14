import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../components/analysis/LoadingAnimation";
import { useReflection } from "../context/ReflectionContext";
import { analyzeSituation } from "../services/reflectionService";

export default function Loading() {

  const navigate = useNavigate();
  const hasRun = useRef(false);

  const {
    situation,
    setAnalysis
  } = useReflection();

  useEffect(() => {

      if (hasRun.current) return;
      hasRun.current = true;

      async function analyze() {
          try {
              const response = await analyzeSituation(situation);
              setAnalysis(response.data);
              navigate("/analysis");
          } catch (error) {
              console.error(error);
              alert("Analysis Failed");
              navigate("/dashboard");
          }
      }

      analyze();

  }, []);

  return (
    <div className="min-h-screen bg-[#060b1f] flex items-center justify-center">
      <LoadingAnimation />
    </div>
  );
}