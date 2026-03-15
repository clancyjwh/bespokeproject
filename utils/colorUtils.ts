export function getScoreColor(score: number): string {
  const normalized = Math.max(-10, Math.min(10, score));

  if (normalized <= -8) {
    return '#dc2626';
  } else if (normalized <= -6) {
    const t = (normalized + 8) / 2;
    return interpolateColor('#dc2626', '#f97316', t);
  } else if (normalized <= -4) {
    const t = (normalized + 6) / 2;
    return interpolateColor('#f97316', '#fb923c', t);
  } else if (normalized < 0) {
    const t = (normalized + 4) / 4;
    return interpolateColor('#fb923c', '#fbbf24', t);
  } else if (normalized === 0) {
    return '#fbbf24';
  } else if (normalized <= 2) {
    const t = normalized / 2;
    return interpolateColor('#fbbf24', '#a3e635', t);
  } else if (normalized <= 4) {
    const t = (normalized - 2) / 2;
    return interpolateColor('#a3e635', '#4ade80', t);
  } else if (normalized <= 6) {
    const t = (normalized - 4) / 2;
    return interpolateColor('#4ade80', '#22c55e', t);
  } else {
    const t = (normalized - 6) / 4;
    return interpolateColor('#22c55e', '#16a34a', t);
  }
}

function interpolateColor(color1: string, color2: string, t: number): string {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);

  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);

  return `rgb(${r}, ${g}, ${b})`;
}
