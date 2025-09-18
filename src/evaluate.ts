import rules from './rules.json' assert { type: 'json' };
import type { MetricSnapshot } from './types.js';

export function evaluate(snapshot: MetricSnapshot): string[] {
  const preset = rules.presets[rules.defaultPreset];
  const alerts: string[] = [];
  const b = snapshot.obs.bitrateKbps ?? 0;
  const cpu = snapshot.system.cpuLoad ?? 0;
  const drops = snapshot.obs.droppedFrames ?? 0;

  if (b && b < preset.minBitrateKbps) {
    alerts.push(`Bitrate ${b} kbps abaixo do recomendado para ${rules.defaultPreset} (${preset.minBitrateKbps} kbps).`);
  }
  if (cpu > preset.maxCpuPct) {
    alerts.push(`CPU acima de ${preset.maxCpuPct}% (atual: ${cpu.toFixed(0)}%).`);
  }
  if ((drops ?? 0) > 0) {
    alerts.push(`Frames dropados detectados (${drops}).`);
  }
  return alerts;
}