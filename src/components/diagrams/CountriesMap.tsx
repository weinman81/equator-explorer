import { motion } from "framer-motion";
import { useState } from "react";

interface Country {
  name: string;
  continent: string;
  color: string;
}

const countries: Country[] = [
  { name: "Ecuador", continent: "South America", color: "oklch(0.65 0.24 330)" },
  { name: "Colombia", continent: "South America", color: "oklch(0.65 0.24 330)" },
  { name: "Brazil", continent: "South America", color: "oklch(0.65 0.24 330)" },
  { name: "São Tomé & Príncipe", continent: "Africa", color: "oklch(0.70 0.20 35)" },
  { name: "Gabon", continent: "Africa", color: "oklch(0.70 0.20 35)" },
  { name: "Republic of Congo", continent: "Africa", color: "oklch(0.70 0.20 35)" },
  { name: "DR Congo", continent: "Africa", color: "oklch(0.70 0.20 35)" },
  { name: "Uganda", continent: "Africa", color: "oklch(0.70 0.20 35)" },
  { name: "Kenya", continent: "Africa", color: "oklch(0.70 0.20 35)" },
  { name: "Somalia", continent: "Africa", color: "oklch(0.70 0.20 35)" },
  { name: "Maldives", continent: "Asia", color: "oklch(0.55 0.22 210)" },
  { name: "Indonesia", continent: "Asia", color: "oklch(0.55 0.22 210)" },
  { name: "Kiribati", continent: "Oceania", color: "oklch(0.75 0.18 145)" },
];

export default function CountriesMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <svg width="100%" height="500" viewBox="0 0 800 500" className="max-w-4xl">
        <motion.circle
          cx="400"
          cy="250"
          r="180"
          fill="url(#globeGradient)"
          stroke="oklch(0.55 0.22 210)"
          strokeWidth="4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />

        <motion.ellipse
          cx="400"
          cy="250"
          rx="180"
          ry="60"
          fill="none"
          stroke="oklch(0.70 0.20 35)"
          strokeWidth="5"
          strokeDasharray="10 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        <motion.text
          x="590"
          y="255"
          fill="oklch(0.70 0.20 35)"
          fontSize="20"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Equator
        </motion.text>

        <motion.path
          d="M 250 200 Q 270 180, 300 190 T 360 185 T 420 190 T 480 185 T 540 195"
          fill="oklch(0.75 0.18 145)"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        <motion.path
          d="M 260 300 Q 290 285, 330 295 T 400 290 T 470 295 T 530 300"
          fill="oklch(0.75 0.18 145)"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />

        <motion.circle
          cx="300"
          cy="250"
          r="12"
          fill="oklch(0.65 0.24 330)"
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />
        <motion.text
          x="300"
          y="223"
          fill="oklch(0.65 0.24 330)"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          S. America
        </motion.text>

        <motion.circle
          cx="380"
          cy="245"
          r="15"
          fill="oklch(0.70 0.20 35)"
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
        />
        <motion.text
          x="380"
          y="215"
          fill="oklch(0.70 0.20 35)"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          Africa
        </motion.text>

        <motion.circle
          cx="480"
          cy="248"
          r="10"
          fill="oklch(0.55 0.22 210)"
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: "spring" }}
        />
        <motion.text
          x="480"
          y="280"
          fill="oklch(0.55 0.22 210)"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Asia
        </motion.text>

        <motion.circle
          cx="540"
          cy="252"
          r="8"
          fill="oklch(0.75 0.18 145)"
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        />
        <motion.text
          x="540"
          y="225"
          fill="oklch(0.75 0.18 145)"
          fontSize="11"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          Oceania
        </motion.text>

        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1="400"
            y1="70"
            x2="400"
            y2="430"
            stroke="oklch(0.88 0.02 230)"
            strokeWidth="1"
            opacity="0.3"
            transform={`rotate(${i * 30} 400 250)`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
          />
        ))}

        <motion.text
          x="400"
          y="50"
          fill="oklch(0.25 0.05 230)"
          fontSize="28"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          13 Countries on the Equator
        </motion.text>

        <defs>
          <radialGradient id="globeGradient">
            <stop offset="0%" stopColor="oklch(0.65 0.18 200)" />
            <stop offset="50%" stopColor="oklch(0.55 0.22 210)" />
            <stop offset="100%" stopColor="oklch(0.45 0.18 220)" />
          </radialGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-4xl px-4">
        {["South America", "Africa", "Asia/Oceania"].map((continent, idx) => {
          const continentCountries = countries.filter((c) => {
            if (continent === "Asia/Oceania") {
              return c.continent === "Asia" || c.continent === "Oceania";
            }
            return c.continent === continent;
          });

          return (
            <motion.div
              key={continent}
              className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border-2 border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 + idx * 0.1 }}
            >
              <h4 className="font-bold text-lg mb-3 text-foreground">
                {continent === "South America" && "🌎 "}
                {continent === "Africa" && "🌍 "}
                {continent === "Asia/Oceania" && "🌏 "}
                {continent}
              </h4>
              <ul className="space-y-2">
                {continentCountries.map((country) => (
                  <motion.li
                    key={country.name}
                    className="text-sm p-2 rounded-lg transition-all cursor-pointer"
                    style={{
                      backgroundColor:
                        hoveredCountry === country.name
                          ? `${country.color}20`
                          : "transparent",
                    }}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    whileHover={{ x: 4 }}
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: country.color }}
                    />
                    {country.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-6 text-center bg-primary/10 p-5 rounded-xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        <p className="text-foreground font-semibold text-lg mb-2">
          🗺️ Fun Fact!
        </p>
        <p className="text-foreground/80">
          Most of the Equator (78%) passes over water, not land! The longest
          stretch over land is in Africa, crossing through 7 different countries.
        </p>
      </motion.div>
    </div>
  );
}
