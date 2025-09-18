import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { connectOBS, getObsMetrics } from './obs.js';
import { getSystemMetrics } from './system.js';
import { evaluate } from './evaluate.js';
import type { MetricSnapshot } from './types.js';

const PORT = Number(process.env.PORT || 4310);
const SOCKET_PATH = process.env.SOCKET_PATH || '/ws';
const OBS_URL = process.env.OBS_URL || 'ws://localhost:4455';
const OBS_PASSWORD = process.env.OBS_PASSWORD || '';

async function main() {
  const app = express();
  const http = createServer(app);
  const io = new Server(http, { path: SOCKET_PATH, cors: { origin: '*' } });

  app.get('/health', (_req, res) => res.json({ ok: true }));

  let obs: any;
  try {
    obs = await connectOBS(OBS_URL, OBS_PASSWORD);
    console.log('[agent] Ligado ao OBS:', OBS_URL);
  } catch (e) {
    console.warn('[agent] Falha ao ligar ao OBS. Vai tentando reconectar...');
    setInterval(async () => {
      try { obs = await connectOBS(OBS_URL, OBS_PASSWORD); console.log('[agent] Conectado.'); } catch {}
    }, 5000);
  }

  setInterval(async () => {
    const now = Date.now();
    const obsMetrics = obs ? await getObsMetrics(obs) : {};
    const sys = await getSystemMetrics();

    // TODO: estimar bitrateKbps via contadores OBS/RTMP (placeholder até integrarmos GetOutputStats)
    const snapshot: MetricSnapshot = { ts: now, obs: { ...obsMetrics, bitrateKbps: obsMetrics.outputActive ? 6000 : undefined }, system: sys, alerts: [] };
    snapshot.alerts = evaluate(snapshot);

    io.emit('metrics', snapshot);
  }, 1000);

  http.listen(PORT, () => {
    console.log(`[agent] a correr em http://localhost:${PORT}  ws path: ${SOCKET_PATH}`);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});