<script lang="ts">
	import IASMun from '$lib/assets/logos/IASMUN.webp';
	import IAS from '$lib/assets/images/School.webp';

	import { fly } from 'svelte/transition';

	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	import SecretaryGeneral from '$lib/assets/organizers/Aya Bawaba.webp';
	import DeputySecretaryGeneral from '$lib/assets/organizers/Yousef Naser.webp';

	import Saos from 'saos';
	import Countdown from '$lib/components/Countdown.svelte';

	import { getMs } from '$lib/functions/getMs';

	let showCountdown = true;

	const countdownOver = () =>
		countdown.days === 0 &&
		countdown.hours === 0 &&
		countdown.minutes === 0 &&
		countdown.seconds === 0;

	let countdown = getMs();
	if (countdownOver()) showCountdown = false;

	$: if ($navigating) {
		if ($navigating.to?.url.pathname !== '/') {
			clearInterval(interval);
		}
	}

	let ready = false;
	let interval: number;

	onMount(() => {
		interval = setInterval(() => {
			countdown = getMs();

			if (countdownOver()) {
				showCountdown = false;
				clearInterval(interval);
			}
		}, 1000);

		ready = true;
		width = window.innerWidth;
	});

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<svelte:head>
	<title>IASMUN24 Home Page</title>

	<meta name="description" content="The Official Website for IASMUN 2024!" />
</svelte:head>

