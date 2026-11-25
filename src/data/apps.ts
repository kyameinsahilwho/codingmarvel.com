export type App = {
  slug: string;
  name: string;
  platform: "Web" | "Windows";
  /** Live site. Null for desktop apps without a website. */
  url: string | null;
  /** GitHub "owner/name". Only set for repos that are public. */
  repo: string | null;
  /** Shown when an app has neither a site nor a public repo yet. */
  status?: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  /** Brand colour taken from the app itself. */
  accent: string;
  icon: string;
  /** Icon is a full app tile with its own background: fill the frame. */
  iconFull?: boolean;
  category: string;
  keywords: string[];
};

export const apps: App[] = [
  // ---------------------------------------------------------------- Web
  {
    slug: "ehmatrix",
    name: "Ehmatrix",
    platform: "Web",
    url: "https://ehmatrix.codingmarvel.com",
    repo: "kyameinsahilwho/ehmatrix",
    tagline: "Sort your tasks by urgency and importance",
    description:
      "A drag-and-drop Eisenhower matrix. Type tasks into a pool, then drag each one into Do it now, Schedule, Delegate or Eliminate. Finished tasks move to an archive grouped by date, and everything stays in your browser, so there is no account to create.",
    features: [
      "Four colour-coded quadrants",
      "Ctrl+K quick-add to the task pool",
      "Archive by date, with restore",
      "Light and dark themes",
    ],
    stack: ["React 19", "TypeScript", "Vite"],
    accent: "#af52de",
    icon: "/icons/ehmatrix.svg",
    category: "ProductivityApplication",
    keywords: ["eisenhower matrix", "task manager", "priority matrix"],
  },
  {
    slug: "pollytasks",
    name: "Pollytasks",
    platform: "Web",
    url: "https://pollytasks.codingmarvel.com/",
    repo: null,
    tagline: "Tasks and habits that level you up like an RPG",
    description:
      "Pollytasks turns your to-do list into a game. Tasks, daily rituals and notes earn XP, streaks add bonus XP, and you level up as you go. Projects, reminders with push notifications, a calendar and a Squad tab with challenges and leaderboards keep you consistent alongside friends.",
    features: [
      "XP, levels and streak bonuses",
      "Daily habit and ritual tracker",
      "Projects, reminders and calendar",
      "Squad challenges and leaderboards",
    ],
    stack: ["TanStack Start", "React 19", "Convex"],
    accent: "#4fa516",
    icon: "/icons/pollytasks.png",
    category: "ProductivityApplication",
    keywords: ["gamified todo", "habit tracker", "rpg task manager"],
  },
  {
    slug: "habitgrid",
    name: "HabitGrid",
    platform: "Web",
    url: "https://habitgrid.codingmarvel.com",
    repo: "kyameinsahilwho/habit-grid",
    tagline: "Design printable habit tracker sheets",
    description:
      "A designer for paper habit trackers. List your habits with icons, pick a month, a few weeks or a custom date range, then style the grid with fonts, checkbox shapes and colour themes. Export a print-ready A4 or US Letter PDF, or start from one of 18 templates such as 75 Hard.",
    features: [
      "Month, week or date-range grids",
      "7 colour themes plus custom palettes",
      "A4 and US Letter PDF export",
      "18 starter templates",
    ],
    stack: ["React 19", "TanStack Start", "Tailwind CSS"],
    accent: "#f97316",
    icon: "/icons/habitgrid.svg",
    category: "LifestyleApplication",
    keywords: ["habit tracker", "printable habit sheet", "habit grid pdf"],
  },
  {
    slug: "love-for-pdf",
    name: "Love for PDF",
    platform: "Web",
    url: "https://pdf.codingmarvel.com/",
    repo: "kyameinsahilwho/pdf-cm",
    tagline: "35+ free PDF tools that run in your browser",
    description:
      "A free, privacy-first PDF toolkit with more than 35 tools for merging, splitting, compressing, editing, signing, redacting and password-protecting documents. Most of them run locally in your browser, so your files are not stored on a server, and a workflow builder chains several steps into one click.",
    features: [
      "Merge, split, compress and rotate",
      "Edit, sign, watermark and redact",
      "AES-256 protect and unlock",
      "Convert to and from Word, Excel, JPG",
    ],
    stack: ["React", "pdf-lib", "Python"],
    accent: "#e11d48",
    icon: "/icons/love-for-pdf.svg",
    category: "UtilitiesApplication",
    keywords: ["pdf merge", "pdf compress", "pdf tools", "pdf editor"],
  },
  {
    slug: "video-grid-maker",
    name: "Video Grid Maker",
    platform: "Web",
    url: "https://video-grid-maker.codingmarvel.com",
    repo: "kyameinsahilwho/vid-grid-maker",
    tagline: "Turn any video into a timestamped contact sheet",
    description:
      "Drop in a video and it pulls frames at a fixed interval or a set count, then lays them out as one grid image with a timestamp on each tile. Choose the columns and thumbnail width, preview it, and download a full-quality JPEG. The video never leaves your device.",
    features: [
      "Frames by interval or by count",
      "Timestamp on every thumbnail",
      "Adjustable columns and width",
      "Processed locally, no uploads",
    ],
    stack: ["React", "TypeScript", "Vite"],
    accent: "#656ad5",
    icon: "/icons/video-grid-maker.png",
    iconFull: true,
    category: "MultimediaApplication",
    keywords: ["video thumbnail grid", "video contact sheet", "frame extractor"],
  },
  {
    slug: "x-tracker",
    name: "𝕏-tracker",
    platform: "Web",
    url: "https://x-tracker.codingmarvel.com/",
    repo: null,
    tagline: "Hit 100 posts and replies on X every day",
    description:
      "Counts your posts and replies on X against a daily goal and tells you how many you still need before midnight. It syncs your history once, then only fetches what is new. Daily, weekly and hourly views show your streak, your pace, and who you reply to most.",
    features: [
      "Daily goal ring for posts and replies",
      "Calendar heatmap and hourly strip",
      "Streaks, hit rate and pace",
      "Top reply partners",
    ],
    stack: ["TanStack Start", "React 19", "Convex"],
    accent: "#0ea5e9",
    icon: "/icons/x-tracker.svg",
    category: "SocialNetworkingApplication",
    keywords: ["x tracker", "twitter post tracker", "x reply counter"],
  },
  {
    slug: "young-again",
    name: "Young Again",
    platform: "Web",
    url: "https://youngagain.codingmarvel.com/",
    repo: null,
    tagline: "An age-gated 18+ gallery of 4K art",
    description:
      "A curated 18+ gallery of 4K still art: anime softcore, realistic boudoir, lingerie, bedroom, neo-noir and landscape mood pieces. Browse by style, scene and look with filters, open any image in a fullscreen viewer, and keep a private favourites list.",
    features: [
      "Age gate before any content",
      "Filters by style, scene and look",
      "Masonry grid with 4K viewer",
      "Favourites saved on your device",
    ],
    stack: ["React 19", "TanStack Router", "Supabase"],
    accent: "#c8102e",
    icon: "/icons/young-again.svg",
    iconFull: true,
    category: "EntertainmentApplication",
    keywords: ["4k art gallery"],
  },

  // ------------------------------------------------------------ Windows
  {
    slug: "platter",
    name: "Platter",
    platform: "Windows",
    url: null,
    repo: "kyameinsahilwho/platter",
    tagline: "See, clean and tune up your Windows disks",
    description:
      "A native disk utility that scans a 1.8 million file C: drive in about 9 seconds and draws a treemap of what is using the space. It also clears caches and app leftovers, finds duplicates, trims SSDs, defragments hard disks, and shows each disk's health, temperature and wear.",
    features: [
      "Fast parallel scan with a treemap",
      "Clean-up of caches and leftovers",
      "Duplicate and similar photo finder",
      "SSD trim, HDD defrag, NTFS map",
    ],
    stack: ["Rust", "Tauri v2", "Win32"],
    accent: "#14624f",
    icon: "/icons/platter.png",
    iconFull: true,
    category: "UtilitiesApplication",
    keywords: ["disk space analyzer", "windows disk cleanup", "treemap"],
  },
  {
    slug: "max-file-recovery",
    name: "MAX File Recovery",
    platform: "Windows",
    url: null,
    repo: "kyameinsahilwho/ReincarnateMax",
    tagline: "Find, preview and safely restore lost files",
    description:
      "Finds deleted and formatted files on NTFS, FAT and exFAT drives, memory cards and disk images. It rates how intact each file is, lets you preview it first, and copies it to a different drive with checksum verification. It never writes to the drive it is recovering from.",
    features: [
      "Quick scan plus deep carving",
      "Intact, good or partial rating",
      "Preview photos, video, PDF, Office",
      "Pause and resume long scans",
    ],
    stack: ["Rust", "Tauri v2", "SQLite"],
    accent: "#5b3fd0",
    icon: "/icons/max-file-recovery.png",
    iconFull: true,
    category: "UtilitiesApplication",
    keywords: ["file recovery", "undelete", "data recovery windows"],
  },
  {
    slug: "egress",
    name: "Egress",
    platform: "Windows",
    url: null,
    repo: null,
    status: "Coming soon",
    tagline: "See where the traffic leaving your PC goes",
    description:
      "Puts your PC at the centre of a live world map and draws every connection as a route to the city, company and app behind it. It flags trackers, telemetry and unencrypted traffic, shows what plain-text requests actually sent, and keeps a 7-day log. Lookups use an offline database, so nothing leaves your machine.",
    features: [
      "Live map centred on your PC",
      "By place, company and app",
      "Tracker and telemetry tags",
      "7-day local log with CSV export",
    ],
    stack: ["Rust", "Tauri v2", "ETW"],
    accent: "#b0187c",
    icon: "/icons/egress.png",
    iconFull: true,
    category: "SecurityApplication",
    keywords: ["network monitor", "connection map", "tracker detector"],
  },
];
