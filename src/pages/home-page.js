import { LitElement, html, css } from "lit";

import "@dile/dile-nav/dile-nav.js";
import "../layouts/auth-layout.js";

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        height: 100vh;
        width: 100%;
      }

      dile-nav {
        background-color: #1b358d;
      }

      dile-nav span {
        margin-right: 30px;
      }

      .main{
        width:100%
      }

      .footer {
        text-align: center;
        background-color: #e4e8e9;
        margin: 0;
        padding: 7px;
      }
    `,
  ];

  render() {
    return html`
      <auth-layout>
        <dile-nav slot="header">
          <h2 slot="title">Aplicacion LIT</h2>
          <span slot="actions">Logout</span>
        </dile-nav>
        <div class="main" slot="main">
        </div>
        <p class="footer" slot="footer">
          Todos los derechos reservados &copy; 2024 <br />Cristian F.
        </p>
      </auth-layout>
    `;
  }
}
customElements.define("home-page", HomePage);
