import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../components/analysis/LoadingAnimation";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/analysis");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#060b1f] flex items-center justify-center">
      <LoadingAnimation />
    </div>
  );
}