export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/(app)": [6,[2],[3]],
		"/(app)/-faq": [7,[2],[3]],
		"/(archives)/2023": [15,[4],[5]],
		"/(archives)/2023/committees": [16,[4],[5]],
		"/(archives)/2023/conference-schedule": [17,[4],[5]],
		"/(archives)/2023/guidebooks": [18,[4],[5]],
		"/(app)/404": [8,[2],[3]],
		"/(app)/about-us": [9,[2],[3]],
		"/(app)/archives": [10,[2],[3]],
		"/(app)/committees": [11,[2],[3]],
		"/(app)/conference-schedule": [12,[2],[3]],
		"/(app)/guidebooks": [13,[2],[3]],
		"/(app)/organizers": [14,[2],[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';