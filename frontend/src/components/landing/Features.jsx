import {
  Brain,
  BookOpen,
  Shield,
  History,
  BarChart3,
  Zap,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "./FeatureCard";

function Features() {

  const features = [

    {
      icon: <Brain size={42} />,
      title: "AI Reflection",
      description:
        "Receive thoughtful guidance based on your situation using AI-powered ethical reasoning.",
    },

    {
      icon: <BookOpen size={42} />,
      title: "Bhagavad Gita Wisdom",
      description:
        "Every recommendation is supported by relevant teachings from the Bhagavad Gita.",
    },

    {
      icon: <BarChart3 size={42} />,
      title: "Reflection Insights",
      description:
        "Understand your decisions through values, emotions, and long-term consequences.",
    },

    {
      icon: <History size={42} />,
      title: "Reflection History",
      description:
        "Save previous reflections and revisit your personal growth journey.",
    },

    {
      icon: <Shield size={42} />,
      title: "Private & Secure",
      description:
        "Your reflections remain private and are securely stored in your account.",
    },

    {
      icon: <Zap size={42} />,
      title: "Instant Analysis",
      description:
        "Get meaningful guidance within seconds without sacrificing clarity or explainability.",
    },

  ];

  return (
    <section className="py-28 bg-slate-950">

      <Container>

        <SectionTitle
          title="Why Choose Karmic Chakra?"
          subtitle="Designed to help you reflect with clarity, wisdom, and responsibility."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}

export default Features;