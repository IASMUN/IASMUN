import { a3 as ensure_array_like, a1 as head, S as escape_html, W as attr, $ as stringify } from "../../../../chunks/index.js";
function _page($$payload) {
  let faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempore. Voluptatum, possimus. Amet iste vitae sit. Nihil vitae accusamus in perferendis corrupti ipsum esse fugiat ipsam velit molestiae accusantium, cum odio similique? Quasi enim atque non eos optio adipisci deserunt!"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempore. Voluptatum, possimus. Amet iste vitae sit. Nihil vitae accusamus in perferendis corrupti ipsum esse fugiat ipsam velit molestiae accusantium, cum odio similique? Quasi enim atque non eos optio adipisci deserunt!"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempore. Voluptatum, possimus. Amet iste vitae sit. Nihil vitae accusamus in perferendis corrupti ipsum esse fugiat ipsam velit molestiae accusantium, cum odio similique? Quasi enim atque non eos optio adipisci deserunt!"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempore. Voluptatum, possimus. Amet iste vitae sit. Nihil vitae accusamus in perferendis corrupti ipsum esse fugiat ipsam velit molestiae accusantium, cum odio similique? Quasi enim atque non eos optio adipisci deserunt!"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempore. Voluptatum, possimus. Amet iste vitae sit. Nihil vitae accusamus in perferendis corrupti ipsum esse fugiat ipsam velit molestiae accusantium, cum odio similique? Quasi enim atque non eos optio adipisci deserunt!"
    }
  ];
  const each_array = ensure_array_like(faqs);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>FAQ</title>`;
    $$payload2.out += `<meta name="description" content="FAQ on IASMUN">`;
  });
  $$payload.out += `<div class="wrapper svelte-n6ykiu">FAQ <div class="faq"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let faq = each_array[i];
    $$payload.out += `<div class="section svelte-n6ykiu"><div class="question svelte-n6ykiu"><h3 class="svelte-n6ykiu">${escape_html(faq.question)}</h3> <svg${attr("class", `${stringify("arrow" + (faq.open ? " rotated" : ""))} svelte-n6ykiu`)} width="25" height="25" viewBox="0 0 248 121" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="outline" d="M248 116.169C248 117.113 247.713 118.036 247.174 118.821C246.634 119.606 245.867 120.217 244.97 120.579C244.073 120.94 243.086 121.034 242.133 120.85C241.181 120.666 240.306 120.211 239.619 119.544L129.797 12.8177C128.246 11.3222 126.15 10.483 123.966 10.483C121.781 10.483 119.685 11.3222 118.134 12.8177L8.31864 119.544C7.39286 120.413 6.15289 120.893 4.86586 120.883C3.57884 120.872 2.34776 120.37 1.43766 119.485C0.527561 118.601 0.0113694 117.404 0.000185547 116.153C-0.0109983 114.903 0.483794 113.697 1.37794 112.798L111.19 6.07186C114.583 2.78652 119.177 0.941895 123.966 0.941895C128.755 0.941895 133.349 2.78652 136.741 6.07186L246.56 112.798C247.017 113.24 247.379 113.765 247.626 114.344C247.874 114.922 248.001 115.543 248 116.169Z" fill="black"></path></svg></div> `;
    if (faq.open) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="answer svelte-n6ykiu">${escape_html(faq.answer)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
export {
  _page as default
};
