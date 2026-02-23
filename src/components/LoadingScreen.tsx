import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const name = "CHENNAKESHAVA";
const roles = ["SOFTWARE DEVELOPER", "AI ENGINEER", "FULL-STACK BUILDER"];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"blocks" | "name" | "exit">("blocks");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("name"), 1400),
      setTimeout(() => setRoleIndex(1), 2200),
      setTimeout(() => setRoleIndex(2), 2800),
      setTimeout(() => setPhase("exit"), 3400),
      setTimeout(onComplete, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Generate random grid blocks
  const gridCols = 8;
  const gridRows = 5;
  const blocks = Array.from({ length: gridCols * gridRows }, (_, i) => i);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-foreground flex items-center justify-center overflow-hidden"
      exit={{
        opacity: 0,
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Assembling grid blocks phase */}
      <AnimatePresence>
        {phase === "blocks" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <div
              className="grid gap-[3px]"
              style={{
                gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
              }}
            >
              {blocks.map((i) => (
                <motion.div
                  key={i}
                  className="w-6 h-6 md:w-10 md:h-10 border-[2px] border-primary-foreground/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    backgroundColor:
                      Math.random() > 0.7
                        ? "hsl(var(--primary))"
                        : "transparent",
                  }}
                  transition={{
                    duration: 0.2,
                    delay: Math.random() * 0.8,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* Centered loading text */}
            <motion.p
              className="absolute bottom-16 font-mono text-[10px] tracking-[0.5em] text-primary-foreground/30 uppercase"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              Initializing
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name reveal phase */}
      <AnimatePresence>
        {(phase === "name" || phase === "exit") && (
          <motion.div
            className="flex flex-col items-center gap-6 px-4"
            exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
          >
            {/* Name with overflow clip per letter */}
            <div className="flex flex-wrap justify-center overflow-hidden">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-none tracking-tight"
                  initial={{ y: "110%", rotateX: 90 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Accent line */}
            <motion.div
              className="h-[3px] bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            />

            {/* Cycling role text */}
            <div className="h-5 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-primary-foreground/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner details */}
      <motion.div
        className="absolute top-6 left-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-2 h-2 bg-primary" />
        <p className="font-mono text-[10px] text-primary-foreground/25 tracking-widest">
          PORTFOLIO
        </p>
      </motion.div>

      <motion.p
        className="absolute top-6 right-8 font-mono text-[10px] text-primary-foreground/25 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        2026
      </motion.p>

      <motion.div
        className="absolute bottom-6 left-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-primary"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <p className="font-mono text-[10px] text-primary-foreground/25">
          {phase === "blocks" ? "LOADING" : "READY"}
        </p>
      </motion.div>
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
