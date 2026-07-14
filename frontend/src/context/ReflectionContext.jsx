import { createContext, useContext, useState } from "react";

const ReflectionContext = createContext();

export function ReflectionProvider({ children }) {
  const [situation, setSituation] = useState("");
const [analysis, setAnalysis] = useState(null);
  // NEW
  const [selectedReflection, setSelectedReflection] = useState(null);

  return (
    <ReflectionContext.Provider
      value={{
        situation,
        setSituation,

        analysis,
                setAnalysis,

        selectedReflection,
        setSelectedReflection,
      }}
    >
      {children}
    </ReflectionContext.Provider>
  );
}

export function useReflection() {
  return useContext(ReflectionContext);
}