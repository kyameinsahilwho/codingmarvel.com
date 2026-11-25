export type App = {
  slug: string;
  name: string;
  /** Plain-text name for screen readers and structured data, when `name` uses special glyphs. */
  plainName?: string;
  platform: "Web" | "Windows" | "Chrome" | "Skill";
  /** Live site. Null for desktop apps without a website. */
  url: string | null;
  /** GitHub "owner/name". Only set for repos that are public. */
  repo: string | null;
  /** Download page for installers (GitHub Releases). */
  download?: string;
  /** Link to source when it is not a whole repo (a folder in a collection). */
  sourceUrl?: string;
  /** Short status line shown in the details, e.g. a preview release. */
  note?: string;
  /** Credit line for work based on someone else's project. */
  credit?: string;
  /** Shown when an app has neither a site nor a public repo yet. */
  status?: string;
  /** Short pricing note for paid apps. Apps without it are free. */
  price?: { amount: string; currency: string; note: string };
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
    category: "BusinessApplication",
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
      "Pollytasks turns your to-do list into a game. Tasks, daily rituals and notes earn XP, streaks add bonus XP, and you level up as you go. Projects, reminders with browser notifications, a calendar and a Squad tab with challenges and leaderboards keep you consistent alongside friends.",
    features: [
      "XP, levels and streak bonuses",
      "Daily habit and ritual tracker",
      "Projects, reminders and calendar",
      "Squad challenges and leaderboards",
    ],
    stack: ["TanStack Start", "React 19", "Convex"],
    accent: "#4fa516",
    icon: "/icons/pollytasks.png",
    category: "LifestyleApplication",
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
    tagline: "35+ free PDF tools, many fully in your browser",
    description:
      "A free PDF toolkit with more than 35 tools for merging, splitting, compressing, editing, signing, redacting and password-protecting documents. 18 of them, including merge, split and rotate, never upload your file; the rest use a conversion service that deletes its temporary copy right away. A workflow builder chains several steps into one click.",
    features: [
      "Merge, split, compress and rotate",
      "Edit, sign, watermark and redact",
      "Password protect and unlock",
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
    plainName: "X Tracker",
    platform: "Web",
    price: { amount: "3", currency: "USD", note: "Needs a $3/month plan. There is no free tier." },
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
    download: "https://github.com/kyameinsahilwho/platter/releases/latest",
    tagline: "See, clean and tune up your Windows disks",
    description:
      "A native disk utility that scans a 1.8 million file C: drive in about 9 seconds and draws a treemap of what is using the space. It also clears caches and app leftovers, finds duplicates, trims SSDs, defragments hard disks, and shows each disk's health, temperature and wear.",
    features: [
      "Fast parallel scan with a treemap",
      "Deep uninstaller that finds leftovers",
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
    download: "https://github.com/kyameinsahilwho/ReincarnateMax/releases",
    note: "Version 0.1.0 is a preview release. Always recover to a different drive.",
    tagline: "Find, preview and safely restore lost files",
    description:
      "Finds deleted and formatted files on NTFS, FAT and exFAT drives, memory cards and disk images. It rates how intact each file is, lets you preview it first, and copies it to a different drive with checksum verification. It never writes to the drive it is recovering from.",
    features: [
      "Quick scan plus deep carving",
      "Excellent, good or partial rating",
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
    repo: "kyameinsahilwho/egress",
    download: "https://github.com/kyameinsahilwho/egress/releases/latest",
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

  // ---------------------------------------------------- Chrome extensions
  {
    slug: "item-numbers",
    name: "Item Numbers",
    platform: "Chrome",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/cool-chrome-extensions/tree/main/item-numbers",
    tagline: "Number the results, posts and products on any page",
    description:
      "Puts a small number on each repeated item of a page, such as search results, feed posts, product tiles and comment rows, so you always know which one you last looked at. It finds lists on its own and skips menus, nav bars and tag chips.",
    features: [
      "Works on any site, no setup",
      "Alt+Shift+N to toggle per tab",
      "Always-on for chosen sites",
      "Optional numbering of nested replies",
    ],
    stack: ["Manifest V3", "JavaScript"],
    accent: "#4338ca",
    icon: "/icons/ext-item-numbers.png",
    iconFull: true,
    category: "BrowserApplication",
    keywords: ["chrome extension", "number search results"],
  },
  {
    slug: "himekuri-countdown",
    name: "Himekuri Countdown",
    platform: "Chrome",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/cool-chrome-extensions/tree/main/himekuri-countdown",
    tagline: "A flip-calendar countdown on every new tab",
    description:
      "Turns your new tab into big flip-calendar cards counting down to a date you choose, over an animated Japanese ink-wash landscape with drifting sakura. The scene follows your clock, blending from morning to afternoon, evening and night.",
    features: [
      "Days, hours or down to the second",
      "Scene that follows the time of day",
      "Morning, afternoon, evening, night looks",
      "Settings saved in Chrome",
    ],
    stack: ["Manifest V3", "Canvas", "JavaScript"],
    accent: "#4c3a8a",
    icon: "/icons/ext-himekuri-countdown.png",
    iconFull: true,
    category: "BrowserApplication",
    keywords: ["new tab countdown", "chrome new tab"],
  },
  {
    slug: "grok-chat-date-categorizer",
    name: "Grok Chat Date Categorizer",
    platform: "Chrome",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/cool-chrome-extensions/tree/main/grok-chat-date-categorizer",
    tagline: "Group your Grok chat history by day",
    description:
      "Sorts the Grok sidebar into one section per day, like \"20 Mar, Friday (Today)\", while pinned chats stay on top. It matches Grok's own look in light and dark mode and uses Grok's own navigation, so chats open without a page reload.",
    features: [
      "One section per day",
      "Sort by last active or created",
      "Chat counts and quick stats",
      "Native Grok styling",
    ],
    stack: ["Manifest V3", "JavaScript"],
    accent: "#e5484d",
    icon: "/icons/ext-grok-chat-date-categorizer.png",
    iconFull: true,
    category: "BrowserApplication",
    keywords: ["grok extension", "grok chat history"],
  },
  {
    slug: "lexis",
    name: "Lexis",
    platform: "Chrome",
    url: null,
    repo: null,
    status: "Not on GitHub yet",
    tagline: "Better word choices without rewriting your sentence",
    description:
      "A vocabulary helper that keeps your sentence as you wrote it and only suggests stronger alternatives for weak or repeated words. It works in text boxes and editors across the web and is powered by TypeSafe AI's Jev model.",
    features: [
      "Suggestions as you type",
      "Alt+V checks the current sentence",
      "Keeps your structure and voice",
      "Works in most web editors",
    ],
    stack: ["Manifest V3", "JavaScript", "Jev API"],
    accent: "#0f766e",
    icon: "/icons/ext-lexis.svg",
    category: "BrowserApplication",
    keywords: ["vocabulary chrome extension", "word suggestions"],
  },

  // ------------------------------------------------------------- Skills
  {
    slug: "skill-rusty-apps",
    name: "rusty-apps",
    platform: "Skill",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/kyameinsahilwho/tree/main/SSSkills/rusty-apps",
    tagline: "Ship native Windows apps in Rust and Tauri, installer included",
    description:
      "A field-tested playbook for Windows desktop apps in Rust: Tauri v2 with a plain HTML/CSS/JS UI, Win32 through windows-sys, the GNU toolchain without Visual Studio, admin elevation, single instance, fast disk scanning and safe deletion, NSIS installers, and launch benchmarks.",
    features: [
      "Tauri v2 + windows-sys patterns",
      "Builds without Visual Studio",
      "UAC, single instance, NSIS installer",
      "Safe deletion and raw disk reads",
    ],
    stack: ["Claude Code", "Rust", "Tauri v2"],
    accent: "#b7410e",
    icon: "/icons/skill-rusty-apps.svg",
    note: "My own skill, learned building Platter and MAX File Recovery.",
    category: "DeveloperApplication",
    keywords: ["tauri skill", "rust windows app skill"],
  },
  {
    slug: "skill-frontend-design",
    name: "frontend-design",
    platform: "Skill",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/kyameinsahilwho/tree/main/SSSkills/frontend-design",
    tagline: "Distinctive UI design and screenshot-checked UI audits",
    description:
      "A Claude Code skill for building interfaces that don't look templated. It covers type, colour systems, dark mode, layout, component states and UX flows, and audits product UI across 6 categories with screenshot-verified passes until each scores 9.5/10.",
    features: [
      "Aesthetic direction and design tokens",
      "List of common AI-generated UI tells",
      "6-category product UI audit",
      "Detailed ui-craft rule reference",
    ],
    stack: ["Claude Code", "SKILL.md"],
    accent: "#db2777",
    icon: "/icons/skill-frontend-design.svg",
    credit: "Extended from Anthropic's frontend-design skill (Apache 2.0).",
    category: "DeveloperApplication",
    keywords: ["claude code skill", "frontend design skill"],
  },
  {
    slug: "skill-video-editing",
    name: "video-editing",
    platform: "Skill",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/kyameinsahilwho/tree/main/SSSkills/video-editing",
    tagline: "Edit videos by chatting with your agent",
    description:
      "Drop raw footage in a folder and edit it in conversation: transcribe, cut filler words and dead air, colour grade, add animated overlays and burn in subtitles. The agent checks the rendered output at every cut before showing it to you.",
    features: [
      "Removes filler words and pauses",
      "Auto colour grading",
      "Subtitles and animated overlays",
      "Remembers each project",
    ],
    stack: ["Claude Code", "FFmpeg", "Python"],
    accent: "#0d9488",
    icon: "/icons/skill-video-editing.svg",
    credit: "Based on browser-use/video-use (MIT).",
    category: "DeveloperApplication",
    keywords: ["ai video editing skill"],
  },
  {
    slug: "skill-3d-ai-video-edit",
    name: "3d-ai-video-edit",
    platform: "Skill",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/kyameinsahilwho/tree/main/SSSkills/3d-ai-video-edit",
    tagline: "One skill for every kind of video production",
    description:
      "A router skill that sends each video task to the right guide: FFmpeg edits, Remotion and moviepy compositions, Blender 3D shots, screen recordings, AI voiceover, music, clips and images, and cloud GPU rendering.",
    features: [
      "FFmpeg, Remotion and moviepy",
      "Blender 3D shots and idents",
      "AI voice, music, clips and images",
      "Playwright screen recordings",
    ],
    stack: ["Claude Code", "Remotion", "Blender"],
    accent: "#7c3aed",
    icon: "/icons/skill-3d-ai-video-edit.svg",
    credit: "Bundled from digitalsamba/claude-code-video-toolkit.",
    category: "DeveloperApplication",
    keywords: ["remotion skill", "video production skill"],
  },
  {
    slug: "skill-find-skills",
    name: "find-skills",
    platform: "Skill",
    url: null,
    repo: null,
    sourceUrl: "https://github.com/kyameinsahilwho/kyameinsahilwho/tree/main/SSSkills/find-skills",
    tagline: "Find and install the right agent skill for a task",
    description:
      "When you ask how to do something, this skill searches the open agent skills ecosystem with the Skills CLI and helps you install a skill that already does it.",
    features: [
      "Searches the skills ecosystem",
      "Installs with npx skills",
      "Triggers on \"is there a skill for...\"",
    ],
    stack: ["Claude Code", "Skills CLI"],
    accent: "#2563eb",
    icon: "/icons/skill-find-skills.svg",
    credit: "From the open Skills CLI (vercel-labs/skills).",
    category: "DeveloperApplication",
    keywords: ["find agent skills"],
  },
];
