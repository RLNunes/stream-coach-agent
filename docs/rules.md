# Regras de Qualidade

As regras vivem em `src/rules.json` e são fáceis de ajustar.

## Presets incluídos (MVP)
- **1080p60** → `minBitrateKbps: 6000`, `maxDropPct: 2`, `maxCpuPct: 85`
- **720p60** → `minBitrateKbps: 3500`, `maxDropPct: 2`, `maxCpuPct: 85`
- **1080p30** → `minBitrateKbps: 4500`, `maxDropPct: 2`, `maxCpuPct: 85`

## Janela de estabilidade
`stabilityWindowSec: 20` — tempo antes de emitir alerta.

## Mensagens de alerta (exemplos)
- `Bitrate 4200 kbps abaixo do recomendado para 1080p60 (6000 kbps).`
- `CPU acima de 85% (atual: 91%).`
- `Frames dropados detectados (123).`