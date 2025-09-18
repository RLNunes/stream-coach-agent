#!/usr/bin/env bash
set -euo pipefail
if [[ $# -lt 1 ]]; then
  echo "Uso: $0 your-org/REPO_NAME"
  exit 1
fi
REPO="$1"
gh issue create -R "$REPO" -t "chore: inicializar repositório e CI" -b "Configurar CI, lint e build" -l "chore,CI"
gh issue create -R "$REPO" -t "feat: ligação ao OBS WebSocket" -b "Conectar ao OBS e obter stats básicos" -l "feat"
gh issue create -R "$REPO" -t "feat: métricas do sistema" -b "CPU, RAM (systeminformation)" -l "feat"
gh issue create -R "$REPO" -t "feat: regras de qualidade" -b "Regras JSON + emissão de alertas" -l "feat"
gh issue create -R "$REPO" -t "docs: README" -b "Instruções de desenvolvimento e execução" -l "docs"
echo "Issues criadas em $REPO"