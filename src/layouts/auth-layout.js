import { LitElement, html, css } from 'lit';

export class AuthLayout extends LitElement {
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
customElements.define('auth-layout', AuthLayout);
