import ReflectionCard from "./ReflectionCard";

export default function ReflectionHistory() {

  const reflections = [

    {
      title: "Argument with Brother",
      score: 82,
      date: "Today",
    },

    {
      title: "Career Decision",
      score: 76,
      date: "Yesterday",
    },

    {
      title: "Helping a Friend",
      score: 91,
      date: "2 Days Ago",
    },

  ];

  return (

    <div className="mt-12">

      <h2 className="text-3xl text-white font-bold mb-6">
        Recent Reflections
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {reflections.map((item, index) => (
          <ReflectionCard
            key={index}
            {...item}
          />
        ))}

      </div>

    </div>

  );
}