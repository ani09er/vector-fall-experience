import { motion } from "framer-motion";

interface VectorLinesProps {
  className?: string;
}

export function VectorLines({ className = "" }: VectorLinesProps) {
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + i * 12,
    rotation: -15 + Math.random() * 10,
    delay: i * 0.5,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Static vector lines */}
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute h-[200vh] w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{
            left: `${line.x}%`,
            transform: `rotate(${line.rotation}deg)`,
            transformOrigin: "top center",
          }}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ 
            opacity: [0, 0.5, 0.5, 0],
            y: ["0%", "100%"]
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Animated streaks */}
      <motion.div
        className="absolute top-0 left-1/4 w-0.5 h-32 bg-gradient-to-b from-primary/60 via-primary to-transparent"
        style={{ rotate: "-15deg" }}
        animate={{
          y: ["-100%", "100vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-0.5 h-24 bg-gradient-to-b from-primary/40 via-primary/80 to-transparent"
        style={{ rotate: "-20deg" }}
        animate={{
          y: ["-100%", "100vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-0.5 h-40 bg-gradient-to-b from-primary/50 via-primary to-transparent"
        style={{ rotate: "-10deg" }}
        animate={{
          y: ["-100%", "100vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          delay: 2.5,
        }}
      />
    </div>
  );
}
