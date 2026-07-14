import { useEffect, useState } from "react";

import { getHistory } from "../../services/dashboardService";

import HistoryCard from "./HistoryCard";

export default function HistoryList() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    async function loadHistory() {

      try {

        const response = await getHistory();

        setHistory(response.data);

      }

      catch (error) {

        console.error(error);

      }

    }

    loadHistory();

  }, []);

  return (

    <div className="space-y-6">

      {

        history.map((item,index)=>(

          <HistoryCard

            key={index}

            reflection={item}

          />

        ))

      }

    </div>

  );

}