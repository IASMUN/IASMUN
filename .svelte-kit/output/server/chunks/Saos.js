import { a0 as fallback, W as attr, _ as slot, X as bind_props, R as pop, $ as stringify, P as push } from "./index.js";
function Saos($$payload, $$props) {
  push();
  let animation = fallback($$props["animation"], "none");
  let animation_out = fallback($$props["animation_out"], "none; opacity: 0");
  let once = fallback($$props["once"], false);
  let top = fallback($$props["top"], 0);
  let bottom = fallback($$props["bottom"], 0);
  let css_observer = fallback($$props["css_observer"], "");
  let css_animation = fallback($$props["css_animation"], "");
  const countainer = `__saos-${Math.random()}__`;
  $$payload.out += `<div${attr("id", countainer)}${attr("style", css_observer)}>`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("style", `animation: ${stringify(animation)}; ${stringify(css_animation)}`)}><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    animation,
    animation_out,
    once,
    top,
    bottom,
    css_observer,
    css_animation
  });
  pop();
}
export {
  Saos as S
};
