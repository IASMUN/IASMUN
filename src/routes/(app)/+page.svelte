<script lang="ts">
	import IASMun from '$lib/assets/logos/IASMUN.webp';
	import IAS from '$lib/assets/images/School.webp';

	import { fly } from 'svelte/transition';

	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	import SecretaryGeneral from '$lib/assets/organizers/Hiba Ali.webp';
	import DeputySecretaryGeneral from '$lib/assets/organizers/Nour Ashraf.webp';
    import UnderSecretaryGeneral from '$lib/assets/organizers/Nour Moustafa.webp';

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
	<title>IASMUN25 Home Page</title>

	<meta name="description" content="The Official Website for IASMUN 2025!" />
</svelte:head>

{#if showCountdown}
	<div class="countdown">
		<p>IASMUN 2025 Countdown</p>
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
						Hello, delegates, chairs, and anyone else who wants to show up!
						<br /><br />

						I'm Hiba Naveed Ali, your Secretary-General for this year's IASMUN. And let me just say—it's 
						an honour (and a whole lot of paperwork) to be here. This role is a once-in-a-lifetime opportunity 
						for me. Literally. I'm not doing this again.
						<br /><br />

						But since I'm here, I promise to give it my all: from helping you navigate international crises to 
						ensuring the Wi-Fi stays alive. You'll debate, collaborate, and maybe even accidentally become 
						best friends with someone you were supposed to politically destroy (it happens).
						<br /><br />

						So let's make this conference unforgettable—because trust me, I'll be remembering it every time 
						I scroll through my gallery (and Instagram). Now, go make me proud and show the world why 
						this MUN is the best one yet.
						<br /><br />

						Best Regards,
						<br />
						Hiba Naveed Ali
						<br />
						IASMUN'25 Secretary-General
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
						Welcome to IASMUN 25!
						<br /><br />

						It's my pleasure to welcome each of you to IASMUN 2025! As your Deputy Secretary-General,
						I am thrilled to see the passion and commitment you bring to this conference. IASMUN is more 
						than an event; it's a journey in diplomacy, leadership, and self-discovery, 
						and I'm excited for what lies ahead for each of you.
						<br /><br />

						Leadership isn't about titles—it's about making a difference. Like figure skating, it's the grace in
						each step that truly matters. At IASMUN, the focus is on learning, collaboration, and the shared
						experience of tackling global challenges together.
						<br /><br />

						This is your chance to step into a diplomat's shoes, build valuable skills, and form meaningful 
						connections. Upholding values of fairness, equality, and respect, we strive to reflect the inclusive 
						world we all aim to create.
						<br /><br />

						Embrace every challenge, collaborate fully, and let this experience inspire you. Your dedication 
						makes IASMUN truly special.
						<br /><br />

						Warm regards,
						<br /><br />

						Nour Ashraf
						<br />
						Deputy Secretary-General
					</p>
				</Saos>
			</div>
		</div>
	</div>

	<div class="container under-sg">
        <Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
            <h1>Under-Secretary General's<br /><span class="welcome">Welcome</span></h1>
        </Saos>

        <div class="content">
			 <div class="text">
                <Saos once={true} animation="fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
                    <p>
                        Hi there!
                        <br /><br />

                        As the Under-Secretary-General, it's my pleasure to welcome each of you—delegates,
                        advisors, and supporters—to IASMUN 2025. This event is more than just a conference;
                        it's a gathering of passionate minds determined to make a difference. IASMUN thrives
                        on the enthusiasm, resilience, and vision of its participants, and each one of you
                        plays a vital role in making it extraordinary.
                        <br /><br />

                        In my role, I'm here to ensure that every aspect of this conference supports your
                        journey and allows your ideas to flourish. Our team has worked with dedication to
                        create a platform that's both challenging and inspiring, one that encourages
                        collaboration and mutual respect. I'm excited to see the discussions and insights
                        that will come out of this year's conference.
                        <br /><br />

                        Thank you for being part of IASMUN 2025. Let's make this a memorable experience for
                        all involved. Welcome to IASMUN 2025.
						<br /><br />

						Best regards,
						<br /><br />

						Nour Moustafa
						<br />
						Under Secretary-General
                    </p>
                </Saos>
            </div>

			<Saos once={true} animation="slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
                <img src={UnderSecretaryGeneral} alt="Under-Secretary General" />
            </Saos>
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
		object-fit: cover;
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
