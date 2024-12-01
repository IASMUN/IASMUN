export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "iasmun/_app",
	assets: new Set(["favicon.png","images/School.webp","robots.txt","uploads/2023/handbooks/Delegate Handbook.pdf","uploads/2023/handbooks/DISEC_Handbook.pdf","uploads/2023/handbooks/GA_Handbook.pdf","uploads/2023/handbooks/UNODC_Handbook.pdf","uploads/2023/handbooks/WHO_Handbook.pdf","uploads/background-guides/AL (EN).pdf","uploads/background-guides/GA1.pdf","uploads/background-guides/GA2.pdf","uploads/background-guides/GA3.pdf","uploads/background-guides/GA4.pdf","uploads/background-guides/GA5.pdf","uploads/background-guides/UNICEF.pdf","uploads/background-guides/UNODC.pdf","uploads/background-guides/WHO.pdf","uploads/Country Matrix.pdf","uploads/Delegate Handbook.pdf"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.D9ko0zKe.js","app":"_app/immutable/entry/app.CpDl2_Dv.js","imports":["_app/immutable/entry/start.D9ko0zKe.js","_app/immutable/chunks/entry.Wsgl4pJh.js","_app/immutable/chunks/runtime.CXT-fXB9.js","_app/immutable/chunks/paths.B2pLus9_.js","_app/immutable/entry/app.CpDl2_Dv.js","_app/immutable/chunks/runtime.CXT-fXB9.js","_app/immutable/chunks/render.-2s46nm3.js","_app/immutable/chunks/svelte-head.DfxE-u6k.js","_app/immutable/chunks/disclose-version.G4PFMibw.js","_app/immutable/chunks/if.CxVs1ijJ.js","_app/immutable/chunks/index-client.lwoJpquq.js","_app/immutable/chunks/store.zl8Oplgo.js","_app/immutable/chunks/this.C1TOeErT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
