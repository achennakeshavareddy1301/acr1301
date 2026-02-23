import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  const displayProgress = Math.min(Math.floor(progress), 100);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center border-b-[4px] border-foreground"
      exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.p
        className="text-[8rem] md:text-[12rem] font-black leading-none text-foreground tabular-nums"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {displayProgress.toString().padStart(3, "0")}
      </motion.p>

      <div className="w-64 md:w-80 h-[4px] bg-muted border border-foreground mt-6">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${displayProgress}%` }}
        />
      </div>

      <motion.p
        className="mt-6 text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {displayProgress < 100 ? "LOADING SYSTEMS..." : "READY"}
      </motion.p>
    </motion.div>
  );
};

const WithLoading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default WithLoading;
