import { motion } from "framer-motion";

export default function DistanceDiagram() {
  return (
    <div className="w-full flex flex-col items-center py-8 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl">
      <svg width="100%" height="350" viewBox="0 0 700 350" className="max-w-3xl">
        <motion.ellipse
          cx="350"
          cy="175"
          rx="280"
          ry="150"
          fill="none"
          stroke="oklch(0.65 0.24 330)"
          strokeWidth="6"
          strokeDasharray="15 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.circle
          cx="350"
          cy="175"
          r="80"
          fill="url(#earthGradient3)"
          stroke="oklch(0.55 0.22 210)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        />

        <motion.line
          x1="270"
          y1="175"
          x2="430"
          y2="175"
          stroke="oklch(0.70 0.20 35)"
          strokeWidth="4"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.text
          x="350"
          y="100"
          fill="oklch(0.65 0.24 330)"
          fontSize="24"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          24,901 miles
        </motion.text>

        <motion.text
          x="350"
          y="125"
          fill="oklch(0.45 0.03 230)"
          fontSize="16"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          (40,075 kilometers)
        </motion.text>

        <motion.path
          d="M 350 260 Q 350 300, 350 300"
          stroke="oklch(0.65 0.24 330)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
        <motion.path
          d="M 345 295 L 350 300 L 355 295"
          stroke="oklch(0.65 0.24 330)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 2.3 }}
        />

        <motion.text
          x="350"
          y="330"
          fill="oklch(0.65 0.24 330)"
          fontSize="16"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          That's around the entire Earth!
        </motion.text>

        <defs>
          <linearGradient id="earthGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 210)" />
            <stop offset="50%" stopColor="oklch(0.75 0.18 145)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 210)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full max-w-3xl px-4">
        {[
          { icon: "🚗", label: "Cars", text: "9 trips across USA" },
          { icon: "✈️", label: "Planes", text: "100 NYC to LA flights" },
          { icon: "🚶", label: "Walking", text: "Almost a year!" },
          { icon: "🏃", label: "Running", text: "6 months non-stop" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/60 backdrop-blur-sm p-4 rounded-xl text-center border-2 border-accent/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + i * 0.1 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-bold text-sm text-foreground mb-1">{item.label}</div>
            <div className="text-xs text-foreground/70">{item.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
