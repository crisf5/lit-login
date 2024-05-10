import { LitElement, html, css } from 'lit';

export class RouterApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('router-app', RouterApp);

