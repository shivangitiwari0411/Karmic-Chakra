import { useEffect, useState } from "react";
import { getDashboard, getStreak } from "../../services/dashboardService";

export default function StatsCards() {

  const [stats, setStats] = useState({
    totalReflections: 0,
    averageKarmaScore: 0,
    currentStreak: 0,
    longestStreak: 0,
  });

  useEffect(() => {

    async function loadData() {

      try {

        const dashboard = await getDashboard();
        const streak = await getStreak();

        setStats({
          totalReflections: dashboard.data.totalReflections,
          averageKarmaScore: dashboard.data.averageKarmaScore,
          currentStreak: streak.data.currentStreak,
          longestStreak: streak.data.longestStreak,
        });

      } catch (error) {

        console.error(error);

      }

    }

    loadData();

  }, []);

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">

      <Card
        title="Total Reflections"
        value={stats.totalReflections}
      />

      <Card
        title="Average Karma"
        value={Number(stats.averageKarmaScore).toFixed(1)}
      />

      <Card
        title="Current Streak 🔥"
        value={stats.currentStreak}
      />

      <Card
        title="Longest Streak 🏆"
        value={stats.longestStreak}
      />

    </div>

  );

}

function Card({ title, value }) {

  return (

    <div
      className="
      bg-gradient-to-br
      from-[#121a30]
      to-[#18213d]
      rounded-2xl
      border
      border-slate-700
      p-6
      hover:scale-105
      transition
      duration-300
      shadow-lg
      "
    >

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h1 className="text-5xl font-bold text-yellow-400 mt-5">
        {value}
      </h1>

    </div>

  );

}