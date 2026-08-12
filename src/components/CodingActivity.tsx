import { ExternalLink } from "lucide-react";
import { motion, type Variants, type Easing } from "framer-motion";

const easeOut: Easing = [0.25, 0.1, 0.25, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
  }),
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15 + 0.2, duration: 0.4, ease: easeOut },
  }),
};

const techVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.3, ease: easeOut } },
};

interface Profile {
  index: string;
  title: string;
  subtitle: string;
  username: string;
  url: string;
  icon: "github" | "leetcode";
  heatmapUrl: string;
  stats: string[];
}

const profiles: Profile[] = [
  {
    index: "05",
    title: "GitHub",
    subtitle: "Open Source & Projects",
    username: "chennakeshavareddy",
    url: "https://github.com/achennakeshavareddy1301",
    icon: "github",
    heatmapUrl:
      "https://ghchart.rshah.org/1a6dff/achennakeshavareddy1301",
    stats: ["Contributions", "Repositories", "Open Source"],
  },
  {
    index: "06",
    title: "LeetCode",
    subtitle: "Problem Solving & DSA",
    username: "chennakeshavareddy",
    url: "https://leetcode.com/u/TXdwf8cuEe/",
    icon: "leetcode",
    heatmapUrl:
      "https://leetcard.jacoblin.cool/TXdwf8cuEe?theme=light&font=Source%20Code%20Pro&ext=heatmap&border=0",
    stats: ["Algorithms", "Data Structures", "Problem Solving"],
  },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-foreground" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-foreground" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.014.013c.424.374.752.852.96 1.394a1.374 1.374 0 0 0 1.758.819 1.381 1.381 0 0 0 .817-1.764 5.137 5.137 0 0 0-1.595-2.321 5.157 5.157 0 0 0-4.031-1.977zM16.605 7.2h5.025a1.38 1.38 0 0 1 0 2.76h-5.025a1.38 1.38 0 0 1 0-2.76z" />
  </svg>
);

const ProfileCard = ({ profile, index }: { profile: Profile; index: number }) => {
  return (
    <motion.div
      className="card-brutal p-6 md:p-8 group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      whileHover={{ x: 4, y: 4 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Number */}
        <motion.div
          className="text-6xl md:text-8xl font-black text-muted-foreground/20 leading-none select-none"
          variants={numberVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
        >
          {profile.index}
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {profile.icon === "github" ? <GitHubIcon /> : <LeetCodeIcon />}
              <div>
                <h3 className="text-2xl md:text-3xl font-black">{profile.title}</h3>
                <p className="text-primary font-bold mt-1">{profile.subtitle}</p>
              </div>
            </div>
            <motion.a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal p-3 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Username */}
          <p className="text-muted-foreground leading-relaxed mb-4">
            @{profile.username}
          </p>

          {/* Heatmap */}
          <div className="border-[3px] border-foreground p-4 mb-6 overflow-x-auto bg-background">
            <img
              src={profile.heatmapUrl}
              alt={`${profile.title} activity heatmap for ${profile.username}`}
              className="w-full min-w-[500px]"
              loading="lazy"
            />
          </div>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profile.stats.map((stat, i) => (
              <motion.span
                key={stat}
                className="badge-brutal bg-background text-xs tracking-wide"
                variants={techVariants}
                custom={i}
                whileHover={{ y: -2 }}
              >
                {stat}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const CodingActivity = () => {
  return (
    <section id="coding-activity" className="py-20 bg-muted">
      <div className="container-page">
        {/* Section Header — same as Projects */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="heading-brutal text-3xl md:text-5xl mb-4"
            variants={headerVariants}
          >
            CODING PROFILES
          </motion.h2>
          <motion.div
            className="w-24 h-[4px] bg-primary origin-left"
            variants={lineVariants}
          />
        </motion.div>

        {/* Profile Cards */}
        <div className="space-y-6">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.index} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingActivity;
