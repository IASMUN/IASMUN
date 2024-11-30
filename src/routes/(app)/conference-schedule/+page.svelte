<script>
	import Saos from 'saos';
	let days = [
		{
			day: 'Friday',
			date: '(JANUARY 17TH 2025)',
			timing: [
				{ start: '1:30pm', end: '3:00pm', desc: 'Arrival and Registration' },
				{ start: '3:00pm', end: '5:00pm', desc: 'Opening Ceremony' },
				{ start: '5:00pm', end: '5:30pm', desc: 'Short Break' },
				{ start: '5:30pm', end: '7:30pm', desc: 'First Committee Session' }
			]
		},
		{
			day: 'Saturday',
			date: '(JANUARY 18th 2025)',
			timing: [
				{ start: '9:20am', end: '10:00am', desc: 'Arrival' },
				{ start: '10:00am', end: '12:30pm', desc: 'Second Committee Session' },
				{ start: '12:30pm', end: '2:00pm', desc: 'Break(Snack Included)' },
				{ start: '2:00pm', end: '4:00pm', desc: 'Third Committee Session' },
				{ start: '4:00pm', end: '5:00pm', desc: 'Break(Snack Included)' },
				{ start: '5:00pm', end: '6:30pm', desc: 'Fourth Committee Session' },
				{ start: '6:30pm', end: '7:00pm', desc: 'Break' },
				{ start: '7:00pm', end: '9:00pm', desc: 'Social Night' }
			]
		},
		{
			day: 'Sunday',
			date: '(JANUARY 19th 2025)',
			timing: [
				{ start: '9:20am', end: '10:00am', desc: 'Arrival' },
				{ start: '10:00am', end: '12:30pm', desc: 'Fifth Committee Session' },
				{ start: '12:30pm', end: '2:00pm', desc: 'Break(Snack Included)' },
				{ start: '2:00pm', end: '4:30pm', desc: 'Sixth Committee Session' },
				{ start: '4:30pm', end: '5:00pm', desc: 'Break(Snack Included)' },
				{ start: '5:00pm', end: '7:00pm', desc: 'Gala Dinner' },
				{ start: '7:00pm', end: '8:30pm', desc: 'Closing Ceremony' }
			]
		}
	];
</script>

<svelte:head>
	<title>Conference Schedule</title>

	<meta name="description" content="The Conference Schedule for The Event of IASMUN" />
</svelte:head>

<div class="main">
	<Saos once={true} animation="slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
		<h1 class="header">Conference Schedule</h1>
	</Saos>

	<div class="timings">
		{#each days as day}
			<div class={`container ${day.day}`}>
				<h1 class="timing-header">{day.day}</h1>
				<h2 class="timing-header">{day.date}</h2>

				<hr class="line" />

				{#each day.timing as timing}
					<p class="timing">{timing.start} - {timing.end}</p>
					<p class="timing-desc">{timing.desc}</p>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	* {
		font-family: 'Open Sans', sans-serif;
		text-align: center;
	}

	.main {
		background-color: var(--dark-grey);
		padding-top: 32px;
	}

	h1 {
		font-family: 'Alfa Slab One', sans-serif;
		letter-spacing: 0.04cm;
		margin-bottom: 0;
	}
	.header {
		font-size: 48px;
		color: black;
	}
	h2 {
		margin-top: 0;
	}
	.line {
		border-bottom: 2px solid white;
	}
	.timing-header {
		color: var(--teal);
	}
	.header {
		color: black;
		font-weight: 400;
		text-align: center;
		margin: 0 0 40px 0;
	}
	.container {
		height: 100%;
		width: 100%;
		border-collapse: collapse;
		border: 2px solid white;
		border-bottom: none;
	}
	.container:first-child {
		border-left: none;
		border-right: 1px;
	}
	.container:last-child {
		border-right: none;
		border-left: 1px;
	}
	.timings {
		width: 100vw;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
		padding-bottom: 18px;
	}
	.timing {
		font-weight: 700;
		margin-bottom: 0;
		margin-top: 12px;
		font-size: 20px;
	}
	.timing-desc {
		margin-top: 0;
		margin-bottom: 22px;
		font-size: 18px;
		font-style: italic;
	}

	@media screen and (max-width: 790px) {
		.timings {
			grid-template-columns: 1fr;
		}
		.header {
			font-size: 40px;
		}
	}

	@keyframes -global-slide-bottom {
		0% {
			-webkit-transform: translateY(-50px);
			transform: translateY(-50px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}
</style>
