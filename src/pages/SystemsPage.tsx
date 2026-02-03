import { motion } from "framer-motion";
import { 
  Trophy, Target, Shield, Clock, 
  TrendingUp, Activity, BarChart3, User,
  Crosshair, Heart, Calendar, AlertTriangle
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FallingParticles } from "@/components/effects/FallingParticles";
import { GridBackground } from "@/components/effects/GridBackground";

const rankMetrics = [
  { label: "Distance", value: "12,847m", icon: TrendingUp, change: "+23%" },
  { label: "Precision", value: "94.2%", icon: Target, change: "+5%" },
  { label: "Damage Taken", value: "Low", icon: Shield, change: "-12%" },
];

const playerStats = [
  { label: "Best Vector Chain", value: "47", icon: Activity },
  { label: "Survival Time", value: "4:32", icon: Clock },
  { label: "Total Falls", value: "1,284", icon: TrendingUp },
  { label: "Perfect Runs", value: "23", icon: Trophy },
];

const analytics = [
  { label: "Vector Misuse Rate", value: "8.3%", description: "Inputs that resulted in collision", icon: Crosshair },
  { label: "Average Death Height", value: "8,234m", description: "Where most runs end", icon: AlertTriangle },
  { label: "HP Efficiency", value: "72%", description: "Time spent above 50% HP", icon: Heart },
];

const matchHistory = [
  { date: "Today", distance: "12,847m", chains: 34, status: "personal_best" },
  { date: "Today", distance: "8,234m", chains: 21, status: "completed" },
  { date: "Yesterday", distance: "11,203m", chains: 29, status: "completed" },
  { date: "Yesterday", distance: "5,102m", chains: 12, status: "failed" },
  { date: "2 days ago", distance: "10,891m", chains: 31, status: "completed" },
];

export default function SystemsPage() {
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
            <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-4">
              Player Intelligence
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              SYSTEMS & STATS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your mastery. Analyze your vectors. Dominate the fall.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Local Leaderboard"
            subtitle="Deepest fall rankings"
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-border/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-primary" />
                  <span className="font-display font-semibold text-lg">Top Falls</span>
                </div>
                <span className="text-muted-foreground text-sm">Local Device</span>
              </div>
              
              {/* Leaderboard entries */}
              <div className="divide-y divide-border/30">
                {[
                  { rank: 1, name: "You", distance: "12,847m", date: "Today", highlight: true },
                  { rank: 2, name: "You", distance: "11,203m", date: "Yesterday", highlight: false },
                  { rank: 3, name: "You", distance: "10,891m", date: "2 days ago", highlight: false },
                  { rank: 4, name: "You", distance: "9,456m", date: "3 days ago", highlight: false },
                  { rank: 5, name: "You", distance: "8,234m", date: "1 week ago", highlight: false },
                ].map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-5 flex items-center gap-6 ${entry.highlight ? 'bg-primary/5' : ''}`}
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold
                      ${entry.rank === 1 ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground'}
                    `}>
                      {entry.rank}
                    </div>
                    <div className="flex-1">
                      <span className="font-display font-medium">{entry.name}</span>
                      <p className="text-muted-foreground text-sm">{entry.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-xl font-semibold text-foreground">{entry.distance}</span>
                      {entry.highlight && (
                        <span className="block text-primary text-xs uppercase tracking-wider">Personal Best</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rank Metrics Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <SectionTitle
            title="Performance Metrics"
            subtitle="Your last run analyzed"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {rankMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center group hover:border-primary/30 transition-colors"
              >
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">{metric.label}</p>
                <p className="font-display text-4xl font-bold mb-2">{metric.value}</p>
                <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-primary'}`}>
                  {metric.change} vs. average
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Profile Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Player Profile"
            subtitle="Your career statistics"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Stats cards */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {playerStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm group hover:border-primary/30 transition-colors"
                  >
                    <stat.icon className="w-6 h-6 text-primary mb-4" />
                    <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                    <p className="font-display text-3xl font-bold">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Profile card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-primary/30 bg-card/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-lg">Vector Master</p>
                    <p className="text-primary text-sm">Rank: Elite</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress to Legend</span>
                      <span className="text-primary">73%</span>
                    </div>
                    <div className="h-2 rounded-full bg-card overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "73%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Match History Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <SectionTitle
            title="Match History"
            subtitle="Your recent runs"
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50" />
              
              {matchHistory.map((match, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`
                    absolute left-4 top-2 w-4 h-4 rounded-full border-2
                    ${match.status === 'personal_best' ? 'bg-primary border-primary' : ''}
                    ${match.status === 'completed' ? 'bg-card border-primary/50' : ''}
                    ${match.status === 'failed' ? 'bg-card border-muted-foreground' : ''}
                  `} />
                  
                  <div className={`
                    p-5 rounded-xl border bg-card/30 backdrop-blur-sm
                    ${match.status === 'personal_best' ? 'border-primary/50' : 'border-border/50'}
                  `}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">{match.date}</span>
                      </div>
                      {match.status === 'personal_best' && (
                        <span className="text-xs font-display uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                          Personal Best
                        </span>
                      )}
                      {match.status === 'failed' && (
                        <span className="text-xs font-display uppercase tracking-wider text-muted-foreground">
                          Early End
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Distance</p>
                        <p className="font-display text-xl font-bold">{match.distance}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Chains</p>
                        <p className="font-display text-xl font-bold">{match.chains}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offline Analytics Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Offline Analytics"
            subtitle="Insights from your gameplay patterns"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {analytics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                  <BarChart3 className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="font-display text-3xl font-bold mb-2">{stat.value}</p>
                <p className="font-display font-medium mb-1">{stat.label}</p>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
