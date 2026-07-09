import { Brain } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  "Understanding your situation...",
  "Identifying emotions...",
  "Finding relevant Bhagavad Gita teachings...",
  "Calculating Karmic Score...",
  "Preparing your guidance..."
];

export default function LoadingAnimation() {

  const [step, setStep] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setStep((prev) => {

        if (prev === messages.length - 1)
          return prev;

        return prev + 1;

      });

    }, 1500);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="flex flex-col items-center">

      <div className="w-24 h-24 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin flex items-center justify-center">

        <Brain className="text-yellow-400" size={34} />

      </div>

      <h2 className="mt-10 text-3xl font-bold text-white">
        AI Reflection
      </h2>

      <p className="mt-6 text-yellow-400 text-lg">

        {messages[step]}

      </p>

    </div>

  );

}