export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Hello";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon 🌿";
  } else {
    greeting = "Good Evening 🌙";
  }

  return (
    <div className="mb-10">
      <h1 className="text-5xl font-bold text-white">
        {greeting}
      </h1>

      <p className="text-slate-400 text-lg mt-3">
        Tell us what's on your mind today.
      </p>
    </div>
  );
}