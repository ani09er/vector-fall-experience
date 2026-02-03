import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { GridBackground } from "@/components/effects/GridBackground";

export default function PrivacyPage() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <GridBackground />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: February 1, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg"
          >
            <div className="space-y-8">
              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AcademixStudio ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our games and services, including VECTOR FALL.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Device information (device type, operating system, unique device identifiers)</li>
                  <li>Gameplay data (scores, achievements, progress, in-game statistics)</li>
                  <li>Analytics data (session duration, feature usage, crash reports)</li>
                  <li>Information you provide voluntarily (contact form submissions, feedback)</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and maintain our games and services</li>
                  <li>Improve gameplay experience and fix bugs</li>
                  <li>Analyze usage patterns to enhance features</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">4. Data Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  VECTOR FALL primarily stores gameplay data locally on your device. We do not 
                  require an account or store personal information on our servers unless you 
                  voluntarily contact us through our website.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our games may include third-party services such as analytics providers and 
                  advertising networks. These services have their own privacy policies, and we 
                  encourage you to review them. We work only with reputable partners who comply 
                  with applicable data protection regulations.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">6. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to children under 13. We do not knowingly collect 
                  personal information from children under 13. If you believe we have collected 
                  information from a child under 13, please contact us immediately.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please 
                  contact us at:
                </p>
                <p className="text-primary mt-4">contact@academixstudio.com</p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">9. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last 
                  updated" date.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
