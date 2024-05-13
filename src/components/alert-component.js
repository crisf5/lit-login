import { LitElement, html, css } from "lit";

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
      .alert {
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.75);
        text-align: center;
      }

      .alert.error{
        color: red;
      }

      .alert.success{
        color:green;
      }
    `,
  ];

  render() {
    return html` <div class="alert ${this.type}">${this.message}</div> `;
  }
}
customElements.define("alert-component", AlertComponent);
