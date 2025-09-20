# Troubleshooting

## Agent não liga ao OBS
- Verifica `OBS_URL` e `OBS_PASSWORD` no `.env`.
- Confirma que o plugin **obs-websocket** está ativo e a porta está correta.

## Bitrate `undefined`
- No MVP é estimado. A integração com contadores/`GetOutputStats` virá numa próxima iteração.

## WebSocket não recebe métricas
- Garantir que o agent está a correr e que o dashboard usa o `SOCKET_PATH` correto (`/ws`).