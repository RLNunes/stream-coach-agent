# MVP Board — Backlog (copy & use `gh` CLI to seed)

## Columns
- **Backlog**
- **In Progress**
- **Review**
- **Done**

## Issues sugeridas

### 1. Infraestrutura & Setup
- chore: inicializar repositório e CI
- chore: configurar EditorConfig, ESLint/Prettier
- docs: README com instruções de desenvolvimento

### 2. Funcionalidades (MVP)
- feat: ligação ao OBS WebSocket (reconexão automática)
- feat: recolha de métricas base (fps, dropped frames, resolução)
- feat: recolha de métricas do sistema (CPU, RAM)
- feat: canal WebSocket para expor métricas
- feat: avaliação de regras de qualidade (JSON) + alertas
- feat: dashboard com cards e semáforo (verde/amarelo/vermelho)

### 3. Qualidade
- test: smoke tests e validação de tipos (TS)
- chore: scripts npm para dev/build/lint
- chore: template de PR + labels automáticas

### 4. Relatórios
- feat: guardar histórico em ficheiro local (JSON/SQLite)
- feat: exportar relatório simples após sessão

## Como criar issues via GitHub CLI
1) Instalar: https://cli.github.com/
2) Autenticar: `gh auth login`
3) Criar issues (exemplos abaixo) e um Project (classic ou v2) manualmente.

```bash
# Ajusta o REPO (org/nome) antes de correr
REPO="your-org/REPO_NAME"

gh issue create -R "$REPO" -t "chore: inicializar repositório e CI" -b "Configurar CI, lint e build" -l "chore,CI"
gh issue create -R "$REPO" -t "feat: ligação ao OBS WebSocket" -b "Conectar ao OBS e obter stats básicos" -l "feat"
gh issue create -R "$REPO" -t "feat: métricas do sistema" -b "CPU, RAM (systeminformation)" -l "feat"
gh issue create -R "$REPO" -t "feat: regras de qualidade" -b "Regras JSON + emissão de alertas" -l "feat"
gh issue create -R "$REPO" -t "docs: README" -b "Instruções de desenvolvimento e execução" -l "docs"
```