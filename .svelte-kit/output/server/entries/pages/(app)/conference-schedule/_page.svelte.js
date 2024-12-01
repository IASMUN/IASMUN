import { a3 as ensure_array_like, a1 as head, W as attr, $ as stringify, S as escape_html } from "../../../../chunks/index.js";
import { S as Saos } from "../../../../chunks/Saos.js";
function _page($$payload) {
  let days = [
    {
      day: "Friday",
      date: "(JANUARY 17TH 2025)",
      timing: [
        {
          start: "1:30pm",
          end: "3:00pm",
          desc: "Arrival and Registration"
        },
        {
          start: "3:00pm",
          end: "5:00pm",
          desc: "Opening Ceremony"
        },
        {
          start: "5:00pm",
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
      day: "Saturday",
      date: "(JANUARY 18th 2025)",
      timing: [
        {
          start: "9:20am",
          end: "10:00am",
          desc: "Arrival"
        },
        {
          start: "10:00am",
          end: "12:30pm",
          desc: "Second Committee Session"
        },
        {
          start: "12:30pm",
          end: "2:00pm",
          desc: "Break(Snack Included)"
        },
        {
          start: "2:00pm",
          end: "4:00pm",
          desc: "Third Committee Session"
        },
        {
          start: "4:00pm",
          end: "5:00pm",
          desc: "Break(Snack Included)"
        },
        {
          start: "5:00pm",
          end: "6:30pm",
          desc: "Fourth Committee Session"
        },
        {
          start: "6:30pm",
          end: "7:00pm",
          desc: "Break"
        },
        {
          start: "7:00pm",
          end: "9:00pm",
          desc: "Social Night"
        }
      ]
    },
    {
      day: "Sunday",
      date: "(JANUARY 19th 2025)",
      timing: [
        {
          start: "9:20am",
          end: "10:00am",
          desc: "Arrival"
        },
        {
          start: "10:00am",
          end: "12:30pm",
          desc: "Fifth Committee Session"
        },
        {
          start: "12:30pm",
          end: "2:00pm",
          desc: "Break(Snack Included)"
        },
        {
          start: "2:00pm",
          end: "4:30pm",
          desc: "Sixth Committee Session"
        },
        {
          start: "4:30pm",
          end: "5:00pm",
          desc: "Break(Snack Included)"
        },
        {
          start: "5:00pm",
          end: "7:00pm",
          desc: "Gala Dinner"
        },
        {
          start: "7:00pm",
          end: "8:30pm",
          desc: "Closing Ceremony"
        }
      ]
    }
  ];
  const each_array = ensure_array_like(days);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Conference Schedule</title>`;
    $$payload2.out += `<meta name="description" content="The Conference Schedule for The Event of IASMUN" class="svelte-stzu7y">`;
  });
  $$payload.out += `<div class="main svelte-stzu7y">`;
  Saos($$payload, {
    once: true,
    animation: "slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="header svelte-stzu7y">Conference Schedule</h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="timings svelte-stzu7y"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let day = each_array[$$index_1];
    const each_array_1 = ensure_array_like(day.timing);
    $$payload.out += `<div${attr("class", `${stringify(`container ${day.day}`)} svelte-stzu7y`)}><h1 class="timing-header svelte-stzu7y">${escape_html(day.day)}</h1> <h2 class="timing-header svelte-stzu7y">${escape_html(day.date)}</h2> <hr class="line svelte-stzu7y"> <!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let timing = each_array_1[$$index];
      $$payload.out += `<p class="timing svelte-stzu7y">${escape_html(timing.start)} - ${escape_html(timing.end)}</p> <p class="timing-desc svelte-stzu7y">${escape_html(timing.desc)}</p>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
export {
  _page as default
};
