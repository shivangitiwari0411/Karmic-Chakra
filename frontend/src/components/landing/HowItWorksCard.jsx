import { motion } from "framer-motion";

function HowItWorksCard({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="text-yellow-400 mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}

export default HowItWorksCard;