export type AppMode = 'flower_demo';

/** This repo is the generic operations demo only. */
export function getAppMode(): AppMode {
  return 'flower_demo';
}

export function isFlowerDemoMode(): boolean {
  return true;
}
