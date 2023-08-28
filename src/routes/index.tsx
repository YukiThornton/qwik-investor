import { component$, createContextId, useContextProvider, useSignal, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import PortfolioViewer from '~/components/portfolio-viewer/portfolio-viewer';
import type { PortfolioResponse } from '~/types/portfolio-response';

export const CTX = createContextId<PortfolioResponse>('portfolio');

export const usePortfolio = routeLoader$(async () => {
  const response = await fetch('http://localhost:7890/plans', {
    method: 'POST',
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify({
      budget: {
          max: 720,
          min: 670
      },
      portfolio: [
          {ticker: "Ticker1", price: 409.19, holdings: 40, target_ratio: 0.6},
          {ticker: "Ticker2", price: 72.86, holdings: 224, target_ratio: 0.4},
      ]
  }),
  });
  if (response.status == 200) {
    return (await response.json()) as PortfolioResponse;
  } else {
    console.error('Failed to fetch portfolio');
    console.log(response);
    throw new Error();
  }
})

export default component$(() => {
  const isPortolioViewerOpen = useSignal(false);
  const portfolioSignal = usePortfolio();
  const portfolioData = useStore(portfolioSignal.value);
  useContextProvider(CTX, portfolioData);

  return (
    <div>
      <p>No portfolio at this moment.</p>
      <button onClick$={() => (isPortolioViewerOpen.value = !isPortolioViewerOpen.value)}>Get my portfolio</button>
      {isPortolioViewerOpen.value ? <PortfolioViewer></PortfolioViewer> : <p>{portfolioSignal.value.bottom_up[0].ticker}</p>}
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
