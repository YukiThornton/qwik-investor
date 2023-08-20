import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <>
      No portfolio at this moment.
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Investor",
  meta: [
    {
      name: "description",
      content: "Qwik Investor top page",
    },
  ],
};
