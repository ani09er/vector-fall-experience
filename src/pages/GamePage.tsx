import { motion } from "framer-motion";
import { 
  Move, Hand, Gauge, Link2, 
  AlertTriangle, RefreshCw, CircleDot, 
  Square, Zap, RotateCcw, XCircle,
  Heart, TrendingDown, Activity
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FallingParticles } from "@/components/effects/FallingParticles";
import { GridBackground } from "@/components/effects/GridBackground";

const mechanics = [
  {
    icon: Move,
    title: "Constant Vertical Fall",
    description: "You are always falling. There is no pause, no hover, no rest. The fall is eternal.",
  },
  {
    icon: Hand,
    title: "Tap Left/Right",
    description: "Tap either side of the screen to apply a vector impulse in that direction.",
  },
  {
    icon: Gauge,
    title: "Hold for Power",
    description: "Hold longer for stronger vector force. Master the timing for precise control.",
  },
  {
    icon: Link2,
    title: "Momentum Preservation",
    description: "Your velocity carries forward. Previous vectors affect your current trajectory.",
  },
  {
    icon: Activity,
    title: "Precision Chaining",
    description: "Chain perfect vector inputs to maintain speed and thread through obstacles.",
  },
];

const enemies = [
  {
    icon: AlertTriangle,
    title: "Interceptors",
    description: "Enemies that calculate and align with your current vector path. They predict where you'll be.",
    threat: "HIGH",
  },
  {
    icon: RefreshCw,
    title: "Reflectors",
    description: "Bounce you into unexpected directions, often toward other hazards.",
    threat: "MEDIUM",
  },
  {
    icon: CircleDot,
    title: "Drain Orbs",
    description: "Weaken your vector strength temporarily, making precision inputs critical.",
    threat: "LOW",
  },
];

const obstacles = [
  {
    icon: Square,
    title: "Shifting Walls",
    description: "Walls that move and close in, requiring quick vector adjustments.",
  },
  {
    icon: Zap,
    title: "Laser Slices",
    description: "Instant-kill beams that sweep across your path. Timing is everything.",
  },
  {
    icon: RotateCcw,
    title: "Gravity Inversions",
    description: "Zones where gravity reverses, completely changing your vector math.",
  },
  {
    icon: XCircle,
    title: "Vector Dead Zones",
    description: "Areas where your inputs are nullified. Pure momentum only.",
  },
];

export default function GamePage() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GridBackground />
        <FallingParticles count={25} />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-4">
              Game Experience
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              <span className="text-glow">VECTOR FALL</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the physics. Command the vectors. Survive the descent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mechanics Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Core Mechanics"
            subtitle="Every input matters. Every vector counts."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mechanics.map((mechanic, index) => (
              <motion.div
                key={mechanic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="group relative p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <mechanic.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{mechanic.title}</h3>
                  <p className="text-muted-foreground">{mechanic.description}</p>
                </div>
                
                {/* Interactive cursor hint */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enemies Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <SectionTitle
            title="Hostile Entities"
            subtitle="They know your vectors. They're waiting."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {enemies.map((enemy, index) => (
              <motion.div
                key={enemy.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden h-full">
                  {/* Orbiting threat indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-12 h-12"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/60" />
                  </motion.div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <enemy.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className={`
                        text-xs font-display uppercase tracking-wider px-3 py-1 rounded-full
                        ${enemy.threat === 'HIGH' ? 'bg-primary/20 text-primary' : ''}
                        ${enemy.threat === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-500' : ''}
                        ${enemy.threat === 'LOW' ? 'bg-green-500/20 text-green-500' : ''}
                      `}>
                        {enemy.threat} THREAT
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{enemy.title}</h3>
                    <p className="text-muted-foreground">{enemy.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Obstacles Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Environmental Hazards"
            subtitle="The world itself wants you dead."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {obstacles.map((obstacle, index) => (
              <motion.div
                key={obstacle.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-colors"
              >
                {/* Hazard stripes */}
                <div className="absolute inset-0 hazard-stripes opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <obstacle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">{obstacle.title}</h3>
                    <p className="text-muted-foreground text-sm">{obstacle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HP System Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Core Integrity System"
              subtitle="Your life drains with every second. Fight to restore it."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center"
              >
                <TrendingDown className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-display font-semibold mb-2">Constant Drain</h4>
                <p className="text-muted-foreground text-sm">HP depletes over time. You're always on borrowed time.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center"
              >
                <AlertTriangle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-display font-semibold mb-2">Collision Penalty</h4>
                <p className="text-muted-foreground text-sm">Every hit accelerates the drain. Avoid at all costs.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center"
              >
                <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-display font-semibold mb-2">Perfect Chains</h4>
                <p className="text-muted-foreground text-sm">Flawless vector chains restore your core. Skill heals.</p>
              </motion.div>
            </div>
            
            {/* Animated HP bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <div className="relative h-4 rounded-full bg-card border border-border/50 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: ["100%", "30%", "60%", "45%", "70%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-display uppercase tracking-widest text-foreground/80">Core Integrity</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Level Design Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Level Architecture"
            subtitle="Vertical stages designed for mastery"
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden p-8"
            >
              {/* Vertical level visualization */}
              <div className="relative h-96">
                {/* Level zones */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-green-500/10 to-transparent rounded-t-lg border-l-2 border-green-500/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute top-2 left-4 text-xs font-display uppercase tracking-wider text-green-500">Safe Zone</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-28 left-0 right-0 h-32 bg-gradient-to-b from-yellow-500/10 via-yellow-500/5 to-transparent border-l-2 border-yellow-500/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="absolute top-2 left-4 text-xs font-display uppercase tracking-wider text-yellow-500">Transition</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-64 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-primary/20 rounded-b-lg border-l-2 border-primary/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="absolute top-2 left-4 text-xs font-display uppercase tracking-wider text-primary">Danger Zone</span>
                </motion.div>
                
                {/* Falling player indicator */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(0_84%_50%/0.5)]"
                  animate={{ top: ["10%", "85%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeIn" }}
                />
                
                {/* Bonus path indicator */}
                <motion.div
                  className="absolute right-8 top-32 w-16 h-48 rounded-lg border border-dashed border-primary/30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-xs font-display text-primary/60 rotate-90 whitespace-nowrap">Bonus Path</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
