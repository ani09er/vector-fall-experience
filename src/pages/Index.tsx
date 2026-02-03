import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Zap, Target, Gauge, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FallingParticles } from "@/components/effects/FallingParticles";
import { VectorLines } from "@/components/effects/VectorLines";
import { GridBackground } from "@/components/effects/GridBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Pure Physics",
    description: "Every movement is governed by real momentum and vector mathematics. No fake physics, no shortcuts.",
  },
  {
    icon: Target,
    title: "Precision Control",
    description: "Tap to apply vector impulse. Hold for stronger force. Master the timing to survive.",
  },
  {
    icon: Gauge,
    title: "Momentum System",
    description: "Your velocity carries forward. Chain vectors perfectly to maintain speed and control.",
  },
  {
    icon: Shield,
    title: "Skill-Based Survival",
    description: "No pay-to-win. No auto-aim. Your survival depends entirely on your mastery.",
  },
];

const whyDifferent = [
  "No joystick",
  "No auto-aim", 
  "No fake progression",
  "Skill, physics, and mastery only",
];

export default function Index() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <GridBackground />
        <VectorLines />
        <FallingParticles count={40} />
        
        {/* Hero content */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6"
            >
              AcademixStudio Presents
            </motion.p>
            
            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8"
            >
              <span className="text-glow">VECTOR</span>
              <br />
              <span className="text-primary text-glow">FALL</span>
            </motion.h1>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-2xl mx-auto mb-12"
            >
              You never stop falling.
              <br />
              <span className="text-foreground font-medium">You only change vectors.</span>
            </motion.p>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/game">
                  Enter the Fall
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/studio">About the Studio</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Concept Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="The Core Fantasy"
            subtitle="Experience the pure essence of momentum and vector physics"
          />
          
          {/* Vector diagram animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative aspect-video rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
              {/* Animated vector visualization */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(0 0% 30%)" strokeWidth="0.5" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Falling player */}
                <motion.g
                  initial={{ y: 20 }}
                  animate={{ y: 180 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <motion.circle
                    cx="200"
                    r="8"
                    fill="hsl(0 84% 50%)"
                    animate={{ cx: [200, 250, 200, 150, 200] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Velocity vector */}
                  <motion.line
                    x1="200"
                    y1="0"
                    x2="200"
                    y2="30"
                    stroke="hsl(0 84% 50%)"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    animate={{ x1: [200, 250, 200, 150, 200], x2: [200, 250, 200, 150, 200] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.g>
                
                {/* Direction arrows indicator */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="hsl(0 84% 50%)" />
                  </marker>
                </defs>
                
                {/* Left/Right impulse indicators */}
                <motion.text
                  x="80"
                  y="112"
                  fill="hsl(0 0% 60%)"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="Space Grotesk"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ← TAP LEFT
                </motion.text>
                <motion.text
                  x="320"
                  y="112"
                  fill="hsl(0 0% 60%)"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="Space Grotesk"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  TAP RIGHT →
                </motion.text>
                
                {/* Constant fall indicator */}
                <motion.text
                  x="200"
                  y="215"
                  fill="hsl(0 84% 50%)"
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="Space Grotesk"
                  fontWeight="600"
                  letterSpacing="0.1em"
                >
                  CONSTANT FALL ↓
                </motion.text>
              </svg>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Why VECTOR FALL Is Different"
              align="left"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyDifferent.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-3 h-3 rounded-full bg-primary group-hover:shadow-[0_0_20px_hsl(0_84%_50%/0.5)] transition-shadow duration-300" />
                  <span className="font-display text-lg font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/game">
                  Experience It Now
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Preview Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-display text-sm uppercase tracking-[0.2em] mb-4">
                The Studio
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Built by AcademixStudio
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                An independent game development studio focused on experimental mechanics, 
                physics-driven gameplay, and mastery-based player experiences.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/studio">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden relative">
                {/* Abstract studio visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      className="w-32 h-32 bg-primary rounded-lg rotate-45"
                      animate={{ rotate: [45, 135, 45] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-0 w-32 h-32 bg-primary/30 rounded-lg rotate-45 blur-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>
                <GridBackground />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
