import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import PortfolioViewer from '~/components/portfolio-viewer/portfolio-viewer';

export const useDadJoke = routeLoader$(async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  return (await response.json()) as {
    id: string;
    status: number;
    joke: string;
  };
})

export default component$(() => {
  const isPortolioViewerOpen = useSignal(false);
  const dadJokeSignal = useDadJoke();

  return (
    <div>
      <p>No portfolio at this moment.</p>
      <button onClick$={() => (isPortolioViewerOpen.value = !isPortolioViewerOpen.value)}>Get my portfolio</button>
      {isPortolioViewerOpen.value ? <PortfolioViewer></PortfolioViewer> : <p>{dadJokeSignal.value.joke}</p>}
    </div>
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
