import { a0 as fallback, _ as slot, X as bind_props, R as pop, P as push } from "./index.js";
function IntersectionObserver_1($$payload, $$props) {
  push();
  let element = fallback($$props["element"], null);
  let once = fallback($$props["once"], false);
  let intersecting = fallback($$props["intersecting"], false);
  let root = fallback($$props["root"], null);
  let rootMargin = fallback($$props["rootMargin"], "0px");
  let threshold = fallback($$props["threshold"], 0);
  let entry = fallback($$props["entry"], null);
  let observer = fallback($$props["observer"], null);
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", { intersecting, entry, observer });
  $$payload.out += `<!---->`;
  bind_props($$props, {
    element,
    once,
    intersecting,
    root,
    rootMargin,
    threshold,
    entry,
    observer
  });
  pop();
}
export {
  IntersectionObserver_1 as I
};
