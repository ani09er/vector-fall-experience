import { motion } from "framer-motion";
import { Calendar, ChevronRight, BookOpen, Wrench, Lightbulb, FileCode } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FallingParticles } from "@/components/effects/FallingParticles";
import { GridBackground } from "@/components/effects/GridBackground";
import { Button } from "@/components/ui/button";

const devlogs = [
  {
    id: 1,
    type: "design",
    title: "The Philosophy of Constant Fall",
    excerpt: "Why we removed the ability to stop. How constant motion creates constant engagement and forces players to think in vectors.",
    date: "January 28, 2026",
    readTime: "8 min read",
    icon: Lightbulb,
  },
  {
    id: 2,
    type: "technical",
    title: "Vector Math in Real-Time: Our Physics System",
    excerpt: "A deep dive into how we calculate momentum preservation, vector impulses, and trajectory prediction at 60fps.",
    date: "January 20, 2026",
    readTime: "12 min read",
    icon: FileCode,
  },
  {
    id: 3,
    type: "patch",
    title: "Patch 0.9.2: Enemy AI Improvements",
    excerpt: "Interceptors are now smarter. Reflectors have been rebalanced. Full patch notes and reasoning inside.",
    date: "January 15, 2026",
    readTime: "4 min read",
    icon: Wrench,
  },
  {
    id: 4,
    type: "design",
    title: "Designing the HP Drain System",
    excerpt: "How we balanced constant danger with skill-based recovery. The psychology behind the 'always dying' feeling.",
    date: "January 8, 2026",
    readTime: "10 min read",
    icon: Lightbulb,
  },
  {
    id: 5,
    type: "technical",
    title: "Touch Input Latency: Our War Against Milliseconds",
    excerpt: "Every frame counts. How we achieved sub-16ms touch response and why it matters for precision gameplay.",
    date: "December 28, 2025",
    readTime: "15 min read",
    icon: FileCode,
  },
  {
    id: 6,
    type: "patch",
    title: "Patch 0.9.0: The Great Rebalance",
    excerpt: "Major changes to level difficulty curves, enemy spawn rates, and bonus path rewards.",
    date: "December 15, 2025",
    readTime: "6 min read",
    icon: Wrench,
  },
];

const typeColors = {
  design: "text-yellow-500 bg-yellow-500/10",
  technical: "text-blue-500 bg-blue-500/10",
  patch: "text-green-500 bg-green-500/10",
};

const typeLabels = {
  design: "Design Deep Dive",
  technical: "Technical Article",
  patch: "Patch Notes",
};

export default function DevlogPage() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <GridBackground />
        <FallingParticles count={20} />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              DEVLOG
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Development logs, design philosophy, patch notes, and behind-the-scenes insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Devlog Timeline */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line - continuing the falling theme */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />
              
              {devlogs.map((log, index) => (
                <motion.article
                  key={log.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-24 pb-16 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  {/* Date badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <time className="text-muted-foreground text-sm">{log.date}</time>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground text-sm">{log.readTime}</span>
                  </div>
                  
                  {/* Content card */}
                  <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      {/* Type badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider ${typeColors[log.type as keyof typeof typeColors]}`}>
                          <log.icon className="w-3 h-3" />
                          {typeLabels[log.type as keyof typeof typeLabels]}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {log.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {log.excerpt}
                      </p>
                      
                      {/* Read more link */}
                      <Button variant="ghost" className="group/btn p-0 h-auto font-display text-primary hover:bg-transparent">
                        Read Full Article
                        <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {/* Load more */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Follow our development journey. Get notified when we publish new devlogs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Subscribe to Updates
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
