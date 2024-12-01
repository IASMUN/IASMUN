<script lang="ts">
	import MediaHead from '$lib/assets/organizers/Cedra Khaled.webp';

	import MediaMember1 from '$lib/assets/organizers/Abdullah Ismail.webp';
	import MediaMember2 from '$lib/assets/organizers/Zeina Ahmed.webp';
	import MediaMember3 from '$lib/assets/organizers/Faraat Khan.webp';
	import MediaMember4 from '$lib/assets/organizers/Faisal Bunpha.webp';
	import MediaMember5 from '$lib/assets/organizers/Sarah Aqraa.webp';
	import MediaMember6 from '$lib/assets/organizers/Anastasiya Seydalieva.webp';
	import MediaMember7 from '$lib/assets/organizers/Gayoung Han.webp';

	import LogisticsHead from '$lib/assets/organizers/Sara Naser.webp';

	import LogisticsMember1 from '$lib/assets/organizers/Firas Hussain.webp';
	import LogisticsMember2 from '$lib/assets/organizers/Mohammed Shahdad.webp';
	import LogisticsMember4 from '$lib/assets/organizers/Shehab Alshehhi.webp';
	import LogisticsMember5 from '$lib/assets/organizers/Beesan Saif.webp';
	import LogisticsMember6 from '$lib/assets/organizers/Nouran Mohammed.webp';
	import LogisticsMember7 from '$lib/assets/organizers/Maryam Belal.webp';

	import PRHead from '$lib/assets/organizers/Hala Adnan.webp';

	import PRMember1 from '$lib/assets/organizers/Mohammed Mohana.webp';
	import PRMember2 from '$lib/assets/organizers/Nuha Osama.webp';

	import CommitteeHead from '$lib/assets/organizers/Joudy Ramy.webp';

	import CommitteeMember1 from '$lib/assets/organizers/Jumana Wala.webp';

	import CrisisHead from '$lib/assets/organizers/Aarim Zubair.webp';

	import CrisisMember1 from '$lib/assets/organizers/Maryam Riyumkina.webp';

	import VolunteeringHead from '$lib/assets/organizers/Al Hasan Ali.webp';

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
					<p class="member-description head-name">Cedra Khaled</p>
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
					Hello! I’m Cedra Khaled, and I’m honored to serve as the Head of Media for the International 
					Academic School Model United Nations (IASMUN). In this role, I lead a team that’s committed to
					capturing the energy, discussions, and collaborative spirit that make IASMUN truly unique. Our 
					goal is to showcase the hard work, creativity, and diplomacy of all the delegates through
					with our community and beyond. I’m thrilled to be part of an event that fosters global awareness, 
					leadership, and cooperation, and I look forward to working with everyone to make IASMUN an 
					unforgettable experience for all involved.
				</p>
			</Saos>
		</div>

		<div class="members">
			<div class="member">
				<img src={MediaMember1} alt="Abdullah Ismail" />
				<p class="member-description">Abdullah Ismail</p>
				<div class="roles">
					<span class="role">Co-head of Media</span>
					<span class="role">Head of Photographers</span>
				</div>
			</div>
			<div class="member">
				<img src={MediaMember2} alt="Zeina Ahmed" />
				<p class="member-description">Zeina Ahmed</p>
			</div>
			<div class="member">
				<img src={MediaMember3} alt="Faraat Khan" />
				<p class="member-description">Faraat Khan</p>
			</div>
			<div class="member">
				<img src={MediaMember4} alt="Faisal Bunpha" />
				<p class="member-description">Faisal Bunpha</p>
			</div>
			<div class="member">
				<img src={MediaMember5} alt="Sarah Aqraa" />
				<p class="member-description">Sarah Aqraa</p>
			</div>
			<div class="member">
				<img src={MediaMember6} alt="Anastasiya Seydalieva" />
				<p class="member-description">Anastasiya Seydalieva</p>
			</div>
			<div class="member">
				<img src={MediaMember7} alt="Gayoung Han" />
				<p class="member-description">Gayoung Han</p>
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
					<p class="member-description head-name">Sara Naser</p>
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
					Honorable Chairs, distinguished delegates, and esteemed guests,
					<br /><br />
					As the Head of Logistics, I am thrilled to welcome you all to this year’s Model United Nations
					conference. Behind the scenes, a dedicated team has worked tirelessly to ensure that 
					everything runs smoothly, from the setup of the venue to the smallest details that make this 
					event possible. Our goal is to create an environment where you can focus on the important 
					debates and discussions that will take place. If there’s anything you need, my team and I are 
					here to help. Let’s work together to make this IASMUN'25 a truly memorable experience. 
					<br /><br />
					Thank you!
				</p>
			</Saos>
		</div>

		<div class="members">
			<div class="member">
				<img src={LogisticsMember1} alt="Firas Hussain" />
				<p class="member-description">Firas Hussain</p>
				<div class="roles">
					<span class="role">Co-head of Logistics</span>
					<span class="role">Head of Finance</span>
				</div>
			</div>
			<div class="member">
				<img src={LogisticsMember2} alt="Mohammed Shahdad" />
				<p class="member-description">Mohammed Shahdad</p>
			</div>
			<div class="member">
				<img src={LogisticsMember4} alt="Shehab Alshehhi" />
				<p class="member-description">Shehab Alshehhi</p>
			</div>
			<div class="member">
				<img src={LogisticsMember5} alt="Beesan Saif" />
				<p class="member-description">Beesan Saif</p>
			</div>
			<div class="member">
				<img src={LogisticsMember6} alt="Nouran Mohammed" />
				<p class="member-description">Nouran Mohammed</p>
			</div>
			<div class="member">
				<img src={LogisticsMember7} alt="Maryam Belal" />
				<p class="member-description">Maryam Belal</p>
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
					<p class="member-description head-name">Hala Adnan</p>
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
					Hello everyone!
					<br /><br />
					I am Hala Adnan, a senior in IAS, and I have the pleasure of serving as 
					the Head of Public Relations for IAS MUN 2025. It is my honor to welcome you all to 
					this year's Model United Nations conference, where I ensure seamless communication, 
					foster a welcoming environment, and share the inspiring work and resolutions 
					developed here with a broader audience. Can't wait to welcome you all!
				</p>
			</Saos>
		</div>

		<div class="members">
			<div class="member">
				<img src={PRMember1} alt="Mohammed Mohana" />
				<p class="member-description">Mohammed Mohana</p>
				    <span class="role">Co-head of Public Relations</span>
			</div>
			<div class="member">
				<img src={PRMember2} alt="Nuha Osama" />
				<p class="member-description">Nuha Osama</p>
			</div>
		</div>
	</div>

	<div class="container">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Committees Team</h1>
		</Saos>

		<div class="head">
			<Saos
				once={true}
				animation="slide-right-pic 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<div class="head-container">
					<img src={CommitteeHead} alt="" />
					<p class="member-description head-name">Joudy Ramy</p>
					<p class="member-description">
						<span class="role">Head of Committees</span>
					</p>
				</div>
			</Saos>

			<Saos
				once={true}
				animation="slide-left-letter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<p class="head-letter">
					Hey, it’s Joudy, your Head of Committees!
					<br /><br />
					I’m thrilled to welcome each of you—delegates, chairs, advisors, and pagers—to what’s sure to 
					be an inspiring MUN experience. My focus is to make our committees the heart of this 
					conference: places where meaningful debates unfold, fresh ideas are shared, and everyone 
					grows. Each of you plays an essential role, from engaging in debates and guiding discussions to 
					supporting and keeping everything running smoothly. Together, we’re building a space where 
					everyone can make a lasting impact.
					<br /><br />
					Let’s create powerful memories and friendships that will last beyond the closing ceremony. Can’t 
					wait to see you all in action!
					<br /><br />
					Best Regards,
					<br />
					Joudy Ramy
				</p>
			</Saos>
		</div>
		
	    <div class="members">
		    <div class="member">
			    <img src={CommitteeMember1} alt="Jumana Wala" />
			    <p class="member-description">Jumana Wala</p>
				<span class="role">Co-head of Committees</span>
		    </div>
	    </div>
	</div>

	<div class="container crisis">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Crisis Team</h1>
		</Saos>
	
		<div class="head">
			<Saos
				once={true}
				animation="slide-right-pic 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<div class="head-container">
					<img src={CrisisHead} alt="" />
					<p class="member-description head-name">Aarim Zubair</p>
					<p class="member-description">
						<span class="role">Head of Crisis</span>
					</p>
				</div>
			</Saos>
	
			<Saos
				once={true}
				animation="slide-left-letter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
			>
				<p class="head-letter">
					Hello delegates!
					<br /><br />
					I'm Aarim Zubair, and I’ll be your Head of Crisis for IASMUN. In Crisis, you won’t face boring or generic 
					situations, but rather intense and even a bit unorthodox scenarios where you’ll need to come up with solutions
				    on the spot. Some of you may inadvertently trigger WW3, while others might bring about world peace. What I can
				    assure you, however, is that you’ll have a fun and memorable time.
				</p>
			</Saos>
		</div>
	
		<div class="members">
			<div class="member">
			    <img src={CrisisMember1} alt="Maryam Riyumkina" />
			    <p class="member-description">Maryam Riyumkina</p>
				<span class="role">Co-head of Crisis</span>
		    </div>
		</div>
	</div>

	<div class="container volunteering">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Volunteering Team</h1>
		</Saos>
	
		<div class="head">
			<Saos once={true} animation="slide-right-pic 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
				<div class="head-container">
					<img src={VolunteeringHead} alt="" />
					<p class="member-description head-name">Al Hasan Ali</p>
					<p class="member-description">
						<span class="role">Head of Volunteering</span>
					</p>
				</div>
			</Saos>
	
			<Saos once={true} animation="slide-left-letter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
				<p class="head-letter">
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
		font-size: 18px;
		text-transform: uppercase;
	}
	.roles {
    display: flex;
    flex-direction: column;
    gap: 1px;
    text-align: center;
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
		object-fit: cover;
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