<script lang="ts">
    import Saos from 'saos';

    import GA1CHAIR from '$lib/assets/dais/Daniyal Ali.webp';
    import GA1COCHAIR from '$lib/assets/dais/Ceyra Jackson.webp';

    import GA2CHAIR from '$lib/assets/dais/Dona Shenushi.webp';
    import GA2COCHAIR from '$lib/assets/dais/Omar Mohammed.webp';

    import GA3CHAIR from '$lib/assets/dais/Shreya Galrani.webp';
    import GA3COCHAIR from '$lib/assets/dais/Taha Kamal.webp';

    import UNHRCCHAIR from '$lib/assets/dais/Armin Dianat.webp';
    import UNHRCCOCHAIR from '$lib/assets/dais/Manaal Khan.webp';

    import F1CHAIR from '$lib/assets/dais/Dev Dalal.webp';
    import F1COCHAIR from '$lib/assets/dais/Zeyad Usama.webp';

    import UNFCCCCHAIR from '$lib/assets/dais/Fahim Sulaiman.webp';
    import UNFCCCCOCHAIR from '$lib/assets/dais/Kripa Gehi.webp';

    import UNODCCHAIR from '$lib/assets/dais/Nida Gazzali.webp';
    import UNODCCOCHAIR from '$lib/assets/dais/Aryesh Biswas.webp';

    import WHOCHAIR from '$lib/assets/dais/Reem Saleem.webp';
    import WHOCOCHAIR from '$lib/assets/dais/Shaurya Galrani.webp';

    import ARABLEAGUECHAIR from '$lib/assets/dais/Laila Mohamed.webp';
    import ARABLEAGUECOCHAIR from '$lib/assets/dais/Frank Toh.webp';

    import UNICEFCHAIR from '$lib/assets/dais/Fares Basil.webp';
    import UNICEFCOCHAIR from '$lib/assets/dais/Aarav Garg.webp';

    let width = 0;

    const committees = [
        {
            class: 'GA1',
            name: 'Disarmament & International Security Committee (GA1)',
            purpose:
                'GA1 is committed to advancing worldwide peace and security by tackling pressing concerns related to arms regulation, disarmament efforts, and conflict prevention',
            topics: [
                ' Electronic Warfare and AI: Regulating the Intersection of Technology and Global Security',
                'Preventing Armed Conflict through Diplomacy: A ShiŌ from Military Build-up to Negotiation'
            ],
            chair_letter: `Hello there!

I'm Daniyal, a 16 year old Spaniard, who's absolutely crazy enthusiastic about extracurriculars, public speaking, and all sorts of competitions! , and it’s an incredible honor to chair this the First general assembly at IASMUN 2025,  we'll tackle some of the world’s most pressing security issues, from disarmament to peacekeeping and arms control. This committee is a space for dialogue, diplomacy, and collaboration, where your ideas can make a real impact on the global stage. As we engage in passionate debates and work towards solutions, I encourage each of you to bring your best, whether you’re forging alliances, crafting resolutions, or negotiating for peace. Let’s make this session one to remember! All the best from your head chair, see you at the conference!.
            `,
            chair_photo: GA1CHAIR,
            chair_name: 'Daniyal Ali',
            cochair_letter: `Hello delegates !!, 
                <br />
                 I'm Ceyra Jackson, your co-chair of General Assembly 1 for IASMUN'25. I'm here to steer some meaningful debates (and heated challenges) as we tackle global issues- hopefully with minimal chaos. I'm looking forward to meeting you all !!
                <br />
                Kindest Regards,
                <br />
                `,
            cochair_photo: GA1COCHAIR,
            cochair_name: ' Ceyra Jackson '
        },
        {
            class: 'GA2',
            name: 'Economic & Financial Committee (GA2)',
            purpose:
                'GA2 places its emphasis on international economic affairs. Its main efforts are directed towards formulating policies and tactics to strengthen the global economy, diminish poverty, and reinforce financial security.',
            topics: [
                ' Place holder Corporate Social Responsibility (CSR) in Developing Economies: Balancing Profit and People.',
                ' Promoting Fair Trade: Empowering Producers in Developing Countries.'
            ],
            chair_letter: `Dear Esteemed delegates,
                <br /> <br />
                Welcome all delegates to GA2! I am Dona Shenushi and I am delighted to be your Head Chair for this committee. No matter
                 how many MUN's you have attended, us chairs at GA2 will ensure that you leave the committee with new skills, new
                  friends and a new perspective over global politics. Let's make GA2 a memorable committee session. See you all there!.`,
            chair_photo: GA2CHAIR,
            chair_name: 'Dona Shenushi',
            cochair_letter: `It’s my pleasure to welcome you all to IASMUN25 and to the exciting discussions ahead in the second 
            General Assembly (GA-2) committee. My name is Omar Mohammed, I’m 17 years old, and I’m thrilled to serve as your co-chair
            this year. I can’t wait to dive into the debates and witness the thrilling exchanges that will keep us all on our toes
            that make this experience truly impactful. Lets' make this an unforgettable session!.`,
            cochair_photo: GA2COCHAIR,
            cochair_name: 'Omar Mohammed'
        },
        {
            class: 'GA3',
            name: 'Social, Cultural, & Humanitarian Affairs (GA3)',
            purpose:
                ' GA3 is all about humanity. This committee addresses social and humanitarian challenges worldwide, from healthcare and education to culture and sustainable development. Delegates collaborate to make the world a better place for all.',
            topics: [
                ' Climate-Induced Migration: Protecting the Rights of Displaced Populations.',
                ' Cultural Preservation in the Age of Globalization: Safeguarding Heritage and Diversity.'
            ],
            chair_letter: `Hello everyone my name is Shreya Galrani and I’ll be your Head Chair for General Assembly 3 committee IASMUN 2024.
             Let’s rewind to IASMUN 2023, where I came to the campus as a second time delegate scared to even speak, fast forward 
             to IASMUN 2025 where I have come back as a head chair and I couldn’t be happier. As your chair, I wish not just to see 
             fruitful debate but that every delegate learns something new whether that’s a new technique of public speaking or
             something fun about the agenda (or how to have amazing moves in socials) Regards,Shreya Galrani.`,

            chair_photo: GA3CHAIR,
            chair_name: 'Shreya Galrani',
            cochair_letter: `Hello, Delegates! I'm Taha Kamal an Egyptian and your co-chair in the GA3 committee at IASMUN 25'.
             I am really excited to be with you all on this journey, and I am looking forward to meeting each and every one of you.
              My aim is to create a collaborative space where every delegate feels empowered to speak up, challenge ideas, and engage
               with global issues in meaningful ways. I believe each of us has a very unique way of vision, and together we can make
             this conference a beneficial experience of growth. Best of luck delegates. `,
            cochair_photo: GA3COCHAIR,
            cochair_name: 'Taha Kamal'
        },
        {
            class: 'UNHRC',
            name: 'United Nations Human Rights Council (UNHRC)',
            purpose:
                ' UNHRC is dedicated to protecting and promoting human rights globally. This committee addresses violations, fosters accountability, and works toward justice and equality for all individuals.',
            topics: [
                ' Ensuring Access to Justice for marginalized communities: Overcoming barriers to legal representation.',
                ' Freedom of speech VS hate speech: Balancing human rights in the modern era.'
            ],
            chair_letter: `DELEGATES! DELEGATES! DELEGATES! my name is Armin Dianat and I am the head chair of UNHRC (the best committee). Words can't describe how delighted I am to be in this position, I am so excited to witness all the lively debates and drama in this committee.
              As your head chair, I will make sure every committee session is fun and informational with a bit of chaos mixed in. I also aim to support you to my best abilities, so feel free to approach me at anytime and I will gladly give my honest feedback on your performance and also help you improve for the next committee sessions.
              I am very grateful for this amazing opportunity! A huge thank you to Beyoncé, and I wish you all a warm welcome to IASMUN'25. VIVA UNHRC!.`,

            chair_photo: UNHRCCHAIR,
            chair_name: 'Armin Dianat',
            cochair_letter: `Hi delegates!
              I'm Manaal and I'm delighted to be serving as your co-chair for UNHRC at IASMUN'25. I hope to make this committee an unforgettable experience for every delegate present. I can't wait to witness awesome debates and everything this committee holds in store. Good luck! `,
            cochair_photo: UNHRCCOCHAIR,
            cochair_name: 'Manaal Khan'
        },
        {
            class: 'UNFCCC',
            name: 'United Nations Framework Convention on Climate Change (UNFCCC)',
            purpose:
                " UNFCCC focuses on combating climate change and its global impacts. This committee promotes sustainable solutions, international cooperation, and resilience for a greener future.",
            topics: [
                'Addressing Climate Justice: Implementing climate reparations for historical Polluters',
                ' Global carbon Market: Ensuring Fair and Effective Carbon Trading Systems'
            ],
            chair_letter: `Hi delegates,
            <br /><br />
             My name is Fahim and I'll be your Head Chair for UNFCCC. I feel honoured to be back here in IASMUN, only 
            this time as a chair. I hope to make this MUN conference a memorable and entertaining one for you all. And with you're
             diplomatic debates and unwavering support, I'm certain we will win the Best Committee Award towards the end of the
              conference. I wish you all the very best!

            Head Chair: General Assembly 5`,
            chair_photo: UNFCCCCHAIR,
            chair_name: 'Fahim Sulaiman',
            cochair_letter: `Hey everyone, I’m Kripa and im super excited to be chairing IASMUN! Can’t wait to hear everyone’s ideas, dive into debates, and work together on some interesting resolutions. It’s going to be a great experience for all of us!
            <br />
            So, brace yourselves for an event you surely won’t forget!`,
            cochair_photo: UNFCCCCOCHAIR,
            cochair_name: 'Kripa Gehi'
        },
        {
            class: 'UNODC',
            name: 'United Nations Office on Drugs and Crime (UNODC)',
            purpose:
                "UNODC is the United Nations' front line against drugs and crime. They work to combat drug trafficking, corruption, human trafficking, and other global crimes.",
            topics: [
                'Strengthening Global Legal Frameworks to Combat Human Traﬃcking.',
                'The Role of Technology in Combating Drug Traﬃcking and Organized Crime.'
            ],
            chair_letter: `Hey delegates,
            <br /><br />
            I'm Nida Gazzali, and I'm thrilled to be the head chair of UNODC. My MUN journey started almost 2 years ago when one of my friends forced me to go with her. Since then, I've been going on a rampage of MUNs. I have so many surprises lined up for my delegates. I look forward to meeting all of you and hearing the insane debates UNODC has to offer. Good Luck!`,
            chair_photo: UNODCCHAIR,
            chair_name: 'Nida Gazzali',
            cochair_letter: `Greetings Delegates!
My name is Aryesh Biswas and I am both honored and privileged to be your co-chair for UNODC at IASMUN!
I have always had a passion for debating, and I assure each and every one of you, whether you’re experienced or not, you will have a lot to take away from this conference, and most importantly, have an amazing time! Looking forward to meeting each and everyone of you!`,
            cochair_photo: UNODCCOCHAIR,
            cochair_name: 'Aryesh Biswas'
        },
        {
            class: 'WHO',
            name: 'World Health Organization (WHO)',
            purpose:
                'WHO is the global guardian of public health. They lead international efforts to prevent epidemics, ensure access to quality healthcare, and promote health for all.',
            topics: [
                ' Mental Health Crisis: Addressing the Silent Epidemic in Marginalized Populations',
                'Health Technology Access in Remote and Underserved Regions'
            ],
            chair_letter: `Greetings delegates! I am Reem Saleem, chairing for the World Health Organization Committee. May this conference bring out the best in your debating skills and hopefully create special memories. Best of luck!

            <br /><br />
            Sincerely Reem`,
            chair_photo: WHOCHAIR,
            chair_name: 'Reem Saleem',
            cochair_letter: `Dear delegates,
            <br />
            I'm Shaurya Shiva Galrani, your co-chair for World Health Organization (WHO), and I'm delighted to welcome all of you to IASMUN 25. I hope to make this a memorable conference for each and every one of you, and wish you the best of luck!
            <br /><br />
            Best Regards,
            <br /><br />
            Shaurya Shiva Galrani`,
            cochair_photo: WHOCOCHAIR,
            cochair_name: 'Shaurya Galrani'
        },
        {
            class: 'arab-league',
            name: 'Arab League (EN)',
            purpose:
                'The Arab League is an organization dedicated to promoting cooperation and coordination among Arab nations. Their work spans various areas, including politics, economics, culture, and social issues, all with a focus on advancing the interests of Arab states.',
            topics: ['Combating Gender-Based Violence: Strategies for Protecing Women’s Rights in the Arab World.', 'Sustainable Urban Development: Planning Smart Cities in the Arab World.'],
            chair_letter: `
            <br /><br />
            “The time of fable is over, the time of history has begun.” 
            <br /><br />
            Hey delegates! I’m Laila Mohamed, your head chair for Arab League. As u can tell I’m really into history by the quote. Other than that, I don’t really have much to say, just that it is an absolute honor to chair this committee. This committee will not only be fun, and mogg in this mun, but it’ll be a journey for the 3 days we’ll spend together! Can’t wait to meet you all soon!!
            <br /><br />
            #ArabLeagueMogs`,
            chair_photo: ARABLEAGUECHAIR,
            chair_name: 'Laila Mohamed',
            cochair_letter: `Greetings Delegates, 
            <br /><br />
            I’m Frank and im honored to be serving as the co-chair of arab league at IASMUN’25. A little about me: I’m 15, Thai/Malay, and im from GEMS Winchester School Dubai. I’m super excited to meet everyone there and manage an interesting and exciting committee. I look forward to watching you engage in meaningful discussions and create impactful resolutions. ARAB LEAGUE ON TOP 🔥🔥‼‼‼ See you all at IASMUN!!
            Once again, welcome to the Arab League. Of cooperation and progress, let us work hand in hand to create a legacy.
            <br /><br />
            Best regards,
            <br />
            Frank Toh
            <br />
            Co-Chair, Arab League`,
            cochair_photo: ARABLEAGUECOCHAIR,
            cochair_name: 'Frank Toh'
        },
        {
            class: 'Formula 1 Committee (F1)',
            name: 'Formula 1 Committee (F1)',
            purpose:
                'The F1 committee delves into global financial and economic challenges. It aims to foster cooperation, stabilize economies, and drive sustainable development through innovative solutions ',
            topics: ['Advancing Diversity in Formula 1: Overcoming Barriers in Race, Gender, and Culture.', ' Technological Innovations in F1: Balancing Performance, Safety, and Environmental Impact.'],
            chair_letter: `
            <br /><br />
            Dear Delegates,
            <br /><br />
            I’m Dev Dalal, the Race director (and your head chair) for the F1 committee at IASMUN. I am delighted to welcome you all to the Formula 1 Committee. Being an F1 diehard myself, I know the passion this sport stirs up. I can’t wait to see that same energy bubble up during committee sessions.   Whether this is your 1st race or your 402nd race, your voice matters; don't hesitate to make your voice heard. One cannot win a race without taking risks. In the ever-evolving world of Formula 1, you must be ready to embrace risks to stay ahead. I am sure that each and everyone one of you will bring something valuable to the paddock.
            Signing off,  
            Dev Dalal`,
            chair_photo: F1CHAIR,
            chair_name: 'Dev Dalal',
            cochair_letter: `Hello delegates!
            <br /><br />
            I’m Zeyad Usama, and it’s an absolute thrill to welcome you all to the F1 Committee at IAS MUN! Buckle up, because this is going to be a ride as exhilarating as an F1 Grand Prix! As your favorite co-chair (yes, you heard that right!), I’ve been passionately following F1 from its legendary beginnings in 1950 all the way to its roaring present.
            <br /><br />
            I’m here to keep things chill, fun, and full of energy. So, gear up for some high-octane discussions, intense debates, and, of course, an unforgettable experience. Let’s make this committee as exciting as a photo finish at the Monaco Grand Prix!
            <br />
            Let’s race into it—see you on the track! 🏎✨
            <br />
            Co-Chair, Arab League`,
            cochair_photo: F1COCHAIR,
            cochair_name: 'Zeyad Usama'
        },
        {
            class: 'UNICEF',
            name: "United Nations International Children's Emergency Fund (UNICEF)",
            purpose:
                "UNICEF is all about children's well-being. They provide humanitarian aid, health care, and education to children in need around the world. Their mission is to ensure every child has the opportunity to grow up healthy, educated, and safe.",
            topics: [
                ' Youth Unemployment Crisis: Creating Sustainable Opportunities for Future Generations',
                ' Reducing Violence Against Children in Low-Income Communities'
            ],
            chair_letter: `Hello delegates, I am Fares Basil, your family-friendly chair for UNICEF in this edition’s IASMUN’25. I am excited to see ambitious debates, meaningful discussions, and heart touching resolutions, good luck`,
            chair_photo: UNICEFCHAIR,
            chair_name: 'Fares Basil',
            cochair_letter: `Greetings esteemed delegates
             I’m excited to welcome you all to IASMUN24 and to the UNICEF committee. My name is Aarav Garg, and at 14, I’m thrilled to be co-chairing with my enthusiastic head chair. This is my first time chairing, and I can’t wait to dive into the discussions and have a genuinely fun time together as we explore important global issues.For some of you, this may be a brand new experience, and I want you to know I’ll be here to support you every step of the way. Let’s make this session both impactful and enjoyable—I’m looking forward to seeing everyone’s ideas come to life and to an incredible experience for all!`,
            cochair_photo: UNICEFCOCHAIR,
            cochair_name: 'Aarav Garg'
        }
        
    ];
