<script lang="ts">
	import TikTokLogo from '$lib/assets/logos/socials/Tiktok.svg';
	import InstagramLogo from '$lib/assets/logos/socials/Instagram.svg';
	import EmailLogo from '$lib/assets/logos/socials/Email.svg';

	import Menu from '$lib/assets/logos/Menu.svg';

	import { page } from '$app/stores';

	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let menu: any;
	let links: any;

	let width: number;
	let showLinks = false;

	let ready = false;

	onMount(() => (ready = true));
</script>

<svelte:window
	bind:innerWidth={width}
	on:click={(e) => {
		if (width < 1270) {
			if (e.target !== links && e.target !== menu) {
				showLinks = false;
			}
		}
	}}
/>

<nav>
	<div class="socials">
		{#if ready}
			<div class="links">
				<a
					class="tiktok-logo-link"
					target="_blank"
					rel="noreferrer"
					href="https://www.tiktok.com/@ias.mun"
					><img class="tiktok-logo-img" src={TikTokLogo} alt="tiktok" /></a
				>
				<a
					class="instagram-logo-link"
					target="_blank"
					rel="noreferrer"
					href="https://www.instagram.com/ias.mun"
				>
					<img class="instagram-logo-img" src={InstagramLogo} alt="instagram" />
				</a>

				<a
					class="email-logo-link"
					target="_blank"
					rel="noreferrer"
					href="mailto:iasmuninfo@gmail.com"
				>
					<img class="email-logo-img" src={EmailLogo} alt="email" />
				</a>
			</div>
		{/if}
	</div>

	{#if width >= 1270 || showLinks}
		<div
			class="page-links"
			bind:this={links}
			in:fly={showLinks ? { x: 200, duration: 800 } : undefined}
			out:fly={{ x: 200, duration: 800 }}
		>
			{#if ready}
				<a class={$page.url.pathname == '/' ? 'active' : ''} href="/">Home</a>
				<a class={$page.url.pathname == '/about-us' ? 'active' : ''} href="/about-us">About Us</a>
				<a class={$page.url.pathname == '/organizers' ? 'active' : ''} href="/organizers"
					>Organizers</a
				>
				<a class={$page.url.pathname == '/committees' ? 'active' : ''} href="/committees"
					>Committees</a
				>
				<a class={$page.url.pathname == '/guidebooks' ? 'active' : ''} href="/guidebooks"
					>Guidebooks</a
				>
				<a
					class={$page.url.pathname == '/conference-schedule' ? 'active' : ''}
					href="/conference-schedule">Conference Schedule</a
				>
				<!-- <a class={$page.url.pathname == '/faq' ? 'active' : ''} href="/faq">FAQ</a> -->
				<a class={$page.url.pathname == '/archives' ? 'active' : ''} href="/archives">Archives</a>
				<a target="_blank" rel="noreferrer" href="https://forms.gle/FHDowfX3pQz8XKZw9"
					>Registration</a
				>
				<a href="mailto:iasmuninfo@gmail.com">Contact Us</a>
			{/if}
		</div>
	{/if}

	{#if width < 1270}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			in:fade={{ duration: 1200 }}
			bind:this={menu}
			class="menu"
			on:click={() => (showLinks = !showLinks)}
			src={Menu}
			alt="Menu"
		/>
	{/if}
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

	a {
		margin: 0;
		padding: 0;
	}
	nav {
		height: 94px;
		background-color: var(--blue);
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		padding: 0 65px 0 65px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		z-index: 99;
		font-family: 'Inter', sans-serif;
	}
	.socials {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #fff;
	}
	.links {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-areas: 'twitter tiktok instagram email';
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		gap: 12px;
	}
	.socials .links a {
		cursor: pointer;
		position: relative;
		transition: 0.25s;
	}
	.socials .links a:hover {
		transform: translateY(-6px);
	}

	.tiktok-logo-link {
		grid-area: tiktok;
	}
	.instagram-logo-link {
		margin-left: -4px;
		grid-area: instagram;
	}
	.email-logo-link {
		grid-area: email;
	}

	.tiktok-logo-img {
		width: 38px;
		height: 38px;
	}
	.instagram-logo-img {
		width: 44px;
		height: 44px;
	}
	.email-logo-img {
		height: 38px;
		width: 38px;
	}
	.page-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 25px;
		text-align: center;
		margin-top: 20px;
	}
	.page-links a {
		font-family: 'Inter', sans-serif;
		color: rgba(206, 212, 218, 0.56);
		text-decoration: none;
		transition: 0.25s;
		position: relative;
		padding-bottom: 20px;
	}
	.page-links .active,
	.page-links a:hover {
		color: #fff;
	}
	.page-links .active::after,
	.page-links a::after {
		opacity: 1;
		content: '';
		width: 100%;
		height: 1.5px;
		background-color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 16px;
	}
	.page-links a::after {
		width: 100%;
		opacity: 0;
		bottom: 8px;
		transition: 0.25s;
		margin-left: auto;
		margin-right: auto;
	}
	.page-links a:hover:after {
		opacity: 1;
		width: 100%;
		bottom: 16px;
	}
	.page-links a::after:hover {
		opacity: 1;
		width: 100%;
		bottom: 16px;
	}
	.menu {
		width: 55px;
		height: 35px;
		cursor: pointer;
		z-index: 99;
	}

	@media screen and (max-width: 1365px) {
		nav {
			padding: 0 20px 0 20px;
		}
	}
	@media screen and (max-width: 1270px) {
		.page-links {
			position: fixed;
			top: 0;
			bottom: 0;
			right: 0;
			flex-direction: column;
			justify-content: center;
			background-color: var(--blue);
			padding: 35px 40px;
			width: 280px;
			gap: 0;
		}
	}
	@media screen and (max-width: 660px) {
		.page-links {
			width: 200px;
		}
	}
	@media screen and (max-width: 410px) {
		.links {
			gap: 10px;
		}
		.tiktok-logo-img {
			width: 32px;
			height: 32px;
		}
		.instagram-logo-img {
			width: 36px;
			height: 36px;
		}
		.email-logo-img {
			height: 32px;
			width: 32px;
		}
	}
	@media screen and (max-width: 400px) {
		.page-links {
			width: 180px;
			padding: 35px 20px;
		}
	}

	@media screen and (max-width: 325px) {
		.links {
			grid-template-columns: repeat(6, 1fr);
			grid-template-areas:
				'tiktok'
				'instagram email';
		}
		nav {
			height: 105px;
		}
	}
</style>
