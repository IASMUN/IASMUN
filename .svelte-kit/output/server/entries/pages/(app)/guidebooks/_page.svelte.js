import { a3 as ensure_array_like, a1 as head, W as attr, $ as stringify, S as escape_html } from "../../../../chunks/index.js";
import { S as Saos } from "../../../../chunks/Saos.js";
function _page($$payload) {
  let committees = [
    "GA1",
    "GA2",
    "GA3",
    "GA4",
    "GA5",
    "UNODC",
    "WHO",
    "AL (EN)",
    "UNICEF"
  ];
  const each_array = ensure_array_like(committees);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Guidebooks</title>`;
    $$payload2.out += `<meta name="description" content="Delegate Handbook, Background Guides, and Country Matrix for IASMUN" class="svelte-1acpx9z">`;
  });
  $$payload.out += `<div class="wrapper svelte-1acpx9z"><div class="container svelte-1acpx9z"><div class="main-guidebook svelte-1acpx9z">`;
  Saos($$payload, {
    animation: "slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="header svelte-1acpx9z">Delegate Handbook</h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Saos($$payload, {
    animation: "slide-top 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<div class="handbook-link svelte-1acpx9z">Delegate Handbook</div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="svelte-1acpx9z">`;
  Saos($$payload, {
    animation: "slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="header svelte-1acpx9z">Background Guides</h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="handbook-links svelte-1acpx9z"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let committee = each_array[index];
    $$payload.out += `<div${attr("class", `${stringify(committee)} svelte-1acpx9z`)}>`;
    Saos($$payload, {
      once: true,
      animation: `slide-top ${index === 0 || index === 1 ? 1 : 1.5}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      children: ($$payload2) => {
        $$payload2.out += `<div class="handbook-link svelte-1acpx9z">${escape_html(committee)}</div>`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="country-matrix svelte-1acpx9z">`;
  Saos($$payload, {
    animation: "slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="header svelte-1acpx9z">Country Matrix</h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Saos($$payload, {
    animation: "slide-top 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<div class="handbook-link svelte-1acpx9z">Country Matrix</div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div>`;
}
export {
  _page as default
};
