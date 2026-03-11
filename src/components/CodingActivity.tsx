import { motion } from "framer-motion";

const CodingActivity = () => {
  return (
    <section className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="card-brutal bg-primary text-primary-foreground p-4 md:p-6 inline-block border-background border-[3px]">
            <h2 className="font-black text-2xl md:text-4xl tracking-tight">
              CODING
              <br />
              ACTIVITY
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold tracking-widest text-background/60">
              CONSISTENCY IS THE SYSTEM
            </p>
          </div>
        </div>

        {/* Heatmaps Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-[3px] border-background p-5 md:p-8 bg-background"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="font-black text-sm tracking-wide text-foreground">GITHUB</span>
              </div>
              <a
                href="https://github.com/achennakeshavareddy1301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-wide text-primary hover:underline"
              >
                VIEW PROFILE →
              </a>
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/1a6dff/achennakeshavareddy1301"
                alt="GitHub contribution heatmap for achennakeshavareddy1301"
                className="w-full min-w-[600px]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border-[3px] border-background p-5 md:p-8 bg-background"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground" aria-hidden="true">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.014.013c.424.374.752.852.96 1.394a1.374 1.374 0 0 0 1.758.819 1.381 1.381 0 0 0 .817-1.764 5.137 5.137 0 0 0-1.595-2.321 5.157 5.157 0 0 0-4.031-1.977zM16.605 7.2h5.025a1.38 1.38 0 0 1 0 2.76h-5.025a1.38 1.38 0 0 1 0-2.76z"/>
                </svg>
                <span className="font-black text-sm tracking-wide text-foreground">LEETCODE</span>
              </div>
              <a
                href="https://leetcode.com/u/TXdwf8cuEe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-wide text-primary hover:underline"
              >
                VIEW PROFILE →
              </a>
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://leetcard.jacoblin.cool/TXdwf8cuEe?theme=light&font=Source%20Code%20Pro&ext=heatmap&border=0"
                alt="LeetCode activity heatmap for TXdwf8cuEe"
                className="w-full min-w-[600px]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingActivity;
