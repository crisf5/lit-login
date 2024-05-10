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
            .alert{
                border: 1px solid black;
                border-radius:10px;
                padding:20px;
                box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
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
