import { motion } from "framer-motion";
import { GiHeartArmor } from "react-icons/gi";
import { PiBoot, PiHeart, PiShield, PiSwordLight } from "react-icons/pi";
import { RxMagicWand } from "react-icons/rx";
import { Props } from "./types";

const Stats = ({ stats = [] }: Props) => {
  const generateStatsIcon = (name: string) => {
    switch (name) {
      case "hp":
        return <PiHeart />;
      case "attack":
        return <PiSwordLight />;
      case "defense":
        return <PiShield />;
      case "special-attack":
        return <RxMagicWand />;
      case "special-defense":
        return <GiHeartArmor />;
      case "speed":
        return <PiBoot />;
      default:
        return;
    }
  };

  return (
    <div className="p-4 mb-8 rounded-xl bg-gray-400/10 sm:flex-1 shadow-sm">
      <p className="text-xl font-bold text-gray-900">Stats:</p>
      {stats?.map(({ base_stat, stat }, index) => (
        <div key={stat.name} className="my-2">
          <div className="flex items-center gap-2">
            {generateStatsIcon(stat.name)}
            <span>
              {stat.name} ({base_stat})
            </span>
          </div>
          <motion.div
            className={`h-2 ${
              index % 2 === 0 ? "bg-blue-900" : "bg-yellow-500"
            } rounded-full transition-all duration-1000 ease-in-out`}
            initial={{ width: 0 }}
            animate={{ width: `${base_stat / 2}%` }}
          />
        </div>
      ))}
    </div>
  );
};

export default Stats;
