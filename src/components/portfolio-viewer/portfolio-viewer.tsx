import { component$, useContext } from '@builder.io/qwik';
import { CTX } from '~/routes';

export default component$(() => {
    const data = useContext(CTX);

    return (
        <div>
            <section>
                <h2>Bottom Up Plan</h2>
                {data.bottom_up.map((item) => (
                    <div key={item.ticker}>
                        <h3>{item.ticker}</h3>
                        <ul>
                            <li>amount: {item.amount}</li>
                            <li>cost: {item.cost}</li>
                            <li>holdings: {item.holdings}</li>
                            <li>price: {item.price}</li>
                            <li>ratio: {item.ratio}</li>
                            <li>target_ratio: {item.target_ratio}</li>
                        </ul>
                    </div>
                ))}
            </section>
            <section>
                <h2>Smallest Diff Plan</h2>
                {data.smallest_diff.map((item) => (
                    <div key={item.ticker}>
                        <h3>{item.ticker}</h3>
                        <ul>
                            <li>amount: {item.amount}</li>
                            <li>cost: {item.cost}</li>
                            <li>holdings: {item.holdings}</li>
                            <li>price: {item.price}</li>
                            <li>ratio: {item.ratio}</li>
                            <li>target_ratio: {item.target_ratio}</li>
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    )
})