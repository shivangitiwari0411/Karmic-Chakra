import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { useEffect, useState } from "react";

import { getTrend } from "../../services/dashboardService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function KarmaTrendChart() {

  const [trend, setTrend] = useState([]);

  useEffect(() => {

    async function loadTrend() {

      try {

        const response = await getTrend();

        setTrend(response.data);

      } catch (error) {

        console.error(error);

      }

    }

    loadTrend();

  }, []);

  const data = {

    labels: trend.map(item => item.date),

   datasets: [

     {

       label: "Karma Score",

       data: trend.map(item => item.karmaScore),

       borderColor: "#facc15",

       backgroundColor: "rgba(250,204,21,0.25)",

       pointBackgroundColor: "#facc15",

       pointBorderColor: "#fff",

       pointRadius: 6,

       borderWidth: 3,

       tension: 0.45,

       fill: true,

     }

   ]

  };

const options = {

  responsive: true,

  plugins: {

    legend: {

      labels: {

        color: "white",

      },

    },

  },

  scales: {

    x: {

      ticks: {

        color: "#cbd5e1",

      },

      grid: {

        color: "#1e293b",

      },

    },

    y: {

      ticks: {

        color: "#cbd5e1",

      },

      grid: {

        color: "#1e293b",

      },

      beginAtZero: true,

      suggestedMax: 100,

    },

  },

};

  return (

    <div className="bg-[#121a30] rounded-2xl border border-slate-700 p-6">

      <h2 className="text-yellow-400 text-xl font-semibold mb-5">
        Karma Trend
      </h2>

      <Line data={data} options={options}/>

    </div>

  );

}