<script lang="ts">
	import MediaHead from '$lib/assets/organizers/Mariyam Awan.webp';

	import MediaMember1 from '$lib/assets/organizers/Abdullah Ismail.webp';
	import MediaMember2 from '$lib/assets/organizers/Anastasiya Seydalieva.webp';
	import MediaMember3 from '$lib/assets/organizers/Cedra Khaled.webp';
	import MediaMember4 from '$lib/assets/organizers/Nader Alkindy.webp';

	import LogisticsHead from '$lib/assets/organizers/Zaid Alnajjar.webp';

	import LogisticsMember1 from '$lib/assets/organizers/Ahmed Belari.webp';
	import LogisticsMember2 from '$lib/assets/organizers/Sara Naser.webp';
	import LogisticsMember4 from '$lib/assets/organizers/Abdullah Firas.webp';
	import LogisticsMember5 from '$lib/assets/organizers/Rayan Nimer.webp';
	import LogisticsMember6 from '$lib/assets/organizers/Turki Saad.webp';

	import PRHead from '$lib/assets/organizers/Ali Faisal.webp';

	import PRMember1 from '$lib/assets/organizers/Al-Hassan Ali.webp';
	import PRMember2 from '$lib/assets/organizers/Nour Ashraf.webp';
	import PRMember3 from '$lib/assets/organizers/Haneen Saeed.webp';

	import ChairHead from '$lib/assets/dais/Rahaf Ahmed.webp';

	import Saos from 'saos';
</script>

<svelte:head>
	<title>Organizers</title>

	<meta name="description" content="Introduction to IASMUN's Teams Heads and Their Members" />
</svelte:head>

<div class="main">
	<div class="container media">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Media Team</h1>
		</Saos>

		<div class="head">
			<Saos
				once={true}
				animation="slide-right-pic 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<div class="head-container">
					<img src={MediaHead} alt="" />
					<p class="member-description head-name">Mariyam Awan</p>
					<p class="member-description">
						<span class="role">Head of Media</span>
					</p>
				</div>
			</Saos>

			<Saos
				once={true}
				animation="slide-left-letter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<p class="head-letter">
					Dear Esteemed Delegates,
					<br /><br />
					On behalf of the IASMUN 2024 media team, I extend a warm welcome to each of you! I'm Mariyam
					Awan, currently a senior in IAS, and as Head of Media for IASMUN 2024, I'm excited to capture
					and bring to you all the information throughout the preparations and the memories made in this
					years MUN. Your participation is integral to the success of this conference, and I am confident
					that your dedication will leave a lasting mark. Let us, as delegates and organizers, collaboratively
					make this conference an impactful and memorable experience to capture!
					<br /><br />

					Kindest Regards,
					<br />
					Mariyam
					<br />
					IASMUN '24 Head of Media
				</p>
			</Saos>
		</div>

		<div class="members">
			<div class="member">
				<img src={MediaMember1} alt="Abdullah Ismail" />
				<p class="member-description">Abdullah Ismail</p>
			</div>
			<div class="member">
				<img src={MediaMember2} alt="Anastasiya Seydalieva" />
				<p class="member-description">Anastasiya Seydalieva</p>
			</div>
			<div class="member">
				<img src={MediaMember3} alt="Cedra Khaled" />
				<p class="member-description">Cedra Khaled</p>
			</div>
			<div class="member">
				<img src={MediaMember4} alt="Nader Alkindy" />
				<p class="member-description">Nader Alkindy</p>
			</div>
		</div>
	</div>

	<div class="container logistics">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Logistics Team</h1>
		</Saos>

		<div class="head">
			<Saos
				once={true}
				animation="slide-right-pic 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<div class="head-container">
					<img src={LogisticsHead} alt="" />
					<p class="member-description head-name">Zaid Alnajjar</p>
					<p class="member-description">
						<span class="role">Head of Logistics</span>
					</p>
				</div>
			</Saos>

			<Saos
				once={true}
				animation="slide-left-letter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<p class="head-letter">
					Hi there, my name is Zaid Alnajjar and i have the pleasure to be your head of logistics
					for this years IASMUN. How great it is to be a part of this wonderful event and team, to
					be the one making it even more fun than it already is. Our job as the logistics team will
					be making sure you have an overall great experience, and to make sure that all your needs
					are fulfilled. We will be responsible for the overall visual and fun side of this MUN and
					that all of you have a great time overall. Best of luck to all the great delegates, and
					people that will be joining us. See you soon!
				</p>
			</Saos>
		</div>

		<div class="members">
			<div class="member">
				<img src={LogisticsMember1} alt="Ahmed Belari" />
				<p class="member-description">Ahmed Belari</p>
			</div>
			<div class="member">
				<img src={LogisticsMember2} alt="Sara Naser" />
				<p class="member-description">Sara Naser</p>
			</div>
			<div class="member">
				<img src={LogisticsMember4} alt="Abdullah Firas" />
				<p class="member-description">Abdullah Firas</p>
			</div>
			<div class="member">
				<img src={LogisticsMember5} alt="Rayan Nimer" />
				<p class="member-description">Rayan Nimer</p>
			</div>
			<div class="member">
				<img src={LogisticsMember6} alt="Turki Saad" />
				<p class="member-description">Turki Saad</p>
			</div>
		</div>
	</div>

	<div class="container PR">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Public Relations Team</h1>
		</Saos>

		<div class="head">
			<Saos
				once={true}
				animation="slide-right-pic 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<div class="head-container">
					<img src={PRHead} alt="" />
					<p class="member-description head-name">Ali Faisal</p>
					<p class="member-description">
						<span class="role">Head of Public Relations</span>
					</p>
				</div>
			</Saos>

			<Saos
				once={true}
				animation="slide-left-letter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<p class="head-letter">
					Hello distinguished delegates
					<br /><br />
					I extend a warm welcome to everyone attending the forthcoming IASMUN 2024. My name is Ali Faisal,
					and I will be leading public relations for this year's event. Aside from that, I'm a 17-year-
					old who enjoys spending most of my time with friends and studying. I'm grateful for the chance
					to join this year's public relations team. We greatly appreciate your attendance at IASMUN
					2024, and we are excited to have such esteemed guests as yourself with us for this important
					event. Please do not hesitate to contact me or any other member of our team if there is anything
					we can do to improve your experience or meet any particular needs you may have. Your presence
					adds immeasurable value, and we look forward to creating memorable moments together.
				</p>
			</Saos>
		</div>

		<div class="members">
			<div class="member">
				<img src={PRMember1} alt="Al-Hassan Ali" />
				<p class="member-description">Al-Hassan Ali</p>
			</div>
			<div class="member">
				<img src={PRMember2} alt="Nour Ashraf" />
				<p class="member-description">Nour Ashraf</p>
			</div>
			<div class="member">
				<img src={PRMember3} alt="Haneen Saeed" />
				<p class="member-description">Haneen Saeed</p>
			</div>
		</div>
	</div>

	<div class="container">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Head of Chairs</h1>
		</Saos>

		<div class="head">
			<Saos
				once={true}
				animation="slide-right-pic 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<div class="head-container">
					<img src={ChairHead} alt="" />
					<p class="member-description head-name">Rahaf Ahmed</p>
					<p class="member-description">
						<span class="role">Head of Chairs</span>
					</p>
				</div>
			</Saos>

			<Saos
				once={true}
				animation="slide-left-letter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<p class="head-letter">
					Hello everyone, My name is Rahaf Ahmed, and I am thrilled to be taking on the role of head
					of chairs for the second edition of our annual IASMUN conference, as well as chairing for
					the Arab League EN. I am a senior in IAS, and my interest in politics and debate has
					always been strong. However, my passion grew after my first MUN experience. In fact, I
					enjoyed it so much that I immediately made the decision to pursue international relations
					instead of law. With that being said, I extend a warm welcome to you at IASMUN. I hope
					that this experience provides you with the opportunity to improve your public speaking
					abilities, debate skills, research capabilities, quick thinking abilities, and confidence.
					As head of chairs, I will put forth my greatest effort to fulfill my responsibilities and
					ensure that IASMUN remains in your memories. I wish you all the best of luck.
				</p>
			</Saos>
		</div>
	</div>
