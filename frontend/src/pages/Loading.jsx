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
              console.log("Calling analyze API...");

              const response = await analyzeSituation(situation);

              console.log("Full Axios Response:", response);
              console.log("Response Data:", response.data);

              setAnalysis(response.data);

              console.log("Analysis saved");

              navigate("/analysis");

          } catch (error) {

              console.log("ERROR:", error);

              if (error.response) {
                  console.log("Status:", error.response.status);
                  console.log("Data:", error.response.data);
              }

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