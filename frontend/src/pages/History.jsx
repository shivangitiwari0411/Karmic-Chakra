import HistoryList from "../components/history/HistoryList";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

export default function History() {

  return (

    <div className="min-h-screen bg-[#060b1f]">

      <DashboardNavbar />

      <div className="max-w-6xl mx-auto px-8 py-10">

        <h1 className="text-5xl font-bold text-white mb-2">
          Reflection History
        </h1>

        <p className="text-slate-400 mb-10">
          View all your previous AI reflections.
        </p>

        <HistoryList />

      </div>

    </div>

  );

}