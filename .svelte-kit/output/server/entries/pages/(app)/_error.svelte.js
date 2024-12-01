import { S as escape_html, T as store_get, V as unsubscribe_stores, R as pop, P as push } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="main svelte-1iwd6ow"><h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)} | ${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</h1></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
