import { S as escape_html, X as bind_props, R as pop, P as push, T as store_get, a1 as head, W as attr, V as unsubscribe_stores } from "../../../chunks/index.js";
import { n as navigating } from "../../../chunks/stores.js";
import { S as Saos } from "../../../chunks/Saos.js";
const IAS = "/iasmun/_app/immutable/assets/School.qHKJ5rAZ.webp";
const SecretaryGeneral = "/iasmun/_app/immutable/assets/Hiba%20Ali.CQEoJfUi.webp";
const DeputySecretaryGeneral = "/iasmun/_app/immutable/assets/Nour%20Ashraf.BYQyR81n.webp";
const UnderSecretaryGeneral = "/iasmun/_app/immutable/assets/Nour%20Moustafa.B8o7Xqti.webp";
function Digit($$payload, $$props) {
  let position = $$props["position"];
  let val = $$props["val"];
  let prev = val;
  const positionTitles = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
  $$payload.out += `<!---->`;
  {
    $$payload.out += `<figure class="svelte-g2qizg"><figcaption class="svelte-g2qizg"><h2 class="svelte-g2qizg">${escape_html(positionTitles[position])}</h2></figcaption> <div class="cont svelte-g2qizg"><div class="el top svelte-g2qizg"><data class="svelte-g2qizg">${escape_html(val)}</data></div> <div class="el next front svelte-g2qizg"><data class="svelte-g2qizg">${escape_html(prev)}</data></div> <div class="el next back svelte-g2qizg"><data class="svelte-g2qizg">${escape_html(val)}</data></div> <div class="el bottom svelte-g2qizg"><data class="svelte-g2qizg">${escape_html(prev)}</data></div></div></figure>`;
  }
  $$payload.out += `<!---->`;
  bind_props($$props, { position, val });
}
function Countdown($$payload, $$props) {
  push();
  let countdown = $$props["countdown"];
  $$payload.out += `<ol class="svelte-14xrr60"><li class="svelte-14xrr60">`;
  Digit($$payload, {
    position: 0,
    val: countdown.days.toString().padStart(2, "0")
  });
  $$payload.out += `<!----></li> <li class="hours svelte-14xrr60">`;
  Digit($$payload, {
    position: 1,
    val: countdown.hours.toString().padStart(2, "0")
  });
  $$payload.out += `<!----></li> <li class="svelte-14xrr60">`;
  Digit($$payload, {
    position: 2,
    val: countdown.minutes.toString().padStart(2, "0")
  });
  $$payload.out += `<!----></li> <li class="svelte-14xrr60">`;
  Digit($$payload, {
    position: 3,
    val: countdown.seconds.toString().padStart(2, "0")
  });
  $$payload.out += `<!----></li></ol>`;
  bind_props($$props, { countdown });
  pop();
}
const getMs = () => {
  let difference = (/* @__PURE__ */ new Date("January 17, 2025, 13:30:00")).getTime() - (/* @__PURE__ */ new Date()).getTime();
  if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  let seconds = difference / 1e3;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  return {
    days: Math.floor(days),
    hours: Math.floor(hours % 24),
    minutes: Math.floor(minutes % 60),
    seconds: Math.floor(seconds % 60)
  };
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let showCountdown = true;
  const countdownOver = () => countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;
  let countdown = getMs();
  if (countdownOver()) showCountdown = false;
  let interval;
  if (store_get($$store_subs ??= {}, "$navigating", navigating)) {
    if (store_get($$store_subs ??= {}, "$navigating", navigating).to?.url.pathname !== "/") {
      clearInterval(interval);
    }
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>IASMUN25 Home Page</title>`;
    $$payload2.out += `<meta name="description" content="The Official Website for IASMUN 2025!" class="svelte-qtuldo">`;
  });
  if (showCountdown) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="countdown svelte-qtuldo"><p class="svelte-qtuldo">IASMUN 2025 Countdown</p> `;
    Countdown($$payload, { countdown });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="intro svelte-qtuldo"${attr("style", `background-image: url(${IAS}); overflow-y: hidden;`)}>`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="letters svelte-qtuldo"><div class="container sg svelte-qtuldo">`;
  Saos($$payload, {
    once: true,
    animation: "slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="svelte-qtuldo">Secretary General's<br class="svelte-qtuldo"><span class="welcome svelte-qtuldo">Welcome</span></h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="content svelte-qtuldo"><div class="text svelte-qtuldo">`;
  Saos($$payload, {
    once: true,
    animation: "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    children: ($$payload2) => {
      $$payload2.out += `<p class="svelte-qtuldo">Hello, delegates, chairs, and anyone else who wants to show up! <br class="svelte-qtuldo"><br class="svelte-qtuldo"> I'm Hiba Naveed Ali, your Secretary-General for this year's IASMUN. And let me just say—it's 
						an honour (and a whole lot of paperwork) to be here. This role is a once-in-a-lifetime opportunity 
						for me. Literally. I'm not doing this again. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> But since I'm here, I promise to give it my all: from helping you navigate international crises to 
						ensuring the Wi-Fi stays alive. You'll debate, collaborate, and maybe even accidentally become 
						best friends with someone you were supposed to politically destroy (it happens). <br class="svelte-qtuldo"><br class="svelte-qtuldo"> So let's make this conference unforgettable—because trust me, I'll be remembering it every time 
						I scroll through my gallery (and Instagram). Now, go make me proud and show the world why 
						this MUN is the best one yet. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Best Regards, <br class="svelte-qtuldo"> Hiba Naveed Ali <br class="svelte-qtuldo"> IASMUN'25 Secretary-General</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Saos($$payload, {
    once: true,
    animation: "slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<img${attr("src", SecretaryGeneral)} alt="Secretary General" class="svelte-qtuldo">`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <div class="container deputy-sg svelte-qtuldo">`;
  Saos($$payload, {
    once: true,
    animation: "slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="svelte-qtuldo">Deputy Secretary General's<br class="svelte-qtuldo"><span class="welcome svelte-qtuldo">Welcome</span></h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="content svelte-qtuldo">`;
  Saos($$payload, {
    once: true,
    animation: "slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<img${attr("src", DeputySecretaryGeneral)} alt="Deputy Secretary General" class="svelte-qtuldo">`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="text svelte-qtuldo">`;
  Saos($$payload, {
    once: true,
    animation: "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    children: ($$payload2) => {
      $$payload2.out += `<p class="svelte-qtuldo">Welcome to IASMUN 25! <br class="svelte-qtuldo"><br class="svelte-qtuldo"> It's my pleasure to welcome each of you to IASMUN 2025! As your Deputy Secretary-General,
						I am thrilled to see the passion and commitment you bring to this conference. IASMUN is more 
						than an event; it's a journey in diplomacy, leadership, and self-discovery, 
						and I'm excited for what lies ahead for each of you. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Leadership isn't about titles—it's about making a difference. Like figure skating, it's the grace in
						each step that truly matters. At IASMUN, the focus is on learning, collaboration, and the shared
						experience of tackling global challenges together. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> This is your chance to step into a diplomat's shoes, build valuable skills, and form meaningful 
						connections. Upholding values of fairness, equality, and respect, we strive to reflect the inclusive 
						world we all aim to create. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Embrace every challenge, collaborate fully, and let this experience inspire you. Your dedication 
						makes IASMUN truly special. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Warm regards, <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Nour Ashraf <br class="svelte-qtuldo"> Deputy Secretary-General</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div> <div class="container under-sg svelte-qtuldo">`;
  Saos($$payload, {
    once: true,
    animation: "slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="svelte-qtuldo">Under-Secretary General's<br class="svelte-qtuldo"><span class="welcome svelte-qtuldo">Welcome</span></h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="content svelte-qtuldo"><div class="text svelte-qtuldo">`;
  Saos($$payload, {
    once: true,
    animation: "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    children: ($$payload2) => {
      $$payload2.out += `<p class="svelte-qtuldo">Hi there! <br class="svelte-qtuldo"><br class="svelte-qtuldo"> As the Under-Secretary-General, it's my pleasure to welcome each of you—delegates,
                        advisors, and supporters—to IASMUN 2025. This event is more than just a conference;
                        it's a gathering of passionate minds determined to make a difference. IASMUN thrives
                        on the enthusiasm, resilience, and vision of its participants, and each one of you
                        plays a vital role in making it extraordinary. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> In my role, I'm here to ensure that every aspect of this conference supports your
                        journey and allows your ideas to flourish. Our team has worked with dedication to
                        create a platform that's both challenging and inspiring, one that encourages
                        collaboration and mutual respect. I'm excited to see the discussions and insights
                        that will come out of this year's conference. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Thank you for being part of IASMUN 2025. Let's make this a memorable experience for
                        all involved. Welcome to IASMUN 2025. <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Best regards, <br class="svelte-qtuldo"><br class="svelte-qtuldo"> Nour Moustafa <br class="svelte-qtuldo"> Under Secretary-General</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Saos($$payload, {
    once: true,
    animation: "slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<img${attr("src", UnderSecretaryGeneral)} alt="Under-Secretary General" class="svelte-qtuldo">`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
