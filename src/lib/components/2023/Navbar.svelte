<script lang="ts">
	import TwitterLogo from '$lib/assets/2023/logos/socials/Twitter.svg';
	import TikTokLogo from '$lib/assets/2023/logos/socials/Tiktok.svg';
	import InstagramLogo from '$lib/assets/2023/logos/socials/Instagram.svg';
	import YoutubeLogo from '$lib/assets/2023/logos/socials/Youtube.svg';

	import Menu from '$lib/assets/2023/logos/Menu.svg';

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
		if (width < 1150) {
			if (e.target !== links && e.target !== menu) {
				showLinks = false;
			}
		}
	}}
/>

<nav>
	<p class="msg">You are viewing an archive. <a class="back" href="/">Go Back</a></p>

	<div class="socials">
		{#if ready}
			<div class="links" in:fly={{ y: -200, duration: 1500 }}>
				<a target="_blank" rel="noreferrer" href="https://twitter.com/ias_mun"
					><img src={TwitterLogo} alt="twitter" /></a
				>
				<a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@ias.mun"
					><img class="tiktok-logo-img" src={TikTokLogo} alt="tiktok" /></a
				>
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/ias.mun">
					<img class="instagram-logo-img" src={InstagramLogo} alt="instagram" />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.youtube.com/@IASMUN"
					class="youtube-logo"
				>
					<img class="youtube-logo-img" src={YoutubeLogo} alt="youtube" />
				</a>
			</div>

			<div class="text" in:fly={{ x: -100, duration: 1500 }}>
				<span>#IASMUN2023</span>
				<span class="right">iasmun2023@gmail.com</span>
			</div>
		{/if}
	</div>

	{#if width >= 1150 || showLinks}
		<div
			class="page-links"
			bind:this={links}
			in:fly={showLinks ? { x: 200, duration: 800 } : undefined}
			out:fly={{ x: 200, duration: 800 }}
		>
			{#if ready}
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 1200 }}
					class={$page.url.pathname == '/2023' ? 'active' : ''}
					href="/2023">Home</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 1700 }}
					class={$page.url.pathname == '/2023/committees' ? 'active' : ''}
					href="/2023/committees">Committees</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 2200 }}
					class={$page.url.pathname == '/2023/conference-schedule' ? 'active' : ''}
					href="/2023/conference-schedule">Conference Schedule</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 2700 }}
					class={$page.url.pathname == '/2023/guidebooks' ? 'active' : ''}
					href="/2023/guidebooks">Guidebooks</a
				>
				<!-- <a
					in:fly={showLinks ? undefined : { x: 200, duration: 3200 }}
					class={$page.url.pathname == '/credits' ? 'active' : ''}
					href="/credits">Credits</a
				> -->
				<a
					target="_blank"
					rel="noreferrer"
					in:fly={showLinks ? undefined : { x: 200, duration: 3200 }}
					href="https://forms.gle/ATgKBLsg8wGfq6pn7">Registration</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 3700 }}
					href="mailto:iasmun2023@gmail.com">Contact Us</a
				>
			{/if}
		</div>
	{/if}

	{#if width < 1150}
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

	.msg {
		color: #fff;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-weight: 800;
	}
	.back {
		text-decoration: underline;
		color: #fff;
		opacity: 0.8;
		transition: 0.25s;
	}
	.back:hover {
		opacity: 1;
	}

	a {
		margin: 0;
		padding: 0;
	}
	nav {
		height: 97px;
		background-color: #000;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		padding: 20px 65px 0 65px;
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
	.text {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		font-size: 14px;
	}
	.text .right {
		align-self: end;
	}
	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.socials .links a {
		cursor: pointer;
		position: relative;
		transition: 0.25s;
	}
	.socials .links a:hover {
		transform: translateY(-6px);
	}
	.socials .links img {
		width: 35px;
		height: 25px;
	}
	.tiktok-logo-img {
		width: 32px !important;
		height: 32px !important;
		margin-bottom: 2px;
	}
	.youtube-logo-img {
		height: 38px !important;
	}
	.instagram-logo-img {
		width: 32px !important;
		height: 32px !important;
		margin-bottom: 2px;
	}
	.youtube-logo {
		margin-left: 7px;
	}
	.page-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 25px;
		text-align: center;
	}
	.page-links * {
		font-family: 'Inter', sans-serif;
		color: rgba(206, 212, 218, 0.56);
		text-decoration: none;
		transition: 0.25s;
		position: relative;
	}
	.page-links .active,
	.page-links *:hover {
		color: #fff;
	}
	.page-links .active::after,
	.page-links *::after {
		opacity: 1;
		content: '';
		width: 100%;
		height: 1.5px;
		background-color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		bottom: -4px;
	}
	.page-links *::after {
		width: 100%;
		opacity: 0;
		bottom: -10px;
		transition: 0.25s;
		margin-left: auto;
		margin-right: auto;
	}
	.page-links *:hover:after {
		opacity: 1;
		width: 100%;
		bottom: -4px;
	}
	.menu {
		width: 55px;
		height: 35px;
		cursor: pointer;
		z-index: 99;
	}

	@media screen and (max-width: 1250px) {
		nav {
			padding: 20px 20px 0 20px;
		}
	}
	@media screen and (max-width: 1150px) {
		.page-links {
			position: fixed;
			top: 0;
			bottom: 0;
			right: 0;
			flex-direction: column;
			justify-content: center;
			background-color: #000;
			padding: 35px 40px;
			width: 280px;
		}
	}
	@media screen and (max-width: 660px) {
		.page-links {
			width: 200px;
		}
	}
	@media screen and (max-width: 410px) {
		.msg {
			width: 100vw;
			text-align: center;
		}
	}
	@media screen and (max-width: 400px) {
		.page-links {
			width: 180px;
			padding: 35px 20px;
		}
		.text span:first-child {
			display: none;
		}
	}
</style>
