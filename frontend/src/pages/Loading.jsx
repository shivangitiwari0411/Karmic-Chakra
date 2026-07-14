import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../components/analysis/LoadingAnimation";
import { useReflection } from "../context/ReflectionContext";
import { analyzeSituation } from "../services/reflectionService";

export default function Loading() {

  const navigate = useNavigate();

  const {
    situation,
    setAnalysis
  } = useReflection();

  useEffect(() => {

    async function analyze() {

      try {

        console.log("Sending to backend...");
        console.log(situation);

        const response = await analyzeSituation(situation);

        console.log("Backend Response:");
        console.log(response.data);

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