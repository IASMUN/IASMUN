import { a3 as ensure_array_like, a1 as head, W as attr, S as escape_html } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { S as Saos } from "../../../../../chunks/Saos.js";
import { S as Shape1 } from "../../../../../chunks/Vector 1.js";
import { a as Shape6, S as Shape7 } from "../../../../../chunks/Vector 7.js";
function _page($$payload) {
  let committees = ["GA", "DISEC", "WHO", "UNODC"];
  const each_array = ensure_array_like(committees);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Guidebooks</title>`;
  });
  $$payload.out += `<img class="shapes shape1 svelte-j864pg"${attr("src", Shape1)} alt=""> <img class="shapes shape2 svelte-j864pg"${attr("src", Shape6)} alt=""> <img class="shapes shape3 svelte-j864pg"${attr("src", Shape7)} alt=""> <div class="wrapper svelte-j864pg"><div class="container svelte-j864pg"><div class="main-guidebook svelte-j864pg">`;
  Saos($$payload, {
    animation: "slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="header svelte-j864pg">Delegate <b class="svelte-j864pg">Handbook</b></h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Saos($$payload, {
    animation: "slide-top 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<a class="handbook-link svelte-j864pg" data-sveltekit-preload-data="off"${attr("href", `${base}/uploads/2023/handbooks/Delegate Handbook.pdf`)}>Delegate Handbook</a>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="svelte-j864pg">`;
  Saos($$payload, {
    animation: "slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    once: true,
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="header svelte-j864pg">Committee <b class="svelte-j864pg">Guidebooks</b></h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="handbook-links svelte-j864pg"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let committee = each_array[index];
    Saos($$payload, {
      once: true,
      animation: `slide-top ${index === 0 || index === 1 ? 1 : 1.5}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      children: ($$payload2) => {
        $$payload2.out += `<a class="handbook-link svelte-j864pg" data-sveltekit-preload-data="off"${attr("href", `${base}/uploads/2023/handbooks/${committee}_Handbook.pdf`)}>${escape_html(committee)}</a>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
}
export {
  _page as default
};
