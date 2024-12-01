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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/-faq",
				pattern: /^\/-faq\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(archives)/2023",
				pattern: /^\/2023\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(archives)/2023/committees",
				pattern: /^\/2023\/committees\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(archives)/2023/conference-schedule",
				pattern: /^\/2023\/conference-schedule\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(archives)/2023/guidebooks",
				pattern: /^\/2023\/guidebooks\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/archives",
				pattern: /^\/archives\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/committees",
				pattern: /^\/committees\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/conference-schedule",
				pattern: /^\/conference-schedule\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/guidebooks",
				pattern: /^\/guidebooks\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/organizers",
				pattern: /^\/organizers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