</div>

<style>
	@keyframes -global-slide-left-letter {
		0% {
			-webkit-transform: translateX(50px);
			transform: translateX(50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-right-pic {
		0% {
			-webkit-transform: translateX(-50px);
			transform: translateX(-50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			opacity: 1;
		}
	}

	* {
		font-family: 'Open Sans', sans-serif;
	}

	h1 {
		margin-top: 8px;
		margin-bottom: 28px;
		text-align: center;
		font-family: 'Alfa Slab One', sans-serif;
		letter-spacing: 0.05cm;
		color: var(--light-grey);
	}
	.role {
		font-family: 'Copperplate Gothic';
		text-transform: uppercase;
	}
	.main {
		display: grid;
		place-items: center;
		gap: 18px;
		margin-top: 18px;
		padding-bottom: 28px;
	}
	.container {
		padding-top: 22px;
		padding-bottom: 22px;
		width: 1300px;
		background-color: var(--teal);
		color: white;
		display: flex;
		flex-direction: column;
	}
	.head-container {
		text-align: center;
	}
	.head {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 25px;
		padding: 0 18px;
	}
	img {
		width: 300px;
		aspect-ratio: 1;
	}
	.member-description {
		margin-top: 0;
		margin-bottom: 0;
		text-align: center;
		color: white;
		font-size: 18px;
	}
	.head-name {
		margin-bottom: -2px;
	}
	.head-letter {
		margin-top: 0;
		max-width: 450px;
	}
	.members {
		margin-top: 12px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		gap: 15px;
	}

	@media screen and (max-width: 1315px) {
		.container {
			width: calc(100vw - 40px);
		}
	}

	@media screen and (max-width: 784px) {
		.head-letter {
			margin: 0;
			margin-bottom: 48px;
		}
		.head {
			gap: 12px;
			justify-content: center;
			padding: 0 12px;
		}
	}

	@media screen and (max-width: 330px) {
		img {
			width: calc(100% - 15px);
		}
	}
</style>
