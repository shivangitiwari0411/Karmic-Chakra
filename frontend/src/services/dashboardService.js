import api from "./api";

export const getDashboard = () =>
    api.get("/reflection/dashboard");

export const getTrend = () =>
    api.get("/reflection/trend");

export const getEmotionDistribution = () =>
    api.get("/reflection/emotions");

export const getWeeklySummary = () =>
    api.get("/reflection/weekly-summary");



export const getStreak = () =>
    api.get("/reflection/streak");

    export const getHistory = () => {

        return api.get("/reflection/history");

    };