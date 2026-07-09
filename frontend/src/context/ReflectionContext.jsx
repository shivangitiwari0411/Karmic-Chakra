import { createContext, useContext, useState } from "react";

const ReflectionContext = createContext();

export function ReflectionProvider({ children }) {
  const [situation, setSituation] = useState("");

  return (
    <ReflectionContext.Provider
      value={{
        situation,
        setSituation,
      }}
    >
      {children}
    </ReflectionContext.Provider>
  );
}

export function useReflection() {
  return useContext(ReflectionContext);
}