{#if showCountdown}
	<div class="countdown">
		<p>IASMUN 2024 Countdown</p>
		<Countdown {countdown} />
	</div>
{/if}

<div class="intro" style={`background-image: url(${IAS}); overflow-y: hidden;`}>
	{#if ready}
		<img in:fly={{ y: 300, duration: 1800 }} class="IASMUN-pic" src={IASMun} alt="IASMUN" />
	{/if}
</div>

<div class="letters">
	<div class="container sg">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Secretary General's<br /><span class="welcome">Welcome</span></h1>
		</Saos>

		<div class="content">
			<div class="text">
				<Saos once={true} animation="fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
					<p>
						Dear Esteemed Delegates, Advisors and Distinguished Guests,
						<br /><br />
						It is with immense pleasure and anticipation that I extend a warm welcome to you all to the
						International Academic School Model United Nations 2024! As the Secretary-General of IASMUN,
						I am honored to be part of this prestigious event, and I look forward to an enriching and
						engaging experience for each and every participant.
						<br /><br />

						This year's conference is not just about simulation; it's about fostering collaboration,
						embracing diversity, and cultivating the spirit of diplomacy. As delegates, you play a
						crucial role in this endeavor. Your passion, intellect, and commitment to diplomacy are
						the driving forces behind the success of IASMUN.
						<br /><br />

						Our dedicated team has worked tirelessly to ensure that this conference surpasses
						expectations. From thought-provoking committees to expertly crafted agendas, we aim to
						provide an environment that encourages intellectual growth, cultural exchange, and
						lasting friendships.
						<br /><br />

						Whether you are a seasoned delegate or a first-time participant, IASMUN 2024 is your
						stage to shine. Seize the opportunity to engage in constructive dialogue, showcase your
						diplomatic skills, and contribute to the resolutions that will shape the future of our
						global community.
						<br /><br />

						I extend my best wishes to each of you as you embark on this MUN journey. May your
						experiences be enlightening, your debates impactful, and your connections enduring.
						<br /><br />

						Looking forward to meeting you all and witnessing the remarkable contributions you will
						undoubtedly bring to IASMUN 2024!
						<br /><br />

						Warmest Regards,
						<br />
						Aya Bawaba
						<br />
						IASMUN'24 Secretary-General
					</p>
				</Saos>
			</div>

			<Saos once={true} animation="slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
				<img src={SecretaryGeneral} alt="Secretary General" />
			</Saos>
		</div>
	</div>

	<div class="container deputy-sg">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Deputy Secretary General's<br /><span class="welcome">Welcome</span></h1>
		</Saos>

		<div class="content">
			<Saos once={true} animation="slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
				<img src={DeputySecretaryGeneral} alt="Deputy Secretary General" />
			</Saos>

			<div class="text">
				<Saos once={true} animation="fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
					<p>
						Hello there,
						<br /><br />

						I am Yousef Naser, the Deputy Secretary-General, extending a warm welcome to the
						International Academic School Model United Nations 2024!
						<br /><br />

						In my role, I ensure proper procedures are taken and support fellow organizers. Wherever
						and whenever challenges arise, I am committed to helping. I want to express gratitude
						and respect to each member, delegate, and advisor—your hard work has brought us to this
						point. IASMUN is driven by ambitious individuals dedicated to its goals.
						<br /><br />

						As Deputy Secretary-General, I am proud to be part of IASMUN and ready to assist with
						any issues. Thank you for being here, and I look forward to a successful IASMUN 2024.
						<br /><br />

						Best regards,
						<br /><br />

						Yousef Naser
						<br />
						Deputy Secretary-General
					</p>
				</Saos>
			</div>
		</div>
	</div>
</div>

<style>
	* {
		font-family: 'Open Sans', sans-serif;
		overflow-x: hidden;
	}

	h1 {
		font-weight: 400;
		text-align: center;
		font-family: 'Alfa Slab One', sans-serif;
		letter-spacing: 0.04cm;
	}

	h1,
	p {
		margin: 0;
	}

	.countdown {
		font-family: 'Alfa Slab One', sans-serif;
		display: grid;
		place-items: center;
		text-align: center;
		padding: 45px 15px;
	}
	.countdown p {
		font-family: 'Alfa Slab One', sans-serif;
		font-weight: 400;
		font-size: 50px;
		color: var(--blue);
		margin-bottom: 48px;
	}
	@media screen and (max-width: 350px) {
		.countdown p {
			font-size: 40px;
		}
	}
	.intro {
		position: relative;
		width: 100%;
		height: calc(100vh - 94px);
		background-position: center;
		background-size: cover;
	}
	.IASMUN-pic {
		width: 380px;
		height: 300px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: block;
		margin: auto;
	}

	.letters {
		margin-top: 18px;
		padding-bottom: 28px;
		display: grid;
		place-items: center;
		gap: 45px;
		position: relative;
		overflow: visible;
	}
	.letters .container {
		width: 1200px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		color: #fff;
		padding: 28px 0;
	}
	.letters .container p {
		font-size: 17px;
	}
	.letters h1 {
		margin-bottom: 24px;
	}
	.letters .welcome {
		font-family: 'Copperplate Gothic', sans-serif;
		font-size: 42px;
	}
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
	}
	.content .text {
		font-size: 36px;
		flex: 0.9;
	}
	.content img {
		aspect-ratio: 1;
		width: 420px;
		background-color: #326198;
		flex: 0.4;
	}
	.letters .container {
		background-color: var(--teal);
	}

	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes -global-slide-left {
		0% {
			-webkit-transform: translateX(200px);
			transform: translateX(200px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-bottom {
		0% {
			-webkit-transform: translateY(-50px);
			transform: translateY(-50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-top {
		0% {
			-webkit-transform: translateY(50px);
			transform: translateY(50px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}

	@keyframes -global-scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
			opacity: 0;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			opacity: 1;
		}
	}

	@media screen and (max-width: 1220px) {
		.letters .container {
			width: calc(100% - 20px);
			height: auto;
		}
	}
	@media screen and (max-width: 1100px) {
		.content {
			flex-direction: column !important;
			gap: 48px;
		}
		.deputy-sg .content {
			flex-direction: column-reverse !important;
		}
		.content img {
			flex: auto;
		}
		.content p {
			flex: auto;
		}
	}
	@media screen and (max-width: 550px) {
		.content {
			padding: 0 20px;
		}
	}
	@media screen and (max-width: 455px) {
		.content img {
			width: calc(100% - 10px);
			aspect-ratio: 1;
		}
	}
	@media screen and (max-width: 380px) {
		.IASMUN-pic {
			width: 250px;
			height: 200px;
		}
	}
	@media screen and (max-width: 255px) {
		.IASMUN-pic {
			width: 160px;
			height: 130px;
		}
	}

	@media screen and (max-height: 390px) {
		.intro {
			height: 400px;
		}
	}
</style>
