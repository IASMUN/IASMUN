import { a3 as ensure_array_like, a1 as head, W as attr, $ as stringify, S as escape_html } from "../../../../../chunks/index.js";
import { S as Saos } from "../../../../../chunks/Saos.js";
import { S as Shape1 } from "../../../../../chunks/Vector 1.js";
import { S as Shape8, L as Line3 } from "../../../../../chunks/Vector 8.js";
function _page($$payload) {
  let days = [
    {
      day: "Friday (10th March)",
      timing: [
        {
          start: "1:30pm",
          end: "3pm",
          desc: "Arrival and Registration"
        },
        {
          start: "3pm",
          end: "5pm",
          desc: "Opening Ceremony"
        },
        {
          start: "5pm",
          end: "5:30pm",
          desc: "Short Break"
        },
        {
          start: "5:30pm",
          end: "7:30pm",
          desc: "First Committee Session"
        }
      ]
    },
    {
      day: "Saturday (11th March)",
      timing: [
        {
          start: "9:20am",
          end: "10am",
          desc: "Arrival"
        },
        {
          start: "10am",
          end: "12:30pm",
          desc: "Second Committee Session"
        },
        { start: "12:30pm", end: "2pm", desc: "Break" },
        {
          start: "2pm",
          end: "4pm",
          desc: "Third Committee Session"
        },
        { start: "4pm", end: "5pm", desc: "Break" },
        {
          start: "5pm",
          end: "6:30pm",
          desc: "Fourth Committee Session"
        },
        {
          start: "6:30pm",
          end: "7pm",
          desc: "Short Break"
        },
        {
          start: "7pm",
          end: "8:30pm",
          desc: "Social Night"
        }
      ]
    },
    {
      day: "Sunday (12th March)",
      timing: [
        {
          start: "9:20am",
          end: "10am",
          desc: "Arrival"
        },
        {
          start: "10am",
          end: "12:30pm",
          desc: "Fifth Committee Session"
        },
        { start: "12:30pm", end: "2pm", desc: "Break" },
        {
          start: "2pm",
          end: "4:30pm",
          desc: "Sixth Committee Session"
        },
        {
          start: "4:30pm",
          end: "6pm",
          desc: "Awards Ceremony"
        }
      ]
    }
  ];
  const each_array = ensure_array_like(days);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Conference Schedule</title>`;
  });
  $$payload.out += `<img class="shapes shape1 svelte-1kbyb3j"${attr("src", Shape1)} alt=""> <img class="shapes shape2 svelte-1kbyb3j"${attr("src", Shape8)} alt=""> `;
  Saos($$payload, {
    once: true,
    animation: "slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="header svelte-1kbyb3j">Conference <b class="svelte-1kbyb3j">Schedule</b></h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <img class="lines line3 svelte-1kbyb3j"${attr("src", Line3)} alt=""> <div class="timings svelte-1kbyb3j"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let day = each_array[$$index_1];
    const each_array_1 = ensure_array_like(day.timing);
    $$payload.out += `<div${attr("class", `${stringify(`container ${day.day}`)} svelte-1kbyb3j`)}><h1 class="svelte-1kbyb3j">${escape_html(day.day)}</h1> <!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let timing = each_array_1[$$index];
      $$payload.out += `<p class="timing svelte-1kbyb3j">${escape_html(timing.start)} - ${escape_html(timing.end)}</p> <p class="timing-desc svelte-1kbyb3j">${escape_html(timing.desc)}</p>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  _page as default
};