</script>

<svelte:head>
    <title>Committees</title>

    <meta
        name="description"
        content="Introduction to The 9 Committees of IASMUN, along with their topics, purpose, and their dais"
    />
</svelte:head>

<svelte:window bind:innerWidth={width} />

<h1 class="header">Committees</h1>

<Saos once={true} animation="slide-top-qaccess 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
    <div class="quickaccess">
        {#each committees as committee}
            <a class="quickaccess-links" href={`#${committee.class}`}
                >{committee.class == 'arab-league' ? 'AL (EN)' : committee.class}</a
            >
        {/each}
    </div>
</Saos>

<div class="committees">
    {#each committees as committee}
        <div class={`committee ${committee.class}`} id={committee.class}>
            <div class="committee-header">
                <Saos
                    once={true}
                    animation={'slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
                >
                    <h1>{committee.name}</h1>
                </Saos>
            </div>
            <div class="purpose">
                <h2 class="subheader">Purpose</h2>
                <p class="desc">{committee.purpose}</p>
            </div>

            <h2 class="subheader topics-header">Topics</h2>
            <ol class="topics">
                {#each committee.topics as topic}
                    <li>{topic}</li>
                {/each}
            </ol>

            <div class="letters">
                <div class="chair">
                    <h2 class="subheader">Chair's Letter</h2>
                    <div class="content">
                        <Saos
                            once={true}
                            animation="slide-right-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
                        >
                            <p>{@html committee.chair_letter}</p>
                        </Saos>

                        <Saos
                            once={true}
                            animation="slide-left-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
                        >
                            <div class="dais">
                                <img class="img" src={committee.chair_photo} alt={committee.chair_name} />
                                <p class="dais-name">{committee.chair_name}</p>
                            </div>
                        </Saos>
                    </div>
                </div>

                {#if committee.cochair_name !== undefined}
                    <div class="co-chair">
                        <h2 class="subheader">Co-Chair's Letter</h2>
                        <div class="content">
                            <Saos
                                once={true}
                                animation="slide-left-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
                            >
                                <p>{@html committee.cochair_letter}</p>
                            </Saos>

                            <Saos
                                once={true}
                                animation="slide-right-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
                            >
                                <div class="dais">
                                    <img class="img" src={committee.cochair_photo} alt={committee.cochair_name} />
                                    <p class="dais-name">{committee.cochair_name}</p>
                                </div>
                            </Saos>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    :target {
        scroll-margin-top: 105px;
    }

    h1 {
        margin: 0;
        font-family: 'Alfa Slab One', sans-serif;
        letter-spacing: 0.07cm;
    }

    * {
        font-family: 'Open Sans', sans-serif;
    }

    .header {
        font-family: 'Alfa Slab One', sans-serif;
        font-size: 48px;
        text-align: center;
        margin: 46px 0 0 0;
        font-weight: 400;
    }
    .committee-header {
        color: var(--blue);
    }
    .subheader {
        font-family: 'Copperplate Gothic', sans-serif;
        color: white;
    }
    .purpose .subheader,
    .topics-header {
        color: var(--blue);
        font-weight: 800;
    }
    .quickaccess {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 18px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 42px;
        padding: 0 8px;
    }
    .quickaccess-links {
        position: relative;
        text-decoration: underline;
        font-size: 20px;
        color: var(--blue);
        opacity: 0.6;
        transition: 0.25s;
    }
    .quickaccess-links:hover {
        opacity: 1;
    }

    .committees {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr;
        gap: 16px;
        padding-bottom: 36px;
        position: relative;
        overflow: visible;
    }
    .committee {
        width: calc(100vw - 300px) !important;
        background-color: var(--dark-grey);
        color: #fff;
        width: 780px;
        padding: 24px;
        padding-bottom: 6px;
        position: relative;
    }
    .committee-header {
        text-align: center;
        margin-bottom: 24px;
    }
    .subheader {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 0;
    }
    .desc {
        margin-top: 4px;
        font-size: 22px;
    }
    .topics {
        margin-bottom: 4px;
        margin-top: 2px;
    }
    .topics li {
        margin-bottom: 8px;
        font-size: 22px;
    }
    .letters {
        margin-top: 16px;
        padding: 8px 16px;
        padding-bottom: 20px;
        background-color: var(--teal);
        color: white;
    }
    .letters .subheader {
        text-align: center;
        margin-bottom: 12px;
        font-size: 38px;
    }
    .letters .content {
        font-size: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 35px;
    }
    .letters p {
        margin: 0;
    }
    .dais {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: space-around;
        gap: 10px;
    }
    .dais-name {
        font-weight: 800;
        text-align: center;
    }
    .co-chair .content {
        flex-direction: row-reverse;
    }
    .letters p {
        flex: 0.85;
    }
    .letters .img {
        flex: 0.25;
        width: 380px;
    }

    @keyframes -global-slide-right {
        0% {
            -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes -global-slide-right-letter {
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
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }
    @keyframes -global-slide-top-qaccess {
        0% {
            -webkit-transform: translateY(40px);
            transform: translateY(40px);
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 840px) {
        .committee {
            width: calc(100vw - 90px) !important;
        }
    }
    @media screen and (max-width: 1300px) {
        .letters .content {
            flex-direction: column-reverse;
        }
        .letters .img {
            flex: 1;
            width: 220px;
            height: 180px;
        }
        .dais {
            margin-bottom: 22px;
        }
    }
    @media screen and (max-width: 500px) {
        .content > p {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 355px) {
        .header {
            font-size: 35px;
        }
        .committee-header {
            font-size: 10px;
        }
    }
    @media screen and (max-width: 320px) {
        .letters .img {
            width: 100%;
        }
    }
</style>