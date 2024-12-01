

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B7Futh6h.js","_app/immutable/chunks/disclose-version.G4PFMibw.js","_app/immutable/chunks/runtime.CXT-fXB9.js"];
export const stylesheets = [];
export const fonts = [];
