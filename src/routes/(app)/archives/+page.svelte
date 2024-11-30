<div class="wrapper">
	<div class="container">
		<h1>Archives:</h1>
		<div class="years">
			<a href="https://onedrive.live.com/?authkey=%21AJOiFGx9N1%5FRXwQ&id=56EF8D84225DA27F%2139079&cid=56EF8D84225DA27F">2024</a>
		</div>
	</div>
</div>

<svelte:head>
	<title>Archives</title>

	<meta name="description" content="Archives Of Our Website" />
</svelte:head>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

	* {
		font-family: 'Inter', sans-serif;
		font-weight: 800;
	}

	.wrapper {
		height: 500px;
		display: grid;
		place-items: center;
		text-align: center;
	}
	h1 {
		font-size: 42px;
	}
	.years {
		display: flex;
		flex-direction: column;
	}
	a {
		text-decoration: none;
		font-size: 28px;
		color: var(--blue);
		opacity: 0.8;
		transition: 0.25s;
	}
	a:hover {
		text-decoration: underline;
		opacity: 1;
	}
</style>
