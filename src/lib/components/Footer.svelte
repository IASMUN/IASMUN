<script lang="ts">
	import TikTokLogo from '$lib/assets/logos/socials/Tiktok.svg';
	import InstagramLogo from '$lib/assets/logos/socials/Instagram.svg';
	import EmailLogo from '$lib/assets/logos/socials/Email.svg';

	import IASSchool from '$lib/assets/logos/IAS Logo.webp';
	import IASMun from '$lib/assets/logos/IASMUN.webp';

	let slide_left = 'footer-slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
	let slide_right = 'footer-slide-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';

	export let onTopClick: any;
</script>

<footer>
	<div class="socials">
		<a target="_blank" rel="noreferrer" href="https://www.instagram.com/ias.mun" class="instagram">
			<img class="instagram-logo" src={InstagramLogo} alt="Instagram" />
		</a>
		<p>@ias.mun</p>

		<a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@ias.mun">
			<img class="tiktok-logo" src={TikTokLogo} alt="tiktok" />
		</a>
		<p>@ias.mun</p>

		<a target="_blank" rel="noreferrer" href="mailto:iasmuninfo@gmail.com">
			<img class="email-logo" src={EmailLogo} alt="Email" />
		</a>
		<p>iasmuninfo@gmail.com</p>
	</div>

	<div class="images">
		<img class="IASMUN" alt="IASMUN" src={IASMun} />

		<img class="IAS" alt="IAS" src={IASSchool} />
	</div>

	<p class="copyright">&#169; All Rights Reserved</p>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="top" on:click={onTopClick}>
		<div class="top-container">
			<svg
				width="25"
				height="25"
				viewBox="0 0 248 121"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="outline"
					d="M248 116.169C248 117.113 247.713 118.036 247.174 118.821C246.634 119.606 245.867 120.217 244.97 120.579C244.073 120.94 243.086 121.034 242.133 120.85C241.181 120.666 240.306 120.211 239.619 119.544L129.797 12.8177C128.246 11.3222 126.15 10.483 123.966 10.483C121.781 10.483 119.685 11.3222 118.134 12.8177L8.31864 119.544C7.39286 120.413 6.15289 120.893 4.86586 120.883C3.57884 120.872 2.34776 120.37 1.43766 119.485C0.527561 118.601 0.0113694 117.404 0.000185547 116.153C-0.0109983 114.903 0.483794 113.697 1.37794 112.798L111.19 6.07186C114.583 2.78652 119.177 0.941895 123.966 0.941895C128.755 0.941895 133.349 2.78652 136.741 6.07186L246.56 112.798C247.017 113.24 247.379 113.765 247.626 114.344C247.874 114.922 248.001 115.543 248 116.169Z"
					fill="black"
				/>
			</svg>
		</div>
	</div>
</footer>

<style>
	footer {
		position: relative;
		display: grid;
		align-items: center;
		justify-content: center;
		background-color: var(--blue);
		padding: 28px 48px;
		font-family: 'Open Sans', sans-serif;
		color: #fff;
	}
	a {
		color: #fff;
		text-decoration: none;
	}
	.socials {
		display: grid;
		grid-template-columns: 50px 1fr;
		gap: 4px;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 60px;
		margin-bottom: 28px;
	}
	.email-logo {
		width: 36px;
		height: 22px;
	}
	.tiktok-logo {
		width: 35px;
		height: 35px;
	}
	.instagram-logo {
		margin-top: 6px;
		width: 38px;
		height: 38px;
	}
	.images {
		display: flex;
		align-items: center;
	}
	.IASMUN {
		width: 280px;
	}
	.IAS {
		width: 280px;
	}
	footer .copyright {
		position: absolute;
		bottom: 8px;
		right: 22px;
	}
	.top {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
		transition: 0.55s;
	}
	.top-container {
		background-color: #fff;
		border-radius: 100%;
		padding: 8px 10px;
	}
	.top:hover {
		transform: translateY(-10px);
	}

	@keyframes -global-scale-up-center-logo {
		0% {
			-webkit-transform: scale(0.3s);
			transform: scale(0.3);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	@keyframes -global-footer-slide-right {
		0% {
			-webkit-transform: translateX(-100px);
			transform: translateX(-100px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}

	@keyframes -global-footer-slide-left {
		0% {
			-webkit-transform: translateX(100px);
			transform: translateX(100px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
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

	@media screen and (max-width: 1200px) {
		.IASMUN {
			width: 210px;
		}
		.IAS {
			width: 200px;
		}
		footer {
			height: 210px;
		}
	}

	@media screen and (max-width: 1010px) {
		.IASMUN {
			width: 160px;
		}
		.IAS {
			width: 150px;
		}
	}

	@media screen and (max-width: 750px) {
		.IASMUN {
			width: 140px;
		}
		.IAS {
			width: 140px;
		}
		footer {
			flex-direction: column;
			gap: 16px;
		}
		.socials {
			left: 40px;
		}
	}

	@media screen and (max-width: 660px) {
		.IASMUN {
			display: none;
		}
		.IAS {
			display: none;
		}
	}

	@media screen and (max-width: 325px) {
		.socials {
			left: 10px;
		}
	}

	@media screen and (max-width: 260px) {
		.top {
			display: none;
		}
	}
</style>
