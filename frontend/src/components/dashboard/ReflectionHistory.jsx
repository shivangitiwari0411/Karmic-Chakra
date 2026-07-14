import { useEffect, useState } from "react";

import { getHistory } from "../../services/dashboardService";

import HistoryCard from "../history/HistoryCard";
import { Link } from "react-router-dom";

export default function ReflectionHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    async function loadHistory() {

      try {

        const response = await getHistory();

        // Show only the latest 3 reflections
        setHistory(response.data.slice(0, 3));

      } catch (error) {

        console.error(error);

      }

    }

    loadHistory();

  }, []);

  return (

    <div className="mt-12">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl text-white font-bold">
          Recent Reflections
        </h2>

        <Link
          to="/history"
          className="text-yellow-400 hover:text-yellow-300 font-semibold"
        >
          View All →
        </Link>

      </div>

      <div className="space-y-6">

        {history.map((item, index) => (

          <HistoryCard
            key={index}
            reflection={item}
          />

        ))}

      </div>

    </div>

  );

}