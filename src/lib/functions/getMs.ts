export const getMs = (): {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
} => {
	let difference = new Date('January 17, 2025, 13:30:00').getTime() - new Date().getTime();

	if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

	let seconds = difference / 1000;
	let minutes = seconds / 60;
	let hours = minutes / 60;
	let days = hours / 24;

	return {
		days: Math.floor(days),
		hours: Math.floor(hours % 24),
		minutes: Math.floor(minutes % 60),
		seconds: Math.floor(seconds % 60)
	};
};
