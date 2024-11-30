<script lang="ts">
	import Saos from 'saos';

	let committees = ['GA1', 'GA2', 'GA3', 'GA4', 'GA5', 'UNODC', 'WHO', 'AL (EN)', 'UNICEF'];
</script>

<div class="wrapper">
	<div class="container">
		<div class="main-guidebook">
			<Saos animation="slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<h1 class="header">Delegate Handbook</h1>
			</Saos>

			<Saos animation="slide-top 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<div class="handbook-link">Delegate Handbook</div>
			</Saos>
		</div>

		<div>
			<Saos animation="slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<h1 class="header">Background Guides</h1>
			</Saos>
			<div class="handbook-links">
				{#each committees as committee, index}
					<div class={committee}>
						<Saos
							once={true}
							animation={`slide-top ${
								index === 0 || index === 1 ? 1 : 1.5
							}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`}
						>
						<div class="handbook-link">{committee}</div>
						</Saos>
					</div>
				{/each}
			</div>
		</div>

		<div class="country-matrix">
			<Saos animation="slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<h1 class="header">Country Matrix</h1>
			</Saos>

			<Saos animation="slide-top 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" once={true}>
				<div class="handbook-link">Country Matrix</div>
			</Saos>
		</div>
	</div>
</div>

<svelte:head>
	<title>Guidebooks</title>

	<meta
		name="description"
		content="Delegate Handbook, Background Guides, and Country Matrix for IASMUN"
	/>
</svelte:head>

<style>
	* {
		font-family: 'Open Sans', sans-serif;
		text-align: center;
	}

	.wrapper {
		padding: 30px 0;
		display: grid;
		place-items: center;
	}
	.container {
		padding: 22px 12px;
		width: 800px;
		background-color: var(--dark-grey);
		color: #fff;
		text-align: center;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 1);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		gap: 22px;
	}
	.header {
		margin-top: 0;
		margin-bottom: 10px;
		font-weight: 400;
		font-family: 'Alfa Slab One', sans-serif;
		letter-spacing: 0.05cm;
	}
	.main-guidebook,
	.country-matrix {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.handbook-links {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		gap: 12px;
	}
	.handbook-link {
		cursor: pointer;
		display: block;
		width: 240px;
		padding: 18px 0;
		background-color: var(--teal);
		color: #fff;
		text-decoration: none;
		transition: 0.5s;
	}
	.handbook-link:hover {
		background-color: var(--teal);
		opacity: 0.73;
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
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media screen and (max-width: 850px) {
		.container {
			width: calc(100vw - 50px);
		}
	}

	@media screen and (max-width: 620px) {
		.handbook-links {
			grid-template-columns: repeat(3, 160px);
		}
		.handbook-link {
			width: 160px;
		}
	}
</style>
