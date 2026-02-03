import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { GridBackground } from "@/components/effects/GridBackground";

export default function TermsPage() {
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
            <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Terms of Service
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
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-8">
              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using VECTOR FALL or any other games and services provided by 
                  AcademixStudio ("Services"), you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, do not use our Services.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">2. License to Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AcademixStudio grants you a limited, non-exclusive, non-transferable, revocable 
                  license to use our games and services for personal, non-commercial purposes. This 
                  license does not include the right to modify, distribute, or create derivative 
                  works based on our content.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">3. User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use cheats, exploits, automation software, bots, hacks, or unauthorized third-party software</li>
                  <li>Modify, adapt, or reverse engineer any part of our Services</li>
                  <li>Interfere with or disrupt the integrity of our Services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our Services for any illegal purpose</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content in our Services, including but not limited to graphics, logos, game 
                  mechanics, code, and audiovisual elements, is the property of AcademixStudio and 
                  is protected by copyright, trademark, and other intellectual property laws. 
                  VECTOR FALL and AcademixStudio are trademarks of AcademixStudio.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">5. User Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any content you submit through our Services (such as feedback, suggestions, or 
                  contact form submissions) may be used by us without obligation to compensate you. 
                  You represent that you have the right to submit such content and that it does not 
                  violate any third-party rights.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">6. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Services are provided "AS IS" and "AS AVAILABLE" without warranties of any 
                  kind. We do not guarantee that our Services will be uninterrupted, error-free, or 
                  secure. We are not responsible for any loss of data or progress.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, AcademixStudio shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising out of 
                  or relating to your use of our Services.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend your access to our Services at any 
                  time, without notice, for any reason, including violation of these Terms.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of 
                  India, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may modify these Terms at any time. Your continued use of our Services after 
                  any changes indicates your acceptance of the modified Terms.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">11. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, please contact us at:
                </p>
                <p className="text-primary mt-4">contact@academixstudio.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
