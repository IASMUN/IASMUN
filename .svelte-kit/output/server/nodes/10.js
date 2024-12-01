

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/archives/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.964g7w2g.js","_app/immutable/chunks/disclose-version.G4PFMibw.js","_app/immutable/chunks/runtime.CXT-fXB9.js","_app/immutable/chunks/legacy.C5YKCa2r.js","_app/immutable/chunks/svelte-head.DfxE-u6k.js"];
export const stylesheets = ["_app/immutable/assets/10.CCxaQ02k.css"];
export const fonts = [];
