import { LitElement, html, css } from "lit";

export class PublicLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        justify-content: center;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define("public-layout", PublicLayout);
