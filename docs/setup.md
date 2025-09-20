# Setup

## Requisitos
- Node 20 LTS, pnpm 9
- OBS Studio com **obs-websocket** ativo (porta e password)

## Instalação
```bash
pnpm install
cp .env.example .env
pnpm dev
# Health check: http://localhost:4310/health
```

## Variáveis de ambiente
- `PORT` (default: 4310)
- `SOCKET_PATH` (default: /ws)
- `OBS_URL` (ex.: `ws://localhost:4455`)
- `OBS_PASSWORD` (se definido no OBS)

## Ligação ao OBS
O agent tenta ligar-se automaticamente e volta a tentar a cada 5s se falhar.