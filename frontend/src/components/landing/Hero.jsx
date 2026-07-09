import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "../common/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-[#08122d] to-slate-950">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 blur-[150px] rounded-full"></div>

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-sm font-medium mb-8">
            <Sparkles size={16} />
            AI-Powered Ethical Decision Support
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">

            Think Clearly.
            <br />

            <span className="text-yellow-400">
              Act Wisely.
            </span>

          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-slate-300">

            Karmic Chakra helps you reflect on difficult situations using
            AI-powered ethical reasoning inspired by the timeless wisdom of
            the Bhagavad Gita.

          </p>

          {/* Input Box */}
          <div className="mt-14 max-w-4xl mx-auto">

            <div className="rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl">

              <textarea
                rows="5"
                placeholder="Describe a situation you're facing..."
                className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none resize-none text-lg"
              ></textarea>

              <div className="flex justify-end mt-5">

                <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition">

                  Reflect Now

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <div className="px-5 py-2 rounded-full bg-slate-800 text-slate-300 text-sm">
              📖 Bhagavad Gita Inspired
            </div>

            <div className="px-5 py-2 rounded-full bg-slate-800 text-slate-300 text-sm">
              🤖 AI Reflection
            </div>

            <div className="px-5 py-2 rounded-full bg-slate-800 text-slate-300 text-sm">
              📊 Reflection Insights
            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default Hero;