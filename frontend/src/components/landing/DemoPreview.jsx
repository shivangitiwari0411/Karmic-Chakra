import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Scale,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function DemoPreview() {
  return (
    <section className="py-28 bg-slate-900">

      <Container>

        <SectionTitle
          title="See Karmic Chakra in Action"
          subtitle="An example of how AI combines ethical reasoning with Bhagavad Gita wisdom."
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-slate-950 border border-slate-800 rounded-3xl p-10 shadow-2xl"
        >

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT */}

            <div>

              <h3 className="text-yellow-400 text-xl font-semibold mb-4">
                Situation
              </h3>

              <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">

                <p className="text-slate-300 leading-8">

                  "I had a heated argument with my younger brother after he accidentally damaged my laptop. I'm considering refusing to help him again."

                </p>

              </div>

              <div className="mt-8">

                <h3 className="text-yellow-400 text-xl font-semibold mb-5">
                  Detected Values
                </h3>

                <div className="flex flex-wrap gap-3">

                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full">
                    Anger
                  </span>

                  <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full">
                    Attachment
                  </span>

                  <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
                    Duty
                  </span>

                  <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">
                    Compassion
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

                <div className="flex items-center gap-3 mb-3">

                  <BookOpen className="text-yellow-400" />

                  <h3 className="font-semibold text-white">
                    Bhagavad Gita Inspiration
                  </h3>

                </div>

                <p className="text-slate-300 italic leading-7">

                  "You have the right to perform your duty, but not to the fruits of your actions."

                </p>

                <p className="text-yellow-400 mt-4">

                  Chapter 2 • Verse 47

                </p>

              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

                <div className="flex items-center justify-between">

                  <h3 className="text-white font-semibold">
                    Karmic Reflection Score
                  </h3>

                  <TrendingUp className="text-green-400"/>
                </div>

                <div className="mt-6">

                  <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">

                    <div className="w-[82%] h-full bg-gradient-to-r from-yellow-400 to-green-400"></div>

                  </div>

                  <div className="flex justify-between mt-3">

                    <span className="text-slate-400">
                      Reflection
                    </span>

                    <span className="text-green-400 font-bold">
                      82 / 100
                    </span>

                  </div>

                </div>

              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

                <div className="flex items-center gap-3 mb-4">

                  <Sparkles className="text-yellow-400"/>

                  <h3 className="text-white font-semibold">
                    AI Recommendation
                  </h3>

                </div>

                <p className="text-slate-300 leading-8">

                  Pause before reacting.
                  Express your disappointment honestly,
                  forgive the mistake,
                  and choose an action that strengthens the relationship instead of creating long-term resentment.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default DemoPreview;