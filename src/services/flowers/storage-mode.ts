export type FlowerStorageMode = 'auto' | 'local' | 'supabase';

/** This demo keeps every order, stock row, and login in browser localStorage. */
export function getFlowerStorageMode(): FlowerStorageMode {
  return 'local';
}

export function shouldUseFlowerSupabase(_mode?: FlowerStorageMode): boolean {
  return false;
}
