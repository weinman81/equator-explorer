import { motion } from "framer-motion";
import EarthDiagram from "./diagrams/EarthDiagram";
import SunlightDiagram from "./diagrams/SunlightDiagram";
import DistanceDiagram from "./diagrams/DistanceDiagram";
import DayNightDiagram from "./diagrams/DayNightDiagram";
import CountriesMap from "./diagrams/CountriesMap";

interface FactDetailProps {
  factId: number;
}

export default function FactDetail({ factId }: FactDetailProps) {
  const renderContent = () => {
    switch (factId) {
      case 1:
        return (
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              The Equator is like an invisible belt wrapped around Earth's middle. It's exactly halfway between the North Pole and the South Pole!
            </p>
            <EarthDiagram />
            <div className="bg-secondary/10 p-6 rounded-2xl border-2 border-secondary/30">
              <h3 className="font-bold text-lg mb-2 text-secondary">Did you know?</h3>
              <p className="text-foreground/80">
                The word "Equator" comes from Latin, meaning "equalizer," because it divides Earth into two equal halves called hemispheres. "Hemi" means half and "sphere" means ball!
              </p>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              The Equator gets the most direct sunlight all year long! That's because the sun's rays hit the Equator straight on, while other places get slanted rays.
            </p>
            <SunlightDiagram />
            <div className="bg-[oklch(0.70_0.20_35)]/10 p-6 rounded-2xl border-2 border-[oklch(0.70_0.20_35)]/30">
              <h3 className="font-bold text-lg mb-2 text-[oklch(0.70_0.20_35)]">Why is it warmer?</h3>
              <p className="text-foreground/80 mb-3">
                Direct sunlight is stronger than slanted sunlight! Imagine shining a flashlight straight down on the floor versus at an angle - the direct light makes a brighter, smaller spot!
              </p>
              <p className="text-foreground/80">
                Average temperature at the Equator: 75-85°F (24-29°C) all year round!
              </p>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              The Equator stretches 24,901 miles (40,075 kilometers) around the entire Earth! That's like driving across the United States 9 times!
            </p>
            <DistanceDiagram />
            <div className="bg-accent/10 p-6 rounded-2xl border-2 border-accent/30">
              <h3 className="font-bold text-lg mb-2 text-accent">Fun Comparisons!</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>🚗 Driving at 60 mph non-stop = 415 hours (17 days!)</li>
                <li>✈️ Flying in a plane at 500 mph = 50 hours</li>
                <li>🚶 Walking at 3 mph = 8,300 hours (almost a year!)</li>
                <li>🚀 On the Space Station = 1.5 hours to orbit Earth once!</li>
              </ul>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              At the Equator, every single day has 12 hours of daylight and 12 hours of darkness! The sun rises around 6:00 AM and sets around 6:00 PM all year long.
            </p>
            <DayNightDiagram />
            <div className="bg-secondary/10 p-6 rounded-2xl border-2 border-secondary/30">
              <h3 className="font-bold text-lg mb-2 text-secondary">What about other places?</h3>
              <p className="text-foreground/80 mb-3">
                Places far from the Equator have very different days! In summer they get lots of daylight, but in winter the days are very short.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>🌞 Alaska in summer: 20+ hours of daylight!</li>
                <li>🌙 Alaska in winter: Only 5 hours of daylight</li>
                <li>⚖️ The Equator: Always 12 hours, every single day!</li>
              </ul>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              The Equator passes through 13 amazing countries on 3 different continents! Let's explore where you can visit the middle of the Earth.
            </p>
            <CountriesMap />
            <div className="bg-primary/10 p-6 rounded-2xl border-2 border-primary/30">
              <h3 className="font-bold text-lg mb-2 text-primary">The 13 Countries:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-foreground/80">
                <div>
                  <p className="font-semibold text-foreground mb-1">🌎 South America:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Ecuador</li>
                    <li>Colombia</li>
                    <li>Brazil</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">🌍 Africa:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>São Tomé & Príncipe</li>
                    <li>Gabon</li>
                    <li>Republic of Congo</li>
                    <li>Democratic Republic of Congo</li>
                    <li>Uganda</li>
                    <li>Kenya</li>
                    <li>Somalia</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold text-foreground mb-1">🌏 Asia/Oceania:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Maldives</li>
                    <li>Indonesia</li>
                    <li>Kiribati</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-foreground/80 italic">
                💡 Ecuador got its name from the Spanish word for "Equator"!
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-4"
    >
      {renderContent()}
    </motion.div>
  );
}
