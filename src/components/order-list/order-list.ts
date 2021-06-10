import { customElement, html, LitElement, property } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { Order } from "../../interfaces/order.interface";
import { OrderService } from "../../services/order.service";

import './order-list.scss';

@customElement('order-list')
export default class OrderList extends PageMixin(LitElement) {

    @property() orders: Order[] = [];

    render() {
        console.log(this.orders);
        return html`
            <p>Order List:</p>
            ${this.orders.sort((o1:Order, o2:Order) => o2.timestamp-o1.timestamp).map((order: Order, index: number) => {
                return html`<div>Order No. ${index} from ${new Date(order.timestamp).toLocaleString()}</div>`
            })}
        `;
    }

    async firstUpdated() {
        OrderService.onUpdate((orders: Order[]) => {
            this.orders = orders;
            this.requestUpdate();
        })
    }

}