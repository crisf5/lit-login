import { LitElement, html, css } from "lit";

import "@dile/dile-nav/dile-nav.js";
import "../layouts/auth-layout.js";

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <auth-layout>
        <dile-nav slot="header">
          <h2 slot="title">Lit App</h2>
          <span slot="menu">[x]</span>
          <span slot="actions">Logout</span>
        </dile-nav>
        <p slot="footer">Todos los derechos reservados</p>
      </auth-layout>
    `;
  }
}
customElements.define("home-page", HomePage);
