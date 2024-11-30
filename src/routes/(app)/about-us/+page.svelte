<script>
	import Saos from 'saos';
</script>

<svelte:head>
	<title>About Us</title>

	<meta name="description" content="The Mission, Vision, and History of IASMUN" />
</svelte:head>

<div class="about">
	<div class="container mission">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Mission</h1>
		</Saos>

		<Saos once={true} animation="fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
			<p>
				At IAS Model United Nations, our mission is to cultivate an enriching experience where every participant has the
				opportunity to develop invaluable skills such as collaboration, critical thinking, public speaking, teamwork, and
				leadership. Through structured simulations of real-world diplomatic processes, we aim to empower young leaders to
			    approach global challenges with confidence and clarity. This conference is designed to be a transformative journey,
			    encouraging participants to discover their voices, refine their perspectives, and emerge as more capable and engaged
			    global citizens.
                <br />
				<br />
				We strive to create a diverse, inclusive, and intellectually stimulating environment, where people from all backgrounds
			    come together to learn and grow. By fostering a collaborative and supportive atmosphere, we encourage delegates not only
			    to engage in rigorous debate but also to form lasting connections with like-minded individuals who share a passion for
			    understanding and addressing pressing international issues.

			</p>
		</Saos>
	</div>
	<div class="container vision">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Vision</h1>
		</Saos>

		<Saos once={true} animation="fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
			<p>
				Our vision is that each participant leaves the conference with something valuable—whether it be new friends, essential 
				life skills, a deeper understanding of diplomacy, or simply the satisfaction of an engaging debate. IAS Model United
				Nations 2025 aspires to be a place where knowledge is gained, perspectives are broadened, and future leaders are
			    inspired. We are committed to ensuring that every individual gains a meaningful experience that will serve them well
			    beyond the conference, as they continue to grow and contribute to the world around them.

			</p>
		</Saos>
	</div>
	<div class="container history">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>History</h1>
		</Saos>

		<Saos once={true} animation="fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
			<p>
				In the fall of 2023, a group of passionate seniors founded the International Academic School Model United Nations
			    (IASMUN), driven by a shared vision for diplomacy and global awareness. They laid a strong foundation with creativity
			    and enthusiasm, transforming IASMUN into a dynamic space for students to discuss, debate, and innovate solutions to
				global challenges. Their leadership inspired a culture of collaboration and critical thinking that has continued to
			    shape IASMUN's legacy.

				<br />
				<br />
				Guided by the insights of these founders, the 2024 seniors took IASMUN to new heights in its second edition in January
			    2024, with nine committees and over 250 delegates—an impressive expansion that solidified IASMUN’s reputation as a leading
			    MUN conference.
				<br />
				<br />

				Now, as IASMUN moves into its third edition in 2025, under the dedicated leadership of current juniors and seniors, the
			    conference continues to grow and evolve. With fresh ideas and an unwavering commitment to global issues, the 2025 team
			    is committed to enhancing the IASMUN experience even further, ensuring it remains a platform for impactful diplomacy
			    and meaningful connections. Each year builds on the dreams of those before, preserving IASMUN’s enduring spirit and
			    inspiring the next generation of leaders.

			</p>
		</Saos>
	</div>
</div>

<style>
	.about {
		margin-top: 18px;
		padding-bottom: 22px;
		display: grid;
		place-items: center;
		gap: 20px;
		font-family: 'Open Sans', sans-serif;
	}
	.container {
		width: 800px;
		color: #fff;
		text-align: center;
		padding: 22px 24px;
	}
	.mission,
	.vision {
		background-color: var(--teal);
	}
	.history {
		background-color: var(--dark-grey);
		color: var(--blue);
	}
	.container h1 {
		font-family: 'Alfa Slab One', sans-serif;
		letter-spacing: 0.06cm;
		margin-top: 0;
	}
	.container p {
		font-size: 20px;
	}

	@media screen and (max-width: 860px) {
		.container {
			width: calc(100% - 60px);
		}
	}
</style>
