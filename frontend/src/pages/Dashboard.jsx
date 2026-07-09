import DashboardHeader from "../components/dashboard/DashboardHeader";
import SituationInput from "../components/dashboard/SituationInput";
import ReflectionHistory from "../components/dashboard/ReflectionHistory";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#060b1f]">
<DashboardNavbar />

    <div className="max-w-6xl mx-auto px-8 py-12">

        <DashboardHeader />

        <SituationInput />

        <ReflectionHistory />

    </div>

    </div>
  );
}