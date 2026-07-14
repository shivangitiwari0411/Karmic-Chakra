import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import SituationInput from "../components/dashboard/SituationInput";
import ReflectionHistory from "../components/dashboard/ReflectionHistory";
import StatsCards from "../components/dashboard/StatsCards";
import KarmaTrendChart from "../components/dashboard/KarmaTrendChart";

export default function Dashboard() {

  return (

    <div className="min-h-screen bg-[#060b1f]">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-8 py-10">

        <DashboardHeader />

        <StatsCards />

        <div className="mt-10">
          <SituationInput />
        </div>

        <div className="mt-10">
          <KarmaTrendChart />
        </div>

        <div className="mt-10">
          <ReflectionHistory />
        </div>

      </div>

    </div>

  );

}