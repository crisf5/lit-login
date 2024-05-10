import { LitElement, html, css } from "lit";

export class AuthLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: grid;
        grid-tempalte-rows: auto 1fr auto;
      }

      header, footer{
        background-color: #e4eafb;
        padding: 16px;
      }

      main{
        padding: 16px;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}
customElements.define("auth-layout", AuthLayout);
