import type { APIRoute } from "astro";
import { apps, type App } from "../data/apps";

// llms.txt (https://llmstxt.org): a plain-text map of the site for AI answer engines.
const groups: { platform: App["platform"]; title: string }[] = [
  { platform: "Web", title: "Web apps (run in the browser)" },
  { platform: "Windows", title: "Windows apps (native, Rust + Tauri v2)" },
  { platform: "Chrome", title: "Chrome extensions" },
  { platform: "Skill", title: "Claude Code agent skills" },
];

function link(a: App) {
  return a.url ?? a.sourceUrl ?? (a.repo ? `https://github.com/${a.repo}` : null);
}

export const GET: APIRoute = () => {
  const lines = [
    "# CodingMarvel",
    "",
    "> CodingMarvel (codingmarvel.com) is a directory of tools built by one developer: browser apps for tasks, habits, PDFs and video, native Windows utilities written in Rust, Chrome extensions and Claude Code agent skills.",
    "",
  ];
  for (const g of groups) {
    lines.push(`## ${g.title}`, "");
    for (const a of apps.filter((x) => x.platform === g.platform)) {
      const name = a.plainName ?? a.name;
      const url = link(a);
      const price = a.price ? ` Paid: ${a.price.note}.` : "";
      const status = !url ? ` (${a.status ?? "coming soon"})` : "";
      lines.push(`- ${url ? `[${name}](${url})` : name}${status}: ${a.tagline}. ${a.description}${price}`);
    }
    lines.push("");
  }
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
