import { motion } from "framer-motion";

export default function EarthDiagram() {
  return (
    <div className="w-full flex justify-center py-8">
      <svg width="100%" height="400" viewBox="0 0 600 400" className="max-w-2xl">
        <motion.circle
          cx="300"
          cy="200"
          r="140"
          fill="url(#earthGradient)"
          stroke="oklch(0.55 0.22 210)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        />
        
        <motion.line
          x1="160"
          y1="200"
          x2="440"
          y2="200"
          stroke="oklch(0.70 0.20 35)"
          strokeWidth="4"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        <motion.text
          x="450"
          y="205"
          fill="oklch(0.70 0.20 35)"
          fontSize="18"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Equator
        </motion.text>

        <motion.text
          x="300"
          y="50"
          fill="oklch(0.25 0.05 230)"
          fontSize="16"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Northern Hemisphere
        </motion.text>

        <motion.text
          x="300"
          y="370"
          fill="oklch(0.25 0.05 230)"
          fontSize="16"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Southern Hemisphere
        </motion.text>

        <motion.circle
          cx="300"
          cy="80"
          r="8"
          fill="oklch(0.95 0 0)"
          stroke="oklch(0.55 0.22 210)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.text
          x="320"
          y="85"
          fill="oklch(0.25 0.05 230)"
          fontSize="14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          North Pole
        </motion.text>

        <motion.circle
          cx="300"
          cy="320"
          r="8"
          fill="oklch(0.95 0 0)"
          stroke="oklch(0.55 0.22 210)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.text
          x="320"
          y="325"
          fill="oklch(0.25 0.05 230)"
          fontSize="14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          South Pole
        </motion.text>

        <defs>
          <radialGradient id="earthGradient">
            <stop offset="0%" stopColor="oklch(0.75 0.18 145)" />
            <stop offset="50%" stopColor="oklch(0.55 0.22 210)" />
            <stop offset="100%" stopColor="oklch(0.75 0.18 145)" />
          </radialGradient>
        </defs>

        <motion.path
          d="M 200 150 Q 220 130, 250 140 T 320 135 T 380 145"
          fill="none"
          stroke="oklch(0.75 0.18 145)"
          strokeWidth="25"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        <motion.path
          d="M 210 260 Q 240 245, 280 255 T 350 250 T 390 260"
          fill="none"
          stroke="oklch(0.75 0.18 145)"
          strokeWidth="30"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </svg>
    </div>
  );
}
