import api from "./api";

export const analyzeReflection = (situation) => {

    return api.post("/reflection/analyze", {
        situation,
    });

};

export const getHistory = () => {

    return api.get("/reflection/history");

};

export const getDashboard = () => {

    return api.get("/reflection/dashboard");

};

export const getTrend = () => {

    return api.get("/reflection/trend");

};

export const getEmotions = () => {

    return api.get("/reflection/emotions");

};

export const getStreak = () => {

    return api.get("/reflection/streak");

};

export const getWeeklySummary = () => {

    return api.get("/reflection/weekly-summary");

};
export function analyzeSituation(situation) {
  return api.post("/reflection/analyze", {
    situation,
  });
}