# Métricas

## OBS
- `fps`
- `droppedFrames`
- `outputActive`
- `baseWidth` / `baseHeight`
- `outputWidth` / `outputHeight`
- `bitrateKbps` *(estimado até integrarmos contadores/`GetOutputStats`)*

## Sistema
- `cpuLoad` (0..100%)
- `memUsedPct` (0..100%)

## Contrato (TypeScript)
```ts
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
    bitrateKbps?: number;
  };
  system: {
    cpuLoad?: number;
    memUsedPct?: number;
  };
  alerts: string[];
};
```