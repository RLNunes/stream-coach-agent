import OBSWebSocket from 'obs-websocket-js';

export async function connectOBS(url: string, password?: string) {
  const obs = new OBSWebSocket();
  await obs.connect(url, password);
  return obs;
}

export async function getObsMetrics(obs: any) {
  try {
    const stats = await obs.call('GetStats');
    const video = await obs.call('GetVideoSettings');
    return {
      fps: stats.averageFrameRenderTime ? 1000 / stats.averageFrameRenderTime : undefined,
      droppedFrames: stats.outputSkippedFrames,
      outputActive: stats.outputActive,
      baseWidth: video.baseWidth,
      baseHeight: video.baseHeight,
      outputWidth: video.outputWidth,
      outputHeight: video.outputHeight
    };
  } catch {
    return {};
  }
}