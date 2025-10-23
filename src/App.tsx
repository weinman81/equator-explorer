import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlobeHemisphereWest, Sun, Ruler, ThermometerSimple, MapPin } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface Fact {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const facts: Fact[] = [
  {
    id: 1,
    title: "An Imaginary Line Around Earth",
    description: "The Equator is an imaginary line that wraps around the middle of Earth, like a belt! It divides our planet into two halves: the Northern Hemisphere and the Southern Hemisphere.",
    icon: <GlobeHemisphereWest size={48} weight="duotone" />,
    color: "text-primary",
  },
  {
    id: 2,
    title: "Always Warm and Sunny",
    description: "Countries on the Equator are warm all year long! They get the most direct sunlight from the sun, so it never gets cold like winter in other places.",
    icon: <Sun size={48} weight="duotone" />,
    color: "text-[oklch(0.70_0.20_35)]",
  },
  {
    id: 3,
    title: "It's Really, Really Long!",
    description: "The Equator is about 24,901 miles long! That's so long it would take you over 1,000 hours to drive all the way around it without stopping.",
    icon: <Ruler size={48} weight="duotone" />,
    color: "text-accent",
  },
  {
    id: 4,
    title: "Day and Night Are Equal",
    description: "At the Equator, daytime and nighttime are almost exactly 12 hours each, every single day of the year! The sun rises at 6am and sets at 6pm.",
    icon: <ThermometerSimple size={48} weight="duotone" />,
    color: "text-secondary",
  },
  {
    id: 5,
    title: "13 Countries Touch the Equator",
    description: "The Equator passes through 13 countries including Ecuador, Kenya, and Indonesia. People living there can stand with one foot in the Northern Hemisphere and one foot in the Southern Hemisphere!",
    icon: <MapPin size={48} weight="duotone" />,
    color: "text-primary",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-green-50/30">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            🌍 Amazing Equator Facts! 🌍
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Learn 5 Cool Things About Earth's Middle Line
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-2 bg-card/80 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-4">
                  <Badge 
                    variant="secondary" 
                    className="text-sm font-semibold px-4 py-1"
                  >
                    Fact {fact.id}
                  </Badge>
                  
                  <motion.div
                    className={fact.color}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {fact.icon}
                  </motion.div>

                  <h2 className="text-xl font-bold text-foreground leading-tight">
                    {fact.title}
                  </h2>

                  <p className="text-base text-foreground/80 leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground font-medium">
            🎓 Perfect for your 3rd Grade Science Project! 🎓
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;