import { customElement, html, LitElement } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { router } from "../../client-packages/router/router";
import { getRoute } from './routes';

import './web-root.scss';

@customElement('web-root')
export default class WebRoot extends PageMixin(LitElement) {

    render() {
        return html`
        <div class="root-content">
            ${this.renderOutlet()}
        </div>
        `;
    }

    async firstUpdated() {
        router.subscribe(() => this.requestUpdate());
    }


    renderOutlet() {
        const route = getRoute(router.getPath());
        return route.template;
    }

}