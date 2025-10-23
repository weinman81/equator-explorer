import { motion } from "framer-motion";

export default function DayNightDiagram() {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <svg width="100%" height="400" viewBox="0 0 700 400" className="max-w-3xl">
        <defs>
          <linearGradient id="dayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.15 230)" />
            <stop offset="100%" stopColor="oklch(0.85 0.18 210)" />
          </linearGradient>
          <linearGradient id="nightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.25 0.08 260)" />
            <stop offset="100%" stopColor="oklch(0.15 0.05 250)" />
          </linearGradient>
        </defs>

        <motion.circle
          cx="350"
          cy="200"
          r="120"
          fill="url(#earthGradient4)"
          stroke="oklch(0.55 0.22 210)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.path
          d="M 350 80 L 350 320"
          stroke="oklch(0.25 0.05 230)"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.rect
          x="230"
          y="80"
          width="240"
          height="240"
          fill="url(#dayGradient)"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        <motion.path
          d="M 230 80 L 230 320"
          stroke="oklch(0.70 0.20 35)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.circle
          cx="550"
          cy="150"
          r="40"
          fill="oklch(0.90 0.15 75)"
          stroke="oklch(0.70 0.20 35)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.line
            key={i}
            x1="550"
            y1="150"
            x2={550 + Math.cos((i * Math.PI) / 4) * 60}
            y2={150 + Math.sin((i * Math.PI) / 4) * 60}
            stroke="oklch(0.70 0.20 35)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.05 }}
          />
        ))}

        <motion.circle
          cx="150"
          cy="250"
          r="30"
          fill="oklch(0.85 0.05 230)"
          stroke="oklch(0.65 0.08 250)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.text
          x="150"
          y="255"
          fill="oklch(0.25 0.05 230)"
          fontSize="20"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          🌙
        </motion.text>

        <motion.text
          x="200"
          y="50"
          fill="oklch(0.70 0.20 35)"
          fontSize="18"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Daytime
        </motion.text>

        <motion.text
          x="130"
          y="365"
          fill="oklch(0.45 0.03 230)"
          fontSize="18"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Nighttime
        </motion.text>

        <motion.text
          x="350"
          y="355"
          fill="oklch(0.75 0.18 145)"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          Equator Line
        </motion.text>

        <defs>
          <linearGradient id="earthGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.15 0.05 250)" />
            <stop offset="50%" stopColor="oklch(0.55 0.22 210)" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 230)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-2 gap-6 mt-8 max-w-xl">
        <motion.div
          className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-2xl border-2 border-yellow-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        >
          <div className="text-4xl mb-2 text-center">☀️</div>
          <div className="text-center">
            <div className="font-bold text-lg text-foreground">Daytime</div>
            <div className="text-3xl font-bold text-[oklch(0.70_0.20_35)] my-2">12 hours</div>
            <div className="text-sm text-foreground/70">6:00 AM - 6:00 PM</div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-2xl border-2 border-indigo-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        >
          <div className="text-4xl mb-2 text-center">🌙</div>
          <div className="text-center">
            <div className="font-bold text-lg text-foreground">Nighttime</div>
            <div className="text-3xl font-bold text-indigo-700 my-2">12 hours</div>
            <div className="text-sm text-foreground/70">6:00 PM - 6:00 AM</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-6 text-center bg-secondary/10 p-4 rounded-xl max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="text-foreground/80 font-semibold">
          ⚖️ Perfectly balanced, every single day of the year!
        </p>
      </motion.div>
    </div>
  );
}
