/**
 * Darkens a brand colour just enough for white text on it to pass WCAG AA,
 * keeping its hue. Used for the enamel "key" buttons: this is the flat CSS
 * fallback and the base tone the button shader lights.
 *
 * The shader brightens highlights up to a relative luminance of 0.17
 * (white text >= 4.7:1), so the base sits lower to leave the gloss room.
 */
const toLinear = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toSrgb = (c: number) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);

export function keyColor(hex: string, maxL = 0.115): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const lin = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => toLinear(v / 255));
  const L = 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
  const k = L > maxL ? maxL / L : 1;
  return (
    "#" +
    lin
      .map((v) => Math.round(Math.min(1, Math.max(0, toSrgb(v * k))) * 255))
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("")
  );
}
