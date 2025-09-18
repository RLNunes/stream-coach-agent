export type MetricSnapshot = {
  ts: number;
  obs: {
    fps?: number;
    droppedFrames?: number;
    outputActive?: boolean;
    baseWidth?: number;
    baseHeight?: number;
    outputWidth?: number;
    outputHeight?: number;
    bitrateKbps?: number; // estimado
  };
  system: {
    cpuLoad?: number; // 0..100
    gpuLoad?: number; // 0..100 (best-effort)
    memUsedPct?: number; // 0..100
    netUpMbps?: number; // best-effort
  };
  alerts: string[];
};