import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {

    static get properties() {
        return {
            type: { type: String },
            message: { type: String },
        };
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <div class="alert ${this.type}">
                ${this.message}
            </div>
        `;
    }
}
customElements.define('alert-component', AlertComponent);
