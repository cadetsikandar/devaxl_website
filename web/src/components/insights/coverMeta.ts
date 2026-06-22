import {
  Activity,
  Boxes,
  Flag,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  Network,
  ShieldCheck,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CoverMeta = { icon: LucideIcon; tint: string };

/**
 * Per-category cover identity — a glyph and an "r, g, b" tint. Shared by the
 * article card, the article hero, and in-body figures so a piece reads as one
 * coherent visual set instead of three unrelated treatments.
 */
export const CATEGORY_COVER: Record<string, CoverMeta> = {
  Engineering: { icon: Terminal, tint: "255, 182, 0" }, // brand amber
  Architecture: { icon: Network, tint: "76, 141, 245" }, // blue
  Team: { icon: Users, tint: "63, 185, 105" }, // green
};

export const DEFAULT_COVER: CoverMeta = { icon: Terminal, tint: "255, 182, 0" };

export function coverFor(category: string): CoverMeta {
  return CATEGORY_COVER[category] ?? DEFAULT_COVER;
}

/** Glyphs selectable from a `figure` block via its `icon` field. */
export const FIGURE_ICONS: Record<string, LucideIcon> = {
  gauge: Gauge,
  "git-branch": GitBranch,
  layers: Layers,
  shield: ShieldCheck,
  activity: Activity,
  flag: Flag,
  boxes: Boxes,
  workflow: Workflow,
  chart: LineChart,
  users: Users,
  terminal: Terminal,
  network: Network,
};
