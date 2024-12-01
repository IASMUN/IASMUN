<script lang="ts">
	import Saos from 'saos';

	import Shape1 from '$lib/assets/2023/shapes/Vector 1.svg';
	import Shape6 from '$lib/assets/2023/shapes/Vector 6.svg';
	import Shape7 from '$lib/assets/2023/shapes/Vector 7.svg';

	let committees = ['GA', 'DISEC', 'WHO', 'UNODC'];
</script>

<img class="shapes shape1" src={Shape1} alt="" />
<img class="shapes shape2" src={Shape6} alt="" />
<img class="shapes shape3" src={Shape7} alt="" />

<div class="wrapper">
	<div class="container">
		<div class="main-guidebook">
			<Saos animation="slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<h1 class="header">Delegate <b>Handbook</b></h1>
			</Saos>

			<Saos animation="slide-top 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<a
					class="handbook-link"
					data-sveltekit-preload-data="off"
					href={`/uploads/2023/handbooks/Delegate Handbook.pdf`}>Delegate Handbook</a
				>
			</Saos>
		</div>

		<div>
			<Saos animation="slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<h1 class="header">Committee <b>Guidebooks</b></h1>
			</Saos>
			<div class="handbook-links">
				{#each committees as committee, index}
					<Saos
						once={true}
						animation={`slide-top ${
							index === 0 || index === 1 ? 1 : 1.5
						}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`}
					>
						<a
							class="handbook-link"
							data-sveltekit-preload-data="off"
							href={`/uploads/2023/handbooks/${committee}_Handbook.pdf`}>{committee}</a
						>
					</Saos>
				{/each}
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<title>Guidebooks</title>
</svelte:head>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');

	* {
		font-family: 'Rubik', sans-serif;
		text-align: center;
	}

	.shapes {
		z-index: -1;
		position: absolute;
	}
	.shape1 {
		top: 120px;
		left: 40px;
		width: 120px;
		height: 120px;
	}
	.shape2 {
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto 0;
		width: 160px;
		height: 160px;
	}
	.shape3 {
		left: 160px;
		bottom: 20px;
		width: 160px;
		height: 160px;
	}

	.wrapper {
		display: grid;
		place-items: center;
		height: calc(100vh - 97px);
	}
	.container {
		padding: 22px 12px;
		width: 800px;
		height: calc(100% - 200px);
		max-height: 560px !important;
		background-image: linear-gradient(to bottom, #080a68, #000);
		color: #fff;
		text-align: center;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 1);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.header {
		margin-top: 0;
		font-weight: 400;
	}
	.main-guidebook {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.handbook-links {
		display: grid;
		grid-template-columns: repeat(2, 240px);
		justify-content: center;
		align-content: center;
		gap: 12px;
	}
	.handbook-link {
		display: block;
		width: 240px;
		padding: 18px 0;
		background-color: #1f4e60;
		color: #fff;
		text-decoration: none;
		transition: 0.5s;
	}
	.handbook-link:hover {
		background-color: #245c70c0;
		opacity: 0.8;
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
			-webkit-transform: translateY(60px);
			transform: translateY(60px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media screen and (max-height: 1300px) {
		.shape3 {
			left: 20px;
		}
	}
	@media screen and (max-height: 690px) {
		.container {
			height: calc(100% - 120px);
		}
	}
	@media screen and (max-height: 540px) {
		.container {
			height: calc(100% - 80px);
		}
	}
	@media screen and (max-width: 540px) {
		.handbook-links {
			grid-template-columns: repeat(1, 240px);
		}
		.handbook-link {
			width: 240px;
		}
		.container {
			height: calc(100% - 80px);
		}
		.main-guidebook {
			margin-bottom: 35px;
		}
	}

	@media screen and (max-width: 410px) {
		.wrapper {
			height: 700px;
		}
		.container {
			height: 800px;
		}
	}

	@media screen and (max-width: 850px) {
		.container {
			width: calc(100vw - 50px);
		}
	}
</style>
