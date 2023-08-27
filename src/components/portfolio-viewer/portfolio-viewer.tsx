import { component$ } from '@builder.io/qwik';
import { PortfolioItem } from '~/types/portfolio-response';

export default component$<PortfolioItem>((props) => {
    return (
        <section>
            <p>ta-da!</p>
            <ul>
                <li>amount: {props.amount}</li>
                <li>cost: {props.cost}</li>
                <li>holdings: {props.holdings}</li>
                <li>price: {props.price}</li>
                <li>ratio: {props.ratio}</li>
                <li>target_ratio: {props.target_ratio}</li>
                <li>ticker: {props.ticker}</li>
            </ul>
        </section>
    )
})