import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const bootLines = [
  { text: "> INITIALIZING SYSTEM...", delay: 0 },
  { text: "> LOADING MODULES: AI / FULLSTACK / DESIGN", delay: 400 },
  { text: "> COMPILING PORTFOLIO.TSX", delay: 800 },
  { text: "> STATUS: ALL SYSTEMS OPERATIONAL", delay: 1200 },
  { text: "> READY_", delay: 1600 },
];

const nameLetters = "ADITYA".split("");

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [phase, setPhase] = useState<"boot" | "name" | "exit">("boot");

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    bootLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), line.delay)
      );
    });

    timers.push(setTimeout(() => setPhase("name"), 2000));
    timers.push(setTimeout(() => setPhase("exit"), 3200));
    timers.push(setTimeout(onComplete, 3800));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-foreground flex flex-col items-center justify-center overflow-hidden"
      exit={{ 
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }} />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-primary opacity-30"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Boot sequence */}
      <AnimatePresence>
        {phase === "boot" && (
          <motion.div
            className="absolute top-12 left-8 md:left-16"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={i}
                className="font-mono text-xs md:text-sm text-primary-foreground/60 mb-2 tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              >
                {line.text}
                {i === visibleLines - 1 && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Big name reveal */}
      <AnimatePresence>
        {(phase === "name" || phase === "exit") && (
          <motion.div
            className="flex flex-col items-center gap-4"
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.3 } }}
          >
            <div className="flex overflow-hidden">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-[5rem] md:text-[10rem] lg:text-[14rem] font-black text-primary-foreground leading-none"
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="h-[3px] w-12 bg-primary" />
              <p className="text-xs md:text-sm font-bold tracking-[0.4em] text-primary-foreground/50 uppercase">
                Software Developer & AI Engineer
              </p>
              <div className="h-[3px] w-12 bg-primary" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner markers */}
      <div className="absolute top-6 right-8 md:right-16">
        <motion.p
          className="font-mono text-xs text-primary-foreground/30 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          PORTFOLIO / 2026
        </motion.p>
      </div>

      <div className="absolute bottom-6 left-8 md:left-16 flex items-center gap-3">
        <motion.div
          className="w-2 h-2 bg-primary"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.p
          className="font-mono text-xs text-primary-foreground/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {phase === "boot" ? "BOOTING" : phase === "name" ? "LOADED" : "LAUNCHING"}
        </motion.p>
      </div>

      <div className="absolute bottom-6 right-8 md:right-16">
        <motion.p
          className="font-mono text-xs text-primary-foreground/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          v1.0.0
        </motion.p>
      </div>
    </motion.div>
  );
};

const WithLoading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={handleComplete} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default WithLoading;
