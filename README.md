[![Docs](https://img.shields.io/badge/Docs-Live-2ea44f)](https://rlnunes.github.io/stream-coach-agent/)

# Stream Coach — Agent

Agente local que recolhe métricas do OBS via WebSocket e expõe-as em tempo real para o dashboard.

## Principais responsabilidades
- Ligar ao **OBS WebSocket** (obs-websocket-js)
- Normalizar métricas: bitrate, fps, dropped frames, CPU/GPU, resolução, fps
- Avaliar regras locais (JSON) e emitir alertas
- Expor endpoint WebSocket/HTTP para o dashboard

## Requisitos
- Node 20 LTS
- pnpm 9 (ou npm/yarn)
- OBS Studio com **obs-websocket** ativo (porta e password)

## Setup rápido
```bash
pnpm i
cp .env.example .env
pnpm dev
```
Por omissão o agente corre em `http://localhost:4310` e o WebSocket em `ws://localhost:4310/ws`.

## Scripts
- `pnpm dev` — modo desenvolvimento (ts-node-dev)
- `pnpm build` — compila para `dist/`
- `pnpm start` — corre build

## Segurança
- Nunca envia credenciais para fora da máquina sem consentimento.
- Telemetria/desligado por padrão.

## Roadmap curto
- [ ] Persistência leve (SQLite) por sessão
- [ ] Export de relatório JSON/PDF
- [ ] Autenticação para dashboard