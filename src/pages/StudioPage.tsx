import { motion } from "framer-motion";
import { 
  Gamepad2, Smartphone, Palette, Gauge, 
  TestTube, Upload, Lightbulb, Code, Wrench, Layers
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FallingParticles } from "@/components/effects/FallingParticles";
import { GridBackground } from "@/components/effects/GridBackground";

const philosophyItems = [
  { text: "Mechanics before monetization", delay: 0 },
  { text: "Physics before polish", delay: 0.1 },
  { text: "Skill before grind", delay: 0.2 },
  { text: "Innovation over imitation", delay: 0.3 },
];

const capabilities = [
  {
    icon: Gamepad2,
    title: "Game Design & Development",
    description: "From concept to completion, we craft games that challenge and reward.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-feel experiences optimized for touch and performance.",
  },
  {
    icon: Palette,
    title: "UI/UX Systems",
    description: "Interfaces that feel invisible yet powerful. Every pixel serves purpose.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Smooth 60fps gameplay on devices of all tiers.",
  },
  {
    icon: TestTube,
    title: "QA Testing",
    description: "Rigorous testing ensures polished, bug-free experiences.",
  },
  {
    icon: Upload,
    title: "Publishing Support",
    description: "End-to-end support from development to store presence.",
  },
];

export default function StudioPage() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <GridBackground />
        <FallingParticles count={25} />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <motion.div
                  className="w-16 h-16 bg-primary rounded-lg rotate-45"
                  animate={{ rotate: [45, 135, 45] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                ACADEMIX<span className="text-primary">STUDIO</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                An independent game development studio focused on experimental mechanics, 
                physics-driven gameplay, and mastery-based player experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  AcademixStudio was born from a simple belief: games should reward skill, not time or money. 
                  We explore unconventional control systems and design experiences that demand precision, 
                  learning, and genuine mastery.
                </p>
                <p>
                  Based in India, we're a small team with ambitious goals. Every game we create is an 
                  experiment in what mobile gaming can become when we strip away the noise and focus 
                  on what matters: the feel of perfect control.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden relative">
                {/* Abstract visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Orbiting elements */}
                    <motion.div
                      className="absolute w-64 h-64 rounded-full border border-primary/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                    </motion.div>
                    <motion.div
                      className="absolute w-48 h-48 left-8 top-8 rounded-full border border-primary/30"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/70" />
                    </motion.div>
                    
                    {/* Center logo */}
                    <div className="w-20 h-20 bg-primary rounded-lg rotate-45 relative z-10" />
                    <div className="absolute inset-0 w-20 h-20 bg-primary/30 rounded-lg rotate-45 blur-xl" />
                  </div>
                </div>
                
                {/* Icons floating */}
                <motion.div
                  className="absolute top-10 left-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Code className="w-6 h-6 text-primary/50" />
                </motion.div>
                <motion.div
                  className="absolute bottom-10 right-10"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Lightbulb className="w-6 h-6 text-primary/50" />
                </motion.div>
                <motion.div
                  className="absolute top-1/4 right-12"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <Wrench className="w-5 h-5 text-primary/40" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <SectionTitle
            title="Studio Philosophy"
            subtitle="The principles that guide every decision"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {philosophyItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className="relative p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm group overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center gap-6">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0 group-hover:shadow-[0_0_20px_hsl(0_84%_50%/0.5)] transition-shadow duration-300" />
                    <span className="font-display text-xl md:text-2xl font-medium">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="What We Do"
            subtitle="Our capabilities and services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden relative"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Layers className="w-12 h-12 text-primary mx-auto mb-8" />
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              "We don't make games for everyone.
              <br />
              <span className="text-primary">We make games for those who want to master something.</span>"
            </blockquote>
            <p className="text-muted-foreground text-lg">— AcademixStudio</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
