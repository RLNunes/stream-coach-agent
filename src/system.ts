import si from 'systeminformation';

export async function getSystemMetrics() {
  const [cpu, mem] = await Promise.all([si.currentLoad(), si.mem()]);
  return {
    cpuLoad: cpu.currentLoad,
    memUsedPct: (mem.active / mem.total) * 100
  };
}