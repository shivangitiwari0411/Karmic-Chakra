import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
    >
      <div className="text-yellow-400 mb-5">
        {icon}
      </div>

      <h3 className="text-white text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-slate-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;