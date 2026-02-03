import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 md:p-8 rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-2">Cookie Notice</h3>
                  <p className="text-muted-foreground text-sm">
                    We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
                    By continuing to use this site, you agree to our use of cookies.{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Button
                    variant="ghost"
                    onClick={handleDecline}
                    className="flex-1 md:flex-none"
                  >
                    Decline
                  </Button>
                  <Button
                    variant="hero"
                    onClick={handleAccept}
                    className="flex-1 md:flex-none"
                  >
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
