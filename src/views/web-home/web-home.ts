import { customElement, html, LitElement } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { Order } from "../../interfaces/order.interface";
import { OrderService } from "../../services/order.service";

import './web-home.scss';

@customElement('web-home')
export default class WebHome extends PageMixin(LitElement) {

    render() {
        return html`
            <p>Orders</p>
            <button class="primary" @click=${this.createOrder}>Create Order</button>
            <order-list></order-list>
        `;
    }

    async createOrder() {
        const order: Order = {
            timestamp: new Date().getTime()
        }
        await OrderService.createOrder(order);
    }

}