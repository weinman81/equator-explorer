import { motion } from "framer-motion";

export default function SunlightDiagram() {
  return (
    <div className="w-full flex justify-center py-8 bg-gradient-to-b from-blue-100/30 to-transparent rounded-2xl">
      <svg width="100%" height="450" viewBox="0 0 700 450" className="max-w-3xl">
        <motion.circle
          cx="350"
          cy="100"
          r="50"
          fill="url(#sunGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.line
            key={i}
            x1="350"
            y1="100"
            x2={350 + Math.cos((i * Math.PI) / 4) * 80}
            y2={100 + Math.sin((i * Math.PI) / 4) * 80}
            stroke="oklch(0.70 0.20 35)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
          />
        ))}

        <motion.circle
          cx="350"
          cy="320"
          r="100"
          fill="url(#earthGradient2)"
          stroke="oklch(0.55 0.22 210)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.line
          x1="250"
          y1="320"
          x2="450"
          y2="320"
          stroke="oklch(0.70 0.20 35)"
          strokeWidth="3"
          strokeDasharray="6 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.path
          d="M 350 150 L 350 220"
          stroke="oklch(0.85 0.15 55)"
          strokeWidth="6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.path
          d="M 345 215 L 350 220 L 355 215"
          stroke="oklch(0.85 0.15 55)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        <motion.text
          x="365"
          y="185"
          fill="oklch(0.70 0.20 35)"
          fontSize="14"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Direct
        </motion.text>
        <motion.text
          x="365"
          y="202"
          fill="oklch(0.70 0.20 35)"
          fontSize="14"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Sunlight
        </motion.text>

        <motion.path
          d="M 250 150 L 210 220"
          stroke="oklch(0.85 0.15 55)"
          strokeWidth="5"
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
        <motion.path
          d="M 208 215 L 210 220 L 215 217"
          stroke="oklch(0.85 0.15 55)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 1.3 }}
        />
        <motion.text
          x="150"
          y="185"
          fill="oklch(0.70 0.20 35)"
          fontSize="13"
          fontWeight="bold"
          opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4 }}
        >
          Slanted
        </motion.text>
        <motion.text
          x="150"
          y="202"
          fill="oklch(0.70 0.20 35)"
          fontSize="13"
          fontWeight="bold"
          opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4 }}
        >
          Sunlight
        </motion.text>

        <motion.path
          d="M 450 150 L 490 220"
          stroke="oklch(0.85 0.15 55)"
          strokeWidth="5"
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        />
        <motion.path
          d="M 485 217 L 490 220 L 492 215"
          stroke="oklch(0.85 0.15 55)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        />
        <motion.text
          x="505"
          y="185"
          fill="oklch(0.70 0.20 35)"
          fontSize="13"
          fontWeight="bold"
          opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5 }}
        >
          Slanted
        </motion.text>
        <motion.text
          x="505"
          y="202"
          fill="oklch(0.70 0.20 35)"
          fontSize="13"
          fontWeight="bold"
          opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5 }}
        >
          Sunlight
        </motion.text>

        <motion.text
          x="460"
          y="325"
          fill="oklch(0.70 0.20 35)"
          fontSize="15"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Equator
        </motion.text>

        <motion.text
          x="90"
          y="250"
          fill="oklch(0.45 0.03 230)"
          fontSize="13"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          Colder
        </motion.text>

        <motion.text
          x="580"
          y="250"
          fill="oklch(0.45 0.03 230)"
          fontSize="13"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          Colder
        </motion.text>

        <motion.text
          x="315"
          y="380"
          fill="oklch(0.70 0.20 35)"
          fontSize="15"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          ☀️ Warmer!
        </motion.text>

        <defs>
          <radialGradient id="sunGradient">
            <stop offset="0%" stopColor="oklch(0.95 0.15 85)" />
            <stop offset="50%" stopColor="oklch(0.85 0.20 65)" />
            <stop offset="100%" stopColor="oklch(0.70 0.20 35)" />
          </radialGradient>
          <linearGradient id="earthGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 210)" />
            <stop offset="50%" stopColor="oklch(0.75 0.18 145)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 210)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